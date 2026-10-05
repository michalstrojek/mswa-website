import { NextResponse } from "next/server";
import {
  toWebhookPayload,
  type ContactPayload,
} from "@/lib/contact";
import { site } from "@/lib/site";

export const runtime = "nodejs";

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

/**
 * Contact form submission endpoint.
 *
 * Configure delivery with CONTACT_FORM_WEBHOOK_URL (POST JSON webhook).
 * Until that env var is set, the route returns 503 — the UI will not claim
 * a successful send.
 */
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: body.name.trim(),
    email: body.email.trim(),
    phone: body.phone.trim(),
    business: body.business.trim(),
    message: body.message.trim(),
  };

  if (!payload.name || !payload.email || !payload.business || !payload.message) {
    return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 400 });
  }

  const webhook = process.env.CONTACT_FORM_WEBHOOK_URL?.trim();

  if (!webhook) {
    return NextResponse.json(
      {
        ok: false,
        error: "not_configured",
        email: site.email,
      },
      { status: 503 },
    );
  }

  try {
    const legacy = toWebhookPayload(payload);
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "mswa-homepage",
        to: site.email,
        submittedAt: new Date().toISOString(),
        ...legacy,
        ...payload,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "delivery_failed" }, { status: 502 });
  }
}
