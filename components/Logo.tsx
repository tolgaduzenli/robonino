import { colors } from '@/lib/content/colors';

export function LogoMark({ size = 38 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.29,
        background: `linear-gradient(135deg, ${colors.blue}, ${colors.teal})`,
        position: 'relative',
        flex: 'none',
        boxShadow: `0 4px 10px ${colors.blue.replace(')', ' / 0.35)')}`,
      }}
      aria-hidden
    >
      <span
        style={{
          position: 'absolute',
          top: size * 0.29,
          left: size * 0.21,
          width: size * 0.16,
          height: size * 0.16,
          borderRadius: '50%',
          background: '#fff',
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: size * 0.29,
          right: size * 0.21,
          width: size * 0.16,
          height: size * 0.16,
          borderRadius: '50%',
          background: '#fff',
        }}
      />
      <span
        style={{
          position: 'absolute',
          bottom: size * 0.21,
          left: size * 0.29,
          right: size * 0.29,
          height: size * 0.08,
          borderRadius: 2,
          background: colors.orange,
        }}
      />
      <span
        style={{
          position: 'absolute',
          top: size * 0.05,
          left: size * 0.45,
          width: size * 0.11,
          height: size * 0.11,
          borderRadius: '50%',
          background: colors.orange,
        }}
      />
    </div>
  );
}
