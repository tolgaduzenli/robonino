import Link from 'next/link';
import { colors } from '@/lib/content/colors';
import { getPath } from '@/lib/i18n/routes';
import type { Locale } from '@/lib/i18n/config';

export function CTABand({
  locale,
  title,
  desc,
  primary,
  secondary,
  primaryVariant = 'white',
}: {
  locale: Locale;
  title: string;
  desc: string;
  primary: string;
  secondary?: string;
  primaryVariant?: 'white' | 'orange';
}) {
  const contactHref = getPath('contact', locale);
  return (
    <section
      className="relative overflow-hidden px-7 py-[88px]"
      style={{ background: `linear-gradient(135deg, ${colors.blueDeep}, ${colors.blueDeep2})` }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(oklch(100% 0 0 / 0.06) 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
        }}
      />
      <div
        className="animate-rn-float1 absolute -top-20 right-[10%] h-[260px] w-[260px] rounded-full"
        style={{ background: `radial-gradient(circle, ${colors.orange.replace(')', ' / 0.25)')}, transparent 70%)` }}
      />
      <div
        className="animate-rn-float3 absolute -bottom-[30px] left-[8%] h-20 w-20 rounded-full border-2"
        style={{ borderColor: 'oklch(100% 0 0 / 0.15)' }}
      />
      <div className="relative mx-auto max-w-[760px] text-center">
        <h2 className="m-0 mb-4 font-poppins text-[clamp(28px,3.6vw,40px)] font-extrabold tracking-tight text-white">
          {title}
        </h2>
        <p className="m-0 mb-[34px] text-[16.5px] leading-relaxed" style={{ color: 'oklch(85% 0.02 258)' }}>
          {desc}
        </p>
        <div className="flex flex-wrap justify-center gap-3.5">
          <Link
            href={contactHref}
            className="rn-btn-primary rounded-xl px-[30px] py-[15px] font-poppins text-[15px] font-bold no-underline"
            style={
              primaryVariant === 'orange'
                ? { background: colors.orange, color: '#fff', boxShadow: `0 10px 24px ${colors.orange.replace(')', ' / 0.35)')}` }
                : { background: '#fff', color: colors.blueDeep }
            }
          >
            {primary}
          </Link>
          {secondary && (
            <Link
              href={contactHref}
              className="rn-btn-primary rounded-xl px-[30px] py-[15px] font-poppins text-[15px] font-bold text-white no-underline"
              style={{ background: colors.orange, boxShadow: `0 10px 24px ${colors.orange.replace(')', ' / 0.35)')}` }}
            >
              {secondary}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
