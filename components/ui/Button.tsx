import Link from 'next/link';
import { colors } from '@/lib/content/colors';

export function FilledButton({ href, color, children }: { href: string; color: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rn-btn-primary rounded-xl px-[26px] py-[15px] font-poppins text-[15px] font-semibold text-white no-underline"
      style={{ background: color, boxShadow: `0 10px 24px ${color.replace(')', ' / 0.28)')}` }}
    >
      {children}
    </Link>
  );
}

export function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-xl border-[1.5px] bg-white px-[26px] py-[15px] font-poppins text-[15px] font-semibold no-underline"
      style={{ color: colors.blue, borderColor: 'oklch(87% 0.01 258)' }}
    >
      {children}
    </Link>
  );
}
