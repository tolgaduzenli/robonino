import { colors } from '@/lib/content/colors';

export function TestimonialCard({
  quote,
  name,
  role,
  initials,
  avatarBg,
}: {
  quote: string;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
}) {
  return (
    <div
      className="rounded-[20px] bg-white p-[30px_26px]"
      style={{ boxShadow: '0 10px 28px oklch(30% 0.09 258 / 0.07)' }}
    >
      <div className="mb-[22px] text-[15px] leading-[1.65]" style={{ color: 'oklch(30% 0.02 258)' }}>
        &ldquo;{quote}&rdquo;
      </div>
      <div className="flex items-center gap-3">
        <div
          className="flex h-11 w-11 flex-none items-center justify-center rounded-full font-poppins text-[15px] font-bold text-white"
          style={{ background: avatarBg }}
        >
          {initials}
        </div>
        <div>
          <div className="font-poppins text-[14.5px] font-bold" style={{ color: colors.textDark }}>
            {name}
          </div>
          <div className="text-[12.5px]" style={{ color: colors.textFaint }}>
            {role}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SingleTestimonial({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <div
      className="mx-auto max-w-[820px] rounded-[22px] bg-white p-11 text-center"
      style={{ boxShadow: '0 12px 32px oklch(30% 0.09 258 / 0.08)' }}
    >
      <div className="mb-[22px] text-lg leading-[1.6]" style={{ color: 'oklch(28% 0.02 258)' }}>
        &ldquo;{quote}&rdquo;
      </div>
      <div className="font-poppins text-[15px] font-bold" style={{ color: colors.textDark }}>
        {name}
      </div>
      <div className="text-[13px]" style={{ color: colors.textFaint }}>
        {role}
      </div>
    </div>
  );
}
