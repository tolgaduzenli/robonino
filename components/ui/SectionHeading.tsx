import { colors } from "@/lib/content/colors";

export function SectionHeading({
  eyebrow,
  title,
  subTitle,
  desc,
  eyebrowColor = colors.orange,
  maxWidth = 640,
  id,
}: {
  eyebrow: string;
  title: string;
  subTitle?: string;
  desc?: string;
  eyebrowColor?: string;
  maxWidth?: number;
  id?: string;
}) {
  return (
    <div className="mx-auto mb-12 text-center" style={{ maxWidth }}>
      <div
        className="mb-3 font-poppins text-[13px] font-bold uppercase tracking-[0.08em]"
        style={{ color: eyebrowColor }}
      >
        {eyebrow}
      </div>
      <h2
        id={id}
        className="m-0 font-poppins text-[clamp(26px,3.2vw,38px)] font-extrabold tracking-tight"
        style={{ color: colors.textDark }}
      >
        {title}
      </h2>
      {subTitle && (
        <p
          className="m-0 mb-8 max-w-[760px] text-[clamp(16px,1.5vw,18px)] leading-relaxed"
          style={{ color: colors.textBody }}
        >
          {subTitle}
        </p>
      )}

      {desc && (
        <p
          className="mx-auto mt-3.5 mb-0 max-w-[600px] text-[16.5px] leading-relaxed"
          style={{ color: colors.textMuted }}
        >
          {desc}
        </p>
      )}
    </div>
  );
}
