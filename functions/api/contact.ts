/**
 * Cloudflare Pages Function — contact form → Resend.
 * Uses RESEND_API_KEY + TURNSTILE_SECRET_KEY from Pages secrets (never NEXT_PUBLIC_*).
 */

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
};

type TurnstileSiteverifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

const FROM = "MSWA <kontakt@mswa.pl>";
const TO = "kontakt@mswa.pl";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_BODY_BYTES = 20 * 1024;
const MAX_TURNSTILE_TOKEN = 2048;
const LIMITS = {
  name: 100,
  email: 254,
  phone: 50,
  business: 300,
  message: 5000,
  subjectName: 80,
} as const;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

/** Generic client error — no technical details. */
function badRequest() {
  return json({ ok: false, error: "invalid_request" }, 400);
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

export async function onRequest(context: {
  request: Request;
  env: Env;
}) {
  if (context.request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405);
  }

  const contentType = context.request.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return badRequest();
  }

  const contentLength = context.request.headers.get("content-length");
  if (contentLength) {
    const size = Number(contentLength);
    if (!Number.isFinite(size) || size < 0 || size > MAX_BODY_BYTES) {
      return badRequest();
    }
  }

  let body: unknown;

  try {
    const raw = await context.request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return badRequest();
    }
    body = JSON.parse(raw) as unknown;
  } catch {
    return badRequest();
  }

  if (!isValidPayload(body)) {
    return badRequest();
  }

  const payload: ContactPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    business: body.business.trim(),
    message: body.message.trim(),
  };

  if (!payload.name || !payload.email || !payload.business || !payload.message) {
    return badRequest();
  }

  if (!withinLimits(payload)) {
    return badRequest();
  }

  if (!EMAIL_RE.test(payload.email)) {
    return badRequest();
  }

  const replyTo = sanitizeHeaderFragment(payload.email, LIMITS.email);
  if (!EMAIL_RE.test(replyTo)) {
    return badRequest();
  }

  const subjectName = sanitizeHeaderFragment(payload.name, LIMITS.subjectName);
  if (!subjectName) {
    return badRequest();
  }

  // Honeypot: bots fill "website"; humans leave it empty.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json({ ok: true });
  }

  const turnstileSecret = context.env.TURNSTILE_SECRET_KEY?.trim();
  if (!turnstileSecret) {
    console.error("[contact] TURNSTILE_SECRET_KEY is not configured");
    return json({ ok: false, error: "not_configured" }, 503);
  }

  const turnstileToken =
    typeof body.turnstileToken === "string" ? body.turnstileToken.trim() : "";
  if (!turnstileToken || turnstileToken.length > MAX_TURNSTILE_TOKEN) {
    return badRequest();
  }

  const remoteip = context.request.headers.get("CF-Connecting-IP");

  let turnstileOk = false;
  try {
    turnstileOk = await verifyTurnstile(
      turnstileSecret,
      turnstileToken,
      remoteip,
    );
  } catch (error) {
    console.error("[contact] Turnstile siteverify failed", error);
    return badRequest();
  }

  if (!turnstileOk) {
    return badRequest();
  }

  const apiKey = context.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not configured");
    return json({ ok: false, error: "not_configured" }, 503);
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
      return json({ ok: false, error: "delivery_failed" }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    console.error("[contact] Resend request failed", error);
    return json({ ok: false, error: "delivery_failed" }, 502);
  }
}
