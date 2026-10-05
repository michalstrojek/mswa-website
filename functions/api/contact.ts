/**
 * Cloudflare Pages Function — contact form for static export.
 * Set CONTACT_FORM_WEBHOOK_URL in the Pages project environment.
 */

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  business: string;
  message: string;
};

const SITE_EMAIL = "hello@mswa.pl";

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

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost(context: {
  request: Request;
  env: { CONTACT_FORM_WEBHOOK_URL?: string };
}) {
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

  const webhook = context.env.CONTACT_FORM_WEBHOOK_URL?.trim();

  if (!webhook) {
    return json(
      { ok: false, error: "not_configured", email: SITE_EMAIL },
      503,
    );
  }

  const contact = [payload.email, payload.phone].filter(Boolean).join(" · ");

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "mswa-homepage",
        to: SITE_EMAIL,
        submittedAt: new Date().toISOString(),
        name: payload.name,
        salon: payload.business,
        contact,
        links: payload.phone,
        message: payload.message,
        email: payload.email,
        phone: payload.phone,
        business: payload.business,
      }),
    });

    if (!response.ok) {
      return json({ ok: false, error: "delivery_failed" }, 502);
    }

    return json({ ok: true });
  } catch {
    return json({ ok: false, error: "delivery_failed" }, 502);
  }
}
