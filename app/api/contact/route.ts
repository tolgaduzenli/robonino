import { NextRequest, NextResponse } from 'next/server';

/**
 * Contact form submission endpoint.
 *
 * This currently validates the payload and returns success without actually
 * sending an email — wiring this up to a real provider (Resend, Postmark,
 * SendGrid, etc.) or a CRM webhook is the one remaining integration step.
 * The shape of the request/response is already what the client form expects,
 * so dropping in a real provider only requires filling in the TODO below.
 */
export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const { name, email, phone, interest, message } = body as Record<string, string>;

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  // TODO: send an email / push to CRM here, e.g.:
  // await resend.emails.send({ from: '...', to: 'info@robonino.com', ... });
  console.log('New contact form submission:', { name, email, phone, interest, message });

  return NextResponse.json({ ok: true });
}
