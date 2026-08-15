'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogoMark } from './Logo';
import { navItems } from '@/lib/content/nav';
import { colors } from '@/lib/content/colors';
import { getPath, getRouteKeyFromSlug, type NavKey } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';

type NavDict = {
  home: string;
  studyUk: string;
  robotics: string;
  events: string;
  about: string;
  contact: string;
};

export function Header({
  locale,
  nav,
  cta,
}: {
  locale: Locale;
  nav: NavDict;
  cta: string;
}) {
  const pathname = usePathname() || `/${locale}`;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 1080);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Figure out which page we're currently on (by translated slug) so we can
  // highlight the right nav item and build the equivalent URL in the other language.
  const segments = pathname.split('/');
  const currentSlug = segments[2]?.replace(/\/$/, '') || '';
  const currentKey: NavKey = currentSlug ? getRouteKeyFromSlug(currentSlug, locale) ?? 'home' : 'home';
  const otherLocale: Locale = locale === 'en' ? 'tr' : 'en';
  const otherHref = getPath(currentKey, otherLocale);

  const navLabel: Record<string, string> = {
    home: nav.home,
    studyUk: nav.studyUk,
    robotics: nav.robotics,
    events: nav.events,
    about: nav.about,
    contact: nav.contact,
  };

  return (
    <header
      className="sticky top-0 z-[100] border-b font-nunito"
      style={{
        background: 'oklch(99% 0.003 90 / 0.92)',
        backdropFilter: 'blur(10px)',
        borderColor: 'oklch(91% 0.01 258)',
      }}
    >
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-5 px-7 py-3.5">
        <Link href={`/${locale}`} className="flex flex-none items-center gap-2.5 no-underline">
          <LogoMark />
          <span
            className="font-poppins text-[22px] font-extrabold tracking-tight"
            style={{ color: colors.blueDark }}
          >
            Robonino
          </span>
        </Link>

        {!isMobile && (
          <nav className="flex flex-1 items-center justify-center gap-[28px]">
            {navItems.map((item) => {
              const active = currentKey === item.key;
              return (
                <Link
                  key={item.key}
                  href={getPath(item.key, locale)}
                  className="rn-navlink whitespace-nowrap no-underline"
                  style={{
                    color: active ? colors.blue : 'oklch(40% 0.02 258)',
                    fontWeight: active ? 700 : 600,
                    fontSize: 15,
                  }}
                >
                  {navLabel[item.key]}
                </Link>
              );
            })}
          </nav>
        )}

        <div className="flex flex-none items-center gap-3.5">
          <div
            className="flex items-center gap-0.5 rounded-full p-[3px]"
            style={{ background: 'oklch(95% 0.008 258)' }}
          >
            <Link
              href={locale === 'en' ? pathname : otherHref}
              className="rounded-full px-3.5 py-1.5 font-poppins text-xs font-bold no-underline"
              style={{
                background: locale === 'en' ? colors.blue : 'transparent',
                color: locale === 'en' ? '#fff' : 'oklch(40% 0.02 258)',
              }}
            >
              EN
            </Link>
            <Link
              href={locale === 'tr' ? pathname : otherHref}
              className="rounded-full px-3.5 py-1.5 font-poppins text-xs font-bold no-underline"
              style={{
                background: locale === 'tr' ? colors.blue : 'transparent',
                color: locale === 'tr' ? '#fff' : 'oklch(40% 0.02 258)',
              }}
            >
              TR
            </Link>
          </div>

          {!isMobile && (
            <Link
              href={getPath('contact', locale)}
              className="whitespace-nowrap rounded-full px-5 py-2.5 font-poppins text-sm font-semibold text-white no-underline rn-btn-primary"
              style={{
                background: colors.orange,
                boxShadow: `0 6px 16px ${colors.orange.replace(')', ' / 0.35)')}`,
              }}
            >
              {cta}
            </Link>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              className="flex flex-none flex-col items-end border-none bg-transparent p-1.5"
            >
              <span className="my-1 h-0.5 w-5 rounded-sm" style={{ background: colors.blueDark }} />
              <span className="my-1 h-0.5 w-5 rounded-sm" style={{ background: colors.blueDark }} />
              <span className="my-1 h-0.5 w-3.5 rounded-sm" style={{ background: colors.blueDark }} />
            </button>
          )}
        </div>
      </div>

      {isMobile && menuOpen && (
        <div
          className="flex animate-rn-slidedown flex-col gap-1 border-t bg-white px-5 pb-5 pt-2.5"
          style={{ borderColor: 'oklch(91% 0.01 258)' }}
        >
          {navItems.map((item) => {
            const active = currentKey === item.key;
            return (
              <Link
                key={item.key}
                href={getPath(item.key, locale)}
                onClick={() => setMenuOpen(false)}
                className="rn-navlink border-b py-2.5 no-underline"
                style={{
                  color: active ? colors.blue : 'oklch(40% 0.02 258)',
                  fontWeight: active ? 700 : 600,
                  fontSize: 16,
                  borderColor: 'oklch(94% 0.006 258)',
                }}
              >
                {navLabel[item.key]}
              </Link>
            );
          })}
          <Link
            href={getPath('contact', locale)}
            onClick={() => setMenuOpen(false)}
            className="mt-2.5 rounded-full px-5 py-3 text-center font-poppins text-sm font-semibold text-white no-underline"
            style={{ background: colors.orange }}
          >
            {cta}
          </Link>
        </div>
      )}
    </header>
  );
}
