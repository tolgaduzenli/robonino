/** Decorative floating blob/shape backgrounds used across hero + accent sections. Purely ambient, aria-hidden. */
export function HeroBlobs({ variant = 'home' }: { variant?: 'home' | 'tint' }) {
  if (variant === 'home') {
    return (
      <div aria-hidden>
        <div
          className="animate-rn-float1 absolute -top-[60px] -right-[60px] h-[280px] w-[280px] rounded-full"
          style={{ background: 'radial-gradient(circle at 30% 30%, oklch(75% 0.15 55 / 0.3), transparent 70%)' }}
        />
        <div
          className="animate-rn-float2 absolute -bottom-[100px] -left-[80px] h-[340px] w-[340px] rounded-full"
          style={{ background: 'radial-gradient(circle at 60% 40%, oklch(68% 0.12 195 / 0.32), transparent 70%)' }}
        />
        <div
          className="animate-rn-float3 absolute left-[8%] top-[30%] h-[60px] w-[60px] rounded-[18px]"
          style={{ background: 'oklch(50% 0.10 258 / 0.14)' }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[120px]"
          style={{ background: 'linear-gradient(0deg, oklch(99% 0.004 90) 0%, transparent 100%)' }}
        />
      </div>
    );
  }
  return (
    <div
      aria-hidden
      className="animate-rn-float1 absolute -top-[60px] -right-10 h-[260px] w-[260px] rounded-full"
      style={{ background: 'radial-gradient(circle, oklch(75% 0.15 55 / 0.22), transparent 70%)' }}
    />
  );
}

export function TintedBlobs({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="animate-rn-float1 absolute -top-[60px] -right-10 h-[260px] w-[260px] rounded-full"
      style={{ background: `radial-gradient(circle, ${color.replace(')', ' / 0.25)')}, transparent 70%)` }}
    />
  );
}

export function DotGridBackground() {
  return (
    <div
      aria-hidden
      className="absolute inset-0"
      style={{
        backgroundImage: 'radial-gradient(oklch(85% 0.02 258 / 0.5) 1.5px, transparent 1.5px)',
        backgroundSize: '28px 28px',
      }}
    />
  );
}
