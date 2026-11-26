import Image from 'next/image';
import { IconTile } from './IconTile';
import { colors, tint } from '@/lib/content/colors';
import type { PartnerSchool } from '@/lib/content/partnerSchools';

/** Logo box is wider than tall so both near-square marks and wide wordmarks (OISC) fit. */
function SchoolMark({ school, size }: { school: PartnerSchool; size: number }) {
  if (school.logo) {
    return (
      <div className="relative shrink-0" style={{ width: size * 3.2, height: size }}>
        <Image src={school.logo} alt={school.name} fill sizes="200px" className="object-contain object-left" />
      </div>
    );
  }
  return <IconTile icon="school" bg={tint.blueIcon14} color={colors.blue} size={size} iconSize={size * 0.48} />;
}

/** Full card for the Study UK page: logo/icon, name, location, description, website button. */
export function PartnerSchoolCard({
  school,
  city,
  desc,
  websiteLabel,
}: {
  school: PartnerSchool;
  city: string;
  desc: string;
  websiteLabel: string;
}) {
  return (
    <div
      className="rn-card flex flex-col rounded-[18px] bg-white p-6"
      style={{ boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.07)' }}
    >
      <div className="mb-4">
        <SchoolMark school={school} size={56} />
      </div>
      <div className="mb-1 font-poppins text-[17px] font-bold" style={{ color: colors.textDark }}>
        {school.name}
      </div>
      <div className="mb-3 flex items-center gap-1 text-[13.5px] font-semibold" style={{ color: colors.tealDark }}>
        <span className="rn-icon" style={{ fontSize: 16 }}>
          location_on
        </span>
        {city}
      </div>
      <p className="m-0 mb-5 flex-1 text-sm leading-relaxed" style={{ color: colors.textMuted }}>
        {desc}
      </p>
      <a
        href={school.website}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 self-start rounded-[10px] border-[1.5px] px-4 py-2.5 font-poppins text-sm font-semibold no-underline transition-colors hover:bg-[oklch(97%_0.02_258)]"
        style={{ color: colors.blue, borderColor: 'oklch(87% 0.01 258)' }}
      >
        {websiteLabel}
        <span className="rn-icon" style={{ fontSize: 16 }}>
          open_in_new
        </span>
      </a>
    </div>
  );
}

/** Compact tile for the Home page strip: logo on top, then name and location; the whole tile links to the school's site. */
export function PartnerSchoolChip({ school, city, websiteLabel }: { school: PartnerSchool; city: string; websiteLabel: string }) {
  return (
    <a
      href={school.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${school.name}: ${websiteLabel}`}
      className="rn-card relative flex flex-col gap-3 rounded-[16px] bg-white px-5 py-5 no-underline"
      style={{ boxShadow: '0 6px 18px oklch(30% 0.09 258 / 0.06)' }}
    >
      <span className="rn-icon absolute right-4 top-4" style={{ fontSize: 18, color: colors.blue }}>
        open_in_new
      </span>
      <SchoolMark school={school} size={44} />
      <div>
        <div className="font-poppins text-[15px] font-bold leading-snug" style={{ color: colors.textDark }}>
          {school.name}
        </div>
        <div className="text-[13px]" style={{ color: colors.textMuted }}>
          {city}
        </div>
      </div>
    </a>
  );
}
