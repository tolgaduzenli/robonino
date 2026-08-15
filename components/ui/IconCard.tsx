import { IconTile } from './IconTile';
import { colors } from '@/lib/content/colors';

/** Card with icon tile on top, title, description — used for "why us", "audiences", "tracks", "formats", "values". */
export function IconCard({
  icon,
  iconBg,
  iconColor,
  cardBg = '#fff',
  title,
  desc,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  cardBg?: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="rn-card rounded-[18px] p-6"
      style={{ background: cardBg, boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.07)' }}
    >
      <div className="mb-4">
        <IconTile icon={icon} bg={iconBg} color={iconColor} />
      </div>
      <div className="mb-2 font-poppins text-[16.5px] font-bold" style={{ color: colors.textDark }}>
        {title}
      </div>
      <div className="text-sm leading-relaxed" style={{ color: colors.textMuted }}>
        {desc}
      </div>
    </div>
  );
}

/** Icon-left horizontal row card — used for "everything handled", "formats that fit", etc. */
export function FeatureRow({
  icon,
  iconBg,
  iconColor,
  cardBg = '#fff',
  title,
  desc,
}: {
  icon: string;
  iconBg: string;
  iconColor: string;
  cardBg?: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="flex gap-4 rounded-[18px] p-6"
      style={{ background: cardBg, boxShadow: '0 8px 24px oklch(30% 0.09 258 / 0.06)' }}
    >
      <div className="flex-none">
        <IconTile icon={icon} bg={iconBg} color={iconColor} size={42} iconSize={20} />
      </div>
      <div>
        <div className="mb-1.5 font-poppins text-[15.5px] font-bold" style={{ color: colors.textDark }}>
          {title}
        </div>
        <div className="text-[13.5px] leading-relaxed" style={{ color: colors.textMuted }}>
          {desc}
        </div>
      </div>
    </div>
  );
}
