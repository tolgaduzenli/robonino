'use client';

import { useRef, useState, type FormEvent } from 'react';
import Script from 'next/script';
import { colors } from '@/lib/content/colors';
import type { Dictionary } from '@/lib/i18n/dictionaries';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputStyle: React.CSSProperties = {
  borderColor: 'oklch(90% 0.01 258)',
  color: 'oklch(22% 0.02 258)',
};

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

async function getRecaptchaToken(): Promise<string | undefined> {
  if (!RECAPTCHA_SITE_KEY || typeof window === 'undefined' || !window.grecaptcha) return undefined;
  return new Promise((resolve) => {
    window.grecaptcha!.ready(() => {
      window
        .grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: 'contact_submit' })
        .then(resolve)
        .catch(() => resolve(undefined));
    });
  });
}

export function ContactForm({ dict }: { dict: Dictionary['contact']['form'] }) {
  const [status, setStatus] = useState<Status>('idle');
  const renderedAt = useRef(Date.now());

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      interest: (form.elements.namedItem('interest') as HTMLSelectElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
      company: (form.elements.namedItem('company') as HTMLInputElement)?.value,
      elapsedMs: Date.now() - renderedAt.current,
      recaptchaToken: await getRecaptchaToken(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('request_failed');
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex min-w-[300px] flex-[1_1_480px] flex-col gap-[18px] rounded-[22px] bg-white p-10"
      style={{ boxShadow: '0 14px 36px oklch(30% 0.09 258 / 0.09)' }}
    >
      {RECAPTCHA_SITE_KEY && (
        <Script src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`} strategy="afterInteractive" />
      )}
      {/* Honeypot: hidden from sighted users and screen readers, bots that auto-fill forms still populate it. */}
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden"
      />
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[180px] flex-[1_1_200px]">
          <label className="mb-1.5 block font-poppins text-[13px] font-bold" style={{ color: 'oklch(30% 0.02 258)' }}>
            {dict.fullName}
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder={dict.fullNamePlaceholder}
            className="rn-input w-full rounded-[10px] border-[1.5px] px-3.5 py-3 font-nunito text-[14.5px]"
            style={inputStyle}
          />
        </div>
        <div className="min-w-[180px] flex-[1_1_200px]">
          <label className="mb-1.5 block font-poppins text-[13px] font-bold" style={{ color: 'oklch(30% 0.02 258)' }}>
            {dict.email}
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder={dict.emailPlaceholder}
            className="rn-input w-full rounded-[10px] border-[1.5px] px-3.5 py-3 font-nunito text-[14.5px]"
            style={inputStyle}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <div className="min-w-[180px] flex-[1_1_200px]">
          <label className="mb-1.5 block font-poppins text-[13px] font-bold" style={{ color: 'oklch(30% 0.02 258)' }}>
            {dict.phone}
          </label>
          <input
            name="phone"
            type="tel"
            placeholder={dict.phonePlaceholder}
            className="rn-input w-full rounded-[10px] border-[1.5px] px-3.5 py-3 font-nunito text-[14.5px]"
            style={inputStyle}
          />
        </div>
        <div className="min-w-[180px] flex-[1_1_200px]">
          <label className="mb-1.5 block font-poppins text-[13px] font-bold" style={{ color: 'oklch(30% 0.02 258)' }}>
            {dict.interest}
          </label>
          <select
            name="interest"
            className="rn-input w-full rounded-[10px] border-[1.5px] bg-white px-3.5 py-3 font-nunito text-[14.5px]"
            style={inputStyle}
          >
            {dict.interestOptions.map((opt) => (
              <option key={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label className="mb-1.5 block font-poppins text-[13px] font-bold" style={{ color: 'oklch(30% 0.02 258)' }}>
          {dict.message}
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder={dict.messagePlaceholder}
          className="rn-input w-full resize-y rounded-[10px] border-[1.5px] px-3.5 py-3 font-nunito text-[14.5px]"
          style={inputStyle}
        />
      </div>
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="self-start rounded-xl border-none px-8 py-[15px] font-poppins text-[15px] font-bold text-white disabled:opacity-70"
        style={{ background: colors.blue, boxShadow: `0 10px 24px ${colors.blue.replace(')', ' / 0.28)')}` }}
      >
        {status === 'submitting' ? dict.sending : dict.submit}
      </button>
      {status === 'success' && (
        <p className="m-0 text-sm" style={{ color: 'oklch(50% 0.14 150)' }}>
          {dict.success}
        </p>
      )}
      {status === 'error' && (
        <p className="m-0 text-sm" style={{ color: 'oklch(55% 0.18 25)' }}>
          {dict.error}
        </p>
      )}
    </form>
  );
}
