import Image from 'next/image';
import Link from 'next/link';
import { CheckItem } from './Checkmark';
import { colors } from '@/lib/content/colors';

export function ServiceCard({
  href,
  image,
  imageAlt,
  badgeColor,
  badgeLabel,
  title,
  desc,
  features,
  cta,
  accentColor,
}: {
  href: string;
  image: string;
  imageAlt: string;
  badgeColor: string;
  badgeLabel: string;
  title: string;
  desc: string;
  features: string[];
  cta: string;
  accentColor: string;
}) {
  return (
    <div
      className="rn-card flex flex-col overflow-hidden rounded-[22px] bg-white"
      style={{ boxShadow: '0 10px 30px oklch(30% 0.09 258 / 0.08)' }}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: '16 / 10' }}>
        <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
        <div
          className="absolute left-4 top-4 rounded-full px-3 py-1.5 font-poppins text-xs font-bold text-white"
          style={{ background: badgeColor }}
        >
          {badgeLabel}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-[28px_26px_30px]">
        <h3 className="mb-2.5 font-poppins text-[21px] font-extrabold" style={{ color: colors.textDark }}>
          {title}
        </h3>
        <p className="mb-[18px] text-[14.5px] leading-relaxed" style={{ color: colors.textMuted }}>
          {desc}
        </p>
        <div className="mb-[22px] flex flex-col gap-2.5">
          {features.map((f) => (
            <CheckItem key={f} label={f} color={badgeColor} />
          ))}
        </div>
        <Link
          href={href}
          className="rn-cta-link mt-auto font-poppins text-[14.5px] font-bold no-underline"
          style={{ color: accentColor }}
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}
