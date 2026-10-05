/**
 * Cloudflare Pages Function — contact form → Resend.
 * Uses RESEND_API_KEY from Pages secrets (never NEXT_PUBLIC_*).
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
};

const FROM = "MSWA <kontakt@mswa.pl>";
const TO = "kontakt@mswa.pl";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const data = body as Record<string, unknown>;
  return (
    typeof data.name === "string" &&
    typeof data.email === "string" &&
    typeof data.phone === "string" &&
    typeof data.business === "string" &&
    typeof data.message === "string"
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

export async function onRequest(context: {
  request: Request;
  env: Env;
}) {
  if (context.request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405);
  }

  let body: unknown;

  try {
    body = await context.request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  if (!isValidPayload(body)) {
    return json({ ok: false, error: "invalid_payload" }, 400);
  }

  const payload: ContactPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    business: body.business.trim(),
    message: body.message.trim(),
  };

  if (!payload.name || !payload.email || !payload.business || !payload.message) {
    return json({ ok: false, error: "missing_fields" }, 400);
  }

  if (!EMAIL_RE.test(payload.email)) {
    return json({ ok: false, error: "invalid_email" }, 400);
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
        reply_to: payload.email,
        subject: `Nowe zapytanie ze strony MSWA — ${payload.name}`,
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
