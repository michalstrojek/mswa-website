/**
 * Cloudflare Pages Function — DSA notice-and-action → Resend.
 * Uses RESEND_API_KEY + TURNSTILE_SECRET_KEY from Pages secrets (never NEXT_PUBLIC_*).
 *
 * Separate from /api/contact so commercial leads and art. 16 notices stay distinct.
 */

import { isValidEmail, EMAIL_MAX_LENGTH } from "../../lib/email";
import {
  DSA_LIMITS,
  isDsaReportType,
  parseDsaUrls,
  type DsaPayload,
  type DsaReportType,
} from "../../lib/dsa";

type Env = {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  CONTACT_ALLOWED_ORIGINS?: string;
};

type TurnstileSiteverifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

const FROM = "MSWA <kontakt@mswa.pl>";
const TO = "kontakt@mswa.pl";
const MAX_BODY_BYTES = 24 * 1024;
const MAX_TURNSTILE_TOKEN = 2048;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 60;
const ALLOWED_ORIGINS = new Set([
  "https://mswa.pl",
  "https://www.mswa.pl",
]);

function json(
  data: unknown,
  status = 200,
  extraHeaders?: HeadersInit,
) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
    },
  });
}

function badRequest(extraHeaders?: HeadersInit) {
  return json({ ok: false, error: "invalid_request" }, 400, extraHeaders);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function sanitizeHeaderFragment(value: string, maxLen: number) {
  return value
    .replace(/[\r\n\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

function resolveAllowedOrigins(env: Env): Set<string> {
  const allowed = new Set(ALLOWED_ORIGINS);
  const extra = env.CONTACT_ALLOWED_ORIGINS ?? "";
  for (const origin of extra.split(",")) {
    const trimmed = origin.trim();
    if (trimmed.startsWith("https://")) {
      allowed.add(trimmed);
    }
  }
  return allowed;
}

function corsHeaders(
  request: Request,
  allowedOrigins: Set<string>,
): Record<string, string> {
  const origin = request.headers.get("Origin");
  if (!origin || !allowedOrigins.has(origin)) {
    return {};
  }
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function isOriginAllowed(
  request: Request,
  allowedOrigins: Set<string>,
): boolean {
  const origin = request.headers.get("Origin");
  if (!origin) return true;
  return allowedOrigins.has(origin);
}

function isHttpUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function reportTypeLabel(type: DsaReportType): string {
  if (type === "child_exploitation") {
    return "Wyjątek — podejrzenie przestępstw z art. 3–7 dyrektywy 2011/93/UE";
  }
  return "Zwykłe zgłoszenie DSA";
}

function isValidBody(
  body: unknown,
): body is {
  reportType: DsaReportType;
  urls: string;
  reason: string;
  details: string;
  name: string;
  email: string;
  goodFaith: boolean;
  website?: string;
  turnstileToken?: string;
} {
  if (!body || typeof body !== "object") return false;
  const data = body as Record<string, unknown>;
  const websiteOk =
    data.website === undefined || typeof data.website === "string";
  const turnstileOk =
    data.turnstileToken === undefined || typeof data.turnstileToken === "string";
  return (
    websiteOk &&
    turnstileOk &&
    isDsaReportType(data.reportType) &&
    typeof data.urls === "string" &&
    typeof data.reason === "string" &&
    typeof data.details === "string" &&
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    data.goodFaith === true
  );
}

function serverValidate(payload: DsaPayload): boolean {
  const isException = payload.reportType === "child_exploitation";
  const urls = parseDsaUrls(payload.urls);

  if (urls.length === 0 || urls.length > DSA_LIMITS.maxUrlCount) return false;
  if (payload.urls.length > DSA_LIMITS.urls) return false;
  if (urls.some((url) => !isHttpUrl(url))) return false;

  if (
    !payload.reason ||
    payload.reason.length < 20 ||
    payload.reason.length > DSA_LIMITS.reason
  ) {
    return false;
  }
  if (payload.details.length > DSA_LIMITS.details) return false;

  if (!isException) {
    if (!payload.name || payload.name.length > DSA_LIMITS.name) return false;
    if (!payload.email || !isValidEmail(payload.email)) return false;
  } else {
    if (payload.name.length > DSA_LIMITS.name) return false;
    if (payload.email && !isValidEmail(payload.email)) return false;
  }

  if (payload.email.length > EMAIL_MAX_LENGTH) return false;
  return payload.goodFaith === true;
}

function buildAdminText(payload: DsaPayload, urls: string[]) {
  return [
    "ZGŁOSZENIE DSA — nielegalne treści (art. 16)",
    "",
    `Typ: ${reportTypeLabel(payload.reportType)}`,
    `Imię / nazwa: ${payload.name || "(nie podano)"}`,
    `E-mail do odpowiedzi: ${payload.email || "(nie podano)"}`,
    "",
    "URL(-e):",
    ...urls.map((url) => `- ${url}`),
    "",
    "Uzasadnienie zarzutu:",
    payload.reason,
    "",
    "Dodatkowe informacje:",
    payload.details || "—",
    "",
    "Oświadczenie o dobrej wierze i kompletności: TAK",
    "",
    "Uwaga: samo zgłoszenie nie usuwa automatycznie treści. Wymagana indywidualna ocena.",
  ].join("\n");
}

function buildAdminHtml(payload: DsaPayload, urls: string[]) {
  const urlList = urls
    .map((url) => `<li>${escapeHtml(url)}</li>`)
    .join("");
  return `<!DOCTYPE html>
<html>
  <body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111;">
    <h1 style="font-size:18px;font-weight:600;margin:0 0 20px;">ZGŁOSZENIE DSA — nielegalne treści</h1>
    <p style="margin:0 0 12px;"><strong>Typ:</strong><br>${escapeHtml(reportTypeLabel(payload.reportType))}</p>
    <p style="margin:0 0 12px;"><strong>Imię / nazwa:</strong><br>${escapeHtml(payload.name || "(nie podano)")}</p>
    <p style="margin:0 0 12px;"><strong>E-mail do odpowiedzi:</strong><br>${escapeHtml(payload.email || "(nie podano)")}</p>
    <p style="margin:0 0 8px;"><strong>URL(-e):</strong></p>
    <ul style="margin:0 0 12px;padding-left:20px;">${urlList}</ul>
    <p style="margin:0 0 12px;"><strong>Uzasadnienie zarzutu:</strong><br>${escapeHtml(payload.reason).replace(/\n/g, "<br>")}</p>
    <p style="margin:0 0 12px;"><strong>Dodatkowe informacje:</strong><br>${escapeHtml(payload.details || "—").replace(/\n/g, "<br>")}</p>
    <p style="margin:0 0 12px;"><strong>Oświadczenie o dobrej wierze i kompletności:</strong> TAK</p>
    <p style="margin:16px 0 0;font-size:13px;color:#444;">Samo zgłoszenie nie usuwa automatycznie treści. Wymagana indywidualna ocena.</p>
  </body>
</html>`;
}

function buildAckText() {
  return [
    "Potwierdzenie odbioru zgłoszenia DSA",
    "",
    "Otrzymaliśmy Twoje zgłoszenie dotyczące treści na stronie utrzymywanej przez MSWA.",
    "",
    "Zgłoszenie zostanie ocenione terminowo, rzetelnie, obiektywnie i bez arbitralności. Samo zgłoszenie nie usuwa automatycznie treści.",
    "",
    "Po zakończeniu oceny poinformujemy Cię o decyzji oraz o faktycznie dostępnych środkach jej zakwestionowania — o ile nadal dysponujemy działającym adresem e-mail do odpowiedzi.",
    "",
    "To potwierdzenie nie jest odpowiedzią marketingową.",
    "",
    "MSWA — Michał Strojek",
    "kontakt@mswa.pl",
  ].join("\n");
}

function buildAckHtml() {
  return `<!DOCTYPE html>
<html>
  <body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111;">
    <h1 style="font-size:18px;font-weight:600;margin:0 0 16px;">Potwierdzenie odbioru zgłoszenia DSA</h1>
    <p>Otrzymaliśmy Twoje zgłoszenie dotyczące treści na stronie utrzymywanej przez MSWA.</p>
    <p>Zgłoszenie zostanie ocenione terminowo, rzetelnie, obiektywnie i bez arbitralności. Samo zgłoszenie nie usuwa automatycznie treści.</p>
    <p>Po zakończeniu oceny poinformujemy Cię o decyzji oraz o faktycznie dostępnych środkach jej zakwestionowania — o ile nadal dysponujemy działającym adresem e-mail do odpowiedzi.</p>
    <p style="font-size:13px;color:#444;">To potwierdzenie nie jest odpowiedzią marketingową.</p>
    <p style="margin-top:20px;">MSWA — Michał Strojek<br>kontakt@mswa.pl</p>
  </body>
</html>`;
}

async function verifyTurnstile(
  secret: string,
  token: string,
  remoteip: string | null,
): Promise<boolean> {
  const body = new URLSearchParams();
  body.set("secret", secret);
  body.set("response", token);
  if (remoteip) body.set("remoteip", remoteip);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    },
  );

  if (!response.ok) {
    console.error("[dsa] Turnstile siteverify HTTP", response.status);
    return false;
  }

  const result = (await response.json()) as TurnstileSiteverifyResponse;
  return result.success === true;
}

async function enforceRateLimit(
  request: Request,
  extraHeaders: Record<string, string>,
): Promise<Response | null> {
  try {
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const bucket = Math.floor(Date.now() / (RATE_LIMIT_WINDOW_SECONDS * 1000));
    const cacheKey = new Request(
      `https://mswa.pl/__rate-limit/dsa/${encodeURIComponent(ip)}/${bucket}`,
    );
    const cache = caches.default;
    const existing = await cache.match(cacheKey);
    let count = 0;
    if (existing) {
      count = Number.parseInt(await existing.text(), 10) || 0;
    }
    if (count >= RATE_LIMIT_MAX) {
      return json(
        { ok: false, error: "rate_limited" },
        429,
        {
          ...extraHeaders,
          "Retry-After": String(RATE_LIMIT_WINDOW_SECONDS),
        },
      );
    }
    await cache.put(
      cacheKey,
      new Response(String(count + 1), {
        headers: {
          "Content-Type": "text/plain",
          "Cache-Control": `max-age=${RATE_LIMIT_WINDOW_SECONDS * 2}`,
        },
      }),
    );
  } catch (error) {
    console.error("[dsa] rate limit unavailable", error);
  }
  return null;
}

async function sendResendEmail(
  apiKey: string,
  payload: Record<string, unknown>,
): Promise<{ ok: boolean; status: number; detail: string }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const detail = await response.text().catch(() => "");
  return { ok: response.ok, status: response.status, detail };
}

export async function onRequest(context: {
  request: Request;
  env: Env;
}) {
  const { request, env } = context;
  const allowedOrigins = resolveAllowedOrigins(env);
  const headers = corsHeaders(request, allowedOrigins);

  if (request.method === "OPTIONS") {
    if (!isOriginAllowed(request, allowedOrigins)) {
      return new Response(null, { status: 403 });
    }
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405, headers);
  }

  if (!isOriginAllowed(request, allowedOrigins)) {
    return json({ ok: false, error: "invalid_request" }, 403, headers);
  }

  const rateLimited = await enforceRateLimit(request, headers);
  if (rateLimited) return rateLimited;

  const contentType = request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return badRequest(headers);
  }

  const contentLength = request.headers.get("content-length");
  if (contentLength) {
    const size = Number(contentLength);
    if (!Number.isFinite(size) || size < 0 || size > MAX_BODY_BYTES) {
      return badRequest(headers);
    }
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return badRequest(headers);
    }
    body = JSON.parse(raw) as unknown;
  } catch {
    return badRequest(headers);
  }

  if (!isValidBody(body)) {
    return badRequest(headers);
  }

  const payload: DsaPayload = {
    reportType: body.reportType,
    urls: body.urls.trim(),
    reason: body.reason.trim(),
    details: body.details.trim(),
    name: body.name.trim(),
    email: body.email.trim(),
    goodFaith: true,
  };

  if (!serverValidate(payload)) {
    return badRequest(headers);
  }

  // Honeypot: bots fill "website"; humans leave it empty.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true, confirmationSent: false }, 200, headers);
  }

  const turnstileSecret = context.env.TURNSTILE_SECRET_KEY?.trim();
  if (!turnstileSecret) {
    console.error("[dsa] TURNSTILE_SECRET_KEY is not configured");
    return json({ ok: false, error: "not_configured" }, 503, headers);
  }

  const turnstileToken =
    typeof body.turnstileToken === "string" ? body.turnstileToken.trim() : "";
  if (!turnstileToken || turnstileToken.length > MAX_TURNSTILE_TOKEN) {
    return badRequest(headers);
  }

  const remoteip = request.headers.get("CF-Connecting-IP");
  let turnstileOk = false;
  try {
    turnstileOk = await verifyTurnstile(
      turnstileSecret,
      turnstileToken,
      remoteip,
    );
  } catch (error) {
    console.error("[dsa] Turnstile siteverify failed", error);
    return badRequest(headers);
  }

  if (!turnstileOk) {
    return badRequest(headers);
  }

  const apiKey = context.env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    console.error("[dsa] RESEND_API_KEY is not configured");
    return json({ ok: false, error: "not_configured" }, 503, headers);
  }

  const urls = parseDsaUrls(payload.urls);
  const subjectTag =
    payload.reportType === "child_exploitation"
      ? "DSA — zgłoszenie (wyjątek 2011/93/UE)"
      : "DSA — zgłoszenie nielegalnych treści";
  const nameFragment = payload.name
    ? sanitizeHeaderFragment(payload.name, DSA_LIMITS.subjectName)
    : "anonimowe";
  const adminSubject = `${subjectTag} — ${nameFragment || "anonimowe"}`;

  const adminMail: Record<string, unknown> = {
    from: FROM,
    to: [TO],
    subject: adminSubject,
    text: buildAdminText(payload, urls),
    html: buildAdminHtml(payload, urls),
  };

  if (payload.email && isValidEmail(payload.email)) {
    const replyTo = sanitizeHeaderFragment(payload.email, DSA_LIMITS.email);
    if (isValidEmail(replyTo)) {
      adminMail.reply_to = replyTo;
    }
  }

  try {
    const adminResult = await sendResendEmail(apiKey, adminMail);
    if (!adminResult.ok) {
      console.error("[dsa] Resend admin error", adminResult.status, adminResult.detail);
      return json({ ok: false, error: "delivery_failed" }, 502, headers);
    }

    let confirmationSent = false;
    if (payload.email && isValidEmail(payload.email)) {
      const toAck = sanitizeHeaderFragment(payload.email, DSA_LIMITS.email);
      if (isValidEmail(toAck)) {
        const ackResult = await sendResendEmail(apiKey, {
          from: FROM,
          to: [toAck],
          subject: "Potwierdzenie odbioru zgłoszenia DSA — MSWA",
          text: buildAckText(),
          html: buildAckHtml(),
        });
        if (ackResult.ok) {
          confirmationSent = true;
        } else {
          // Admin notice already delivered; do not fail the whole request.
          console.error(
            "[dsa] Resend acknowledgement error",
            ackResult.status,
            ackResult.detail,
          );
        }
      }
    }

    return json({ ok: true, confirmationSent }, 200, headers);
  } catch (error) {
    console.error("[dsa] Resend request failed", error);
    return json({ ok: false, error: "delivery_failed" }, 502, headers);
  }
}
