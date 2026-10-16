import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

/**
 * Contact form submission endpoint.
 *
 * Sends the submission to CONTACT_TO_EMAIL via Resend. Without
 * RESEND_API_KEY set, it falls back to console.log only (local dev before
 * the keys are configured) — see .env.example for setup.
 *
 * Spam defenses, in order: a honeypot field only bots fill in, a minimum
 * elapsed-time check (bots submit near-instantly), and Google reCAPTCHA v3
 * (score-based, no challenge shown to real users). The first two need no
 * configuration. reCAPTCHA activates once RECAPTCHA_SECRET_KEY is set — see
 * .env.example for setup.
 */

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_MIN_SCORE = 0.5;
const MIN_SUBMIT_MS = 2500;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'info@robonino.com';
const CONTACT_FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'Robonino Website <website@robonino.com>';

async function isRecaptchaValid(token: unknown): Promise<boolean> {
  if (!RECAPTCHA_SECRET_KEY) return true; // not configured yet — skip, rely on honeypot/timing only
  if (typeof token !== 'string' || !token) return false;

  try {
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret: RECAPTCHA_SECRET_KEY, response: token }),
    });
    const result = await res.json();
    return result.success === true && (result.score ?? 1) >= RECAPTCHA_MIN_SCORE && result.action === 'contact_submit';
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const { name, email, phone, interest, message, company, elapsedMs, recaptchaToken } = body as Record<
    string,
    unknown
  >;

  // Honeypot: real users never see or fill this field; bots that auto-fill
  // every input do. Pretend success so the bot doesn't adjust and retry.
  if (typeof company === 'string' && company.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  // Timing trap: a human needs at least a couple seconds to fill the form.
  if (typeof elapsedMs === 'number' && elapsedMs < MIN_SUBMIT_MS) {
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string' || !name || !email || !message) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 });
  }

  if (!(await isRecaptchaValid(recaptchaToken))) {
    return NextResponse.json({ ok: false, error: 'spam_detected' }, { status: 400 });
  }

  const phoneStr = typeof phone === 'string' ? phone : '';
  const interestStr = typeof interest === 'string' ? interest : '';

  if (!resend) {
    console.log('New contact form submission (RESEND_API_KEY not set, email not sent):', {
      name,
      email,
      phone: phoneStr,
      interest: interestStr,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    await resend.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        phoneStr && `Phone: ${phoneStr}`,
        interestStr && `Interest: ${interestStr}`,
        '',
        'Message:',
        message,
      ]
        .filter(Boolean)
        .join('\n'),
    });
  } catch (err) {
    console.error('Failed to send contact email:', err);
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
