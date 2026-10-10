/**
 * Cloudflare Pages Function — contact form → Resend.
 * Uses RESEND_API_KEY + TURNSTILE_SECRET_KEY from Pages secrets (never NEXT_PUBLIC_*).
 *
 * Rate limit: best-effort Cache API counter per CF-Connecting-IP.
 * Not a guaranteed global quota — see enforceRateLimit().
 *
 * Optional Preview-only allowlist (set in CF Preview env, never required on Production):
 *   CONTACT_ALLOWED_ORIGINS=https://<preview>.pages.dev
 */

import { isValidEmail, EMAIL_MAX_LENGTH } from "../../lib/email";

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
};

type Env = {
  RESEND_API_KEY?: string;
  TURNSTILE_SECRET_KEY?: string;
  /** Comma-separated extra Origins (e.g. CF Pages Preview). Production can omit. */
  CONTACT_ALLOWED_ORIGINS?: string;
};

type TurnstileSiteverifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

const FROM = "MSWA <kontakt@mswa.pl>";
const TO = "kontakt@mswa.pl";
const MAX_BODY_BYTES = 20 * 1024;
const MAX_TURNSTILE_TOKEN = 2048;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_SECONDS = 60;
const ALLOWED_ORIGINS = new Set([
  "https://mswa.pl",
  "https://www.mswa.pl",
]);
const LIMITS = {
  name: 100,
  email: EMAIL_MAX_LENGTH,
  phone: 50,
  business: 300,
  message: 5000,
  subjectName: 80,
} as const;

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

/** Generic client error — no technical details. */
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

/** Strip CR/LF and collapse control chars so values cannot influence headers. */
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
  // Same-origin / non-browser tools may omit Origin; Turnstile + rate limit still apply.
  if (!origin) return true;
  return allowedOrigins.has(origin);
}

function isValidPayload(
  body: unknown,
): body is ContactPayload & {
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
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.phone === "string" &&
    typeof data.business === "string" &&
    typeof data.message === "string"
  );
}

function withinLimits(payload: ContactPayload) {
  return (
    payload.name.length <= LIMITS.name &&
    payload.email.length <= LIMITS.email &&
    payload.phone.length <= LIMITS.phone &&
    payload.business.length <= LIMITS.business &&
    payload.message.length <= LIMITS.message
  );
}

function buildText(payload: ContactPayload) {
  const phone = payload.phone || "—";
  return [
    "Nowe zapytanie ze strony MSWA",
    "",
    `Imię / firma: ${payload.name}`,
    `E-mail: ${payload.email}`,
    `Telefon: ${phone}`,
    `Czym zajmuje się firma: ${payload.business}`,
    `Czego potrzebuje: ${payload.message}`,
  ].join("\n");
}

function buildHtml(payload: ContactPayload) {
  const phone = payload.phone || "—";
  const rows: Array<[string, string]> = [
    ["Imię / firma", payload.name],
    ["E-mail", payload.email],
    ["Telefon", phone],
    ["Czym zajmuje się firma", payload.business],
    ["Czego potrzebuje", payload.message],
  ];

  const body = rows
    .map(
      ([label, value]) =>
        `<p style="margin:0 0 12px;"><strong>${escapeHtml(label)}:</strong><br>${escapeHtml(value).replace(/\n/g, "<br>")}</p>`,
    )
    .join("");

  return `<!DOCTYPE html>
<html>
  <body style="font-family:system-ui,-apple-system,sans-serif;line-height:1.5;color:#111;">
    <h1 style="font-size:18px;font-weight:600;margin:0 0 20px;">Nowe zapytanie ze strony MSWA</h1>
    ${body}
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
    console.error("[contact] Turnstile siteverify HTTP", response.status);
    return false;
  }

  const result = (await response.json()) as TurnstileSiteverifyResponse;
  return result.success === true;
}

/**
 * Soft, best-effort rate limit (NOT a guaranteed global 5/60s quota).
 *
 * Cloudflare Cache API realities:
 * - Counters are local to the data center (PoP), not replicated globally.
 * - Concurrent requests are not collapsed — a burst can read the same count
 *   and all pass before puts land (TOCTOU race).
 * - Fail-open on cache errors so legitimate leads are not blocked.
 *
 * When the soft limit is exceeded in this PoP, responds with HTTP 429 +
 * Retry-After and `{ ok: false, error: "rate_limited" }`.
 * Real antispam remains Turnstile + honeypot + Resend.
 */
async function enforceRateLimit(
  request: Request,
  extraHeaders: Record<string, string>,
): Promise<Response | null> {
  try {
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const bucket = Math.floor(Date.now() / (RATE_LIMIT_WINDOW_SECONDS * 1000));
    const cacheKey = new Request(
      `https://mswa.pl/__rate-limit/contact/${encodeURIComponent(ip)}/${bucket}`,
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
    console.error("[contact] rate limit unavailable", error);
  }
  return null;
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

  if (!isValidPayload(body)) {
    return badRequest(headers);
  }

  const payload: ContactPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    business: body.business.trim(),
    message: body.message.trim(),
  };

  if (!payload.name || !payload.email || !payload.business || !payload.message) {
    return badRequest(headers);
  }

  if (!withinLimits(payload)) {
    return badRequest(headers);
  }

  if (!isValidEmail(payload.email)) {
    return badRequest(headers);
  }

  const replyTo = sanitizeHeaderFragment(payload.email, LIMITS.email);
  if (!isValidEmail(replyTo)) {
    return badRequest(headers);
  }

  const subjectName = sanitizeHeaderFragment(payload.name, LIMITS.subjectName);
  if (!subjectName) {
    return badRequest(headers);
  }

  // Honeypot: bots fill "website"; humans leave it empty.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true }, 200, headers);
  }

  const turnstileSecret = context.env.TURNSTILE_SECRET_KEY?.trim();
  if (!turnstileSecret) {
    console.error("[contact] TURNSTILE_SECRET_KEY is not configured");
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
    console.error("[contact] Turnstile siteverify failed", error);
    return badRequest(headers);
  }

  if (!turnstileOk) {
    return badRequest(headers);
  }

  const apiKey = context.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return json({ ok: false, error: "not_configured" }, 503, headers);
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO],
        reply_to: replyTo,
        subject: `Nowe zapytanie ze strony MSWA — ${subjectName}`,
        text: buildText(payload),
        html: buildHtml(payload),
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      console.error("[contact] Resend error", response.status, detail);
      return json({ ok: false, error: "delivery_failed" }, 502, headers);
    }

    return json({ ok: true }, 200, headers);
  } catch (error) {
    console.error("[contact] Resend request failed", error);
    return json({ ok: false, error: "delivery_failed" }, 502, headers);
  }
}
