import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';
import { colors } from '@/lib/content/colors';
import { ContactForm } from '@/components/ContactForm';
import { HeroBlobs } from '@/components/ui/Blobs';

export function contactMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  return {
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
    alternates: {
      canonical: getPath('contact', locale),
      languages: { en: getPath('contact', 'en'), tr: getPath('contact', 'tr') },
    },
  };
}

export function ContactView({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale).contact;

  return (
    <>
      <section
        className="relative overflow-hidden px-7 pb-[60px] pt-[76px]"
        style={{ background: 'linear-gradient(180deg, oklch(96% 0.015 258), oklch(99% 0.004 90) 60%)' }}
      >
        <HeroBlobs variant="tint" />
        <div className="relative mx-auto max-w-[700px] text-center">
          <div className="mb-4 font-poppins text-[13px] font-bold uppercase tracking-[0.08em]" style={{ color: colors.blue }}>
            {dict.hero.eyebrow}
          </div>
          <h1
            className="m-0 mb-[18px] font-poppins text-[clamp(30px,4.4vw,46px)] font-extrabold leading-[1.1] tracking-tight"
            style={{ color: colors.textDark }}
          >
            {dict.hero.title}
          </h1>
          <p className="m-0 text-[16.5px] leading-relaxed" style={{ color: colors.textBody }}>
            {dict.hero.desc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1160px] px-7 pb-24 pt-5">
        <div className="flex flex-wrap items-start gap-9">
          <ContactForm dict={dict.form} />

          <div className="flex min-w-[280px] flex-[1_1_300px] flex-col gap-[18px]">
            <div className="rounded-[18px] bg-white p-6" style={{ boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.07)' }}>
              <div className="mb-3.5 font-poppins text-[15.5px] font-bold" style={{ color: colors.textDark }}>
                {dict.info.officeTitle}
              </div>
              <div className="text-sm leading-[1.7]" style={{ color: colors.textMuted }}>
                {dict.info.officeAddressLines.map((line, i) => (
                  <span key={line}>
                    {line}
                    {i < dict.info.officeAddressLines.length - 1 && <br />}
                  </span>
                ))}
              </div>
            </div>

            {/* "Direct Contact" card (email/phone/whatsapp) intentionally not rendered —
                email is kept in the dictionary but not displayed to avoid harvested-address
                spam; use the form above instead. Restore this block if phone/WhatsApp are
                added back.
            <div className="rounded-[18px] bg-white p-6" style={{ boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.07)' }}>
              <div className="mb-3.5 font-poppins text-[15.5px] font-bold" style={{ color: colors.textDark }}>
                {dict.info.directTitle}
              </div>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: colors.textMuted }}>
                <div>{dict.info.phone}</div>
                <div>{dict.info.email}</div>
                <a
                  href="https://wa.me/442079460912"
                  className="flex items-center gap-1.5 font-bold no-underline"
                  style={{ color: 'oklch(52% 0.14 150)' }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: colors.green }} />
                  {dict.info.whatsapp}
                </a>
              </div>
            </div>
            */}

            {/* <div
              className="flex items-center justify-center overflow-hidden rounded-[18px]"
              style={{
                aspectRatio: '4 / 3',
                background:
                  'repeating-linear-gradient(45deg, oklch(90% 0.02 258), oklch(90% 0.02 258) 10px, oklch(94% 0.015 258) 10px, oklch(94% 0.015 258) 20px)',
              }}
            >
              <span
                className="rounded-md bg-white px-2.5 py-1.5 text-[11.5px]"
                style={{ fontFamily: 'ui-monospace, monospace', color: 'oklch(40% 0.03 258)' }}
              >
                {dict.info.mapLabel}
              </span>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
