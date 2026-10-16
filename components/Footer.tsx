import Image from 'next/image';
import Link from 'next/link';
import { colors } from '@/lib/content/colors';
import { socials } from '@/lib/content/nav';
import { photoCredits } from '@/lib/content/credits';
import { getPath } from '@/lib/i18n/routes';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary['footer'] }) {
  const year = new Date().getFullYear();

  return (
    <footer className="font-nunito" style={{ background: colors.footer, color: 'oklch(88% 0.01 258)' }}>
      <div
        className="px-7 py-11"
        style={{ background: `linear-gradient(120deg, ${colors.blue}, oklch(45% 0.12 195))` }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6">
          <div className="max-w-[420px]">
            <div className="mb-2 font-poppins text-[22px] font-extrabold text-white">
              {dict.newsletterTitle}
            </div>
            <p className="m-0 text-[14.5px]" style={{ color: 'oklch(88% 0.02 258)' }}>
              {dict.newsletterDesc}
            </p>
          </div>
          <div className="flex max-w-[440px] flex-1 flex-wrap gap-2.5" style={{ flexBasis: 320 }}>
            <input
              type="email"
              placeholder={dict.emailPlaceholder}
              className="min-w-[180px] flex-1 rounded-[10px] border-none px-4 py-3.5 font-nunito text-[15px]"
              style={{ color: 'oklch(22% 0.02 258)' }}
            />
            <button
              className="whitespace-nowrap rounded-[10px] border-none px-6 font-poppins text-[15px] font-bold text-white"
              style={{ background: colors.orange }}
            >
              {dict.subscribe}
            </button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1280px] px-7 pb-6 pt-14">
        <div className="flex flex-wrap justify-between gap-12">
          <div className="max-w-[340px] flex-[2_1_260px]" style={{ minWidth: 240 }}>
            <div className="mb-4">
              <Image
                src="/images/brand/robonino-logo-horizontal-white.svg"
                alt="Robonino"
                width={122}
                height={34}
              />
            </div>
            <p className="mb-5 text-[14.5px] leading-[1.7]" style={{ color: 'oklch(78% 0.015 258)' }}>
              {dict.brandBlurb}
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="rn-social flex h-9 w-9 items-center justify-center rounded-[10px] text-[13px] font-bold text-white no-underline transition-colors"
                  style={{ background: 'oklch(32% 0.05 258)' }}
                >
                  {s.initial}
                </a>
              ))}
            </div>
          </div>

          <div className="flex-1" style={{ minWidth: 150 }}>
            <div className="mb-4 font-poppins text-sm font-bold text-white">{dict.programsHeading}</div>
            <div className="flex flex-col gap-[11px]">
              <Link href={getPath('studyUk', locale)} className="rn-flink text-[14.5px] no-underline" style={{ color: 'oklch(78% 0.015 258)' }}>
                {dict.links.studyUk}
              </Link>
              <Link href={getPath('robotics', locale)} className="rn-flink text-[14.5px] no-underline" style={{ color: 'oklch(78% 0.015 258)' }}>
                {dict.links.robotics}
              </Link>
              <Link href={getPath('events', locale)} className="rn-flink text-[14.5px] no-underline" style={{ color: 'oklch(78% 0.015 258)' }}>
                {dict.links.events}
              </Link>
            </div>
          </div>

          <div className="flex-1" style={{ minWidth: 140 }}>
            <div className="mb-4 font-poppins text-sm font-bold text-white">{dict.companyHeading}</div>
            <div className="flex flex-col gap-[11px]">
              <Link href={getPath('about', locale)} className="rn-flink text-[14.5px] no-underline" style={{ color: 'oklch(78% 0.015 258)' }}>
                {dict.links.about}
              </Link>
              <Link href={getPath('contact', locale)} className="rn-flink text-[14.5px] no-underline" style={{ color: 'oklch(78% 0.015 258)' }}>
                {dict.links.contact}
              </Link>
              <Link href={`/${locale}`} className="rn-flink text-[14.5px] no-underline" style={{ color: 'oklch(78% 0.015 258)' }}>
                {dict.links.home}
              </Link>
            </div>
          </div>

          <div className="flex-1" style={{ minWidth: 220 }}>
            <div className="mb-4 font-poppins text-sm font-bold text-white">{dict.contactHeading}</div>
            <div className="flex flex-col gap-2.5 text-[14.5px]" style={{ color: 'oklch(78% 0.015 258)' }}>
              <div>{dict.address}</div>
              {/* <div>{dict.phone}</div> */}
              {/* <a
                href="https://wa.me/442079460912"
                className="rn-flink flex items-center gap-1.5 no-underline"
                style={{ color: 'oklch(78% 0.015 258)' }}
              >
                <span className="h-2 w-2 rounded-full" style={{ background: colors.green }} /> {dict.whatsapp}
              </a> */}
              {/* Email intentionally not displayed — use the contact form to avoid harvested-address spam. */}
            </div>
          </div>

          <div className="flex-1" style={{ minWidth: 150 }}>
            <div className="mb-4 font-poppins text-sm font-bold text-white">{dict.languageHeading}</div>
            <div
              className="flex w-fit items-center gap-0.5 rounded-full p-[3px]"
              style={{ background: 'oklch(30% 0.04 258)' }}
            >
              <Link
                href={`/en`}
                className="rounded-full px-3.5 py-1.5 font-poppins text-xs font-bold no-underline"
                style={{
                  background: locale === 'en' ? 'oklch(50% 0.10 258)' : 'transparent',
                  color: locale === 'en' ? '#fff' : 'oklch(78% 0.015 258)',
                }}
              >
                EN
              </Link>
              <Link
                href={`/tr`}
                className="rounded-full px-3.5 py-1.5 font-poppins text-xs font-bold no-underline"
                style={{
                  background: locale === 'tr' ? 'oklch(50% 0.10 258)' : 'transparent',
                  color: locale === 'tr' ? '#fff' : 'oklch(78% 0.015 258)',
                }}
              >
                TR
              </Link>
            </div>
          </div>
        </div>

        <div
          className="mt-12 flex flex-wrap justify-between gap-3 border-t pt-[22px] text-[13px]"
          style={{ borderColor: 'oklch(32% 0.04 258)', color: 'oklch(65% 0.015 258)' }}
        >
          <div>
            © {year} {dict.copyrightSuffix}
          </div>
          <div className="flex gap-5">
            <Link href={getPath('privacy', locale)} className="rn-flink no-underline" style={{ color: 'inherit' }}>
              {dict.privacy}
            </Link>
            <Link href={getPath('terms', locale)} className="rn-flink no-underline" style={{ color: 'inherit' }}>
              {dict.terms}
            </Link>
          </div>
        </div>

        <div
          className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[11px]"
          style={{ color: 'oklch(50% 0.015 258)' }}
        >
          <span>{dict.photoCredits}</span>
          {photoCredits.map((credit, i) => (
            <span key={credit.name} className="flex items-center gap-1.5">
              <a
                href={credit.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rn-flink no-underline"
                style={{ color: 'inherit' }}
              >
                {credit.name}
              </a>
              <span>/</span>
              <a
                href={credit.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rn-flink no-underline"
                style={{ color: 'inherit' }}
              >
                {credit.source}
              </a>
              {i < photoCredits.length - 1 && <span>·</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
