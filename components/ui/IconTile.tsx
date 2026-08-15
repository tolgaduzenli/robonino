export function IconTile({
  icon,
  bg,
  color,
  size = 46,
  iconSize = 22,
}: {
  icon: string;
  bg: string;
  color: string;
  size?: number;
  iconSize?: number;
}) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size, borderRadius: size * 0.28, background: bg }}
    >
      <span className="rn-icon" style={{ color, fontSize: iconSize }}>
        {icon}
      </span>
    </div>
  );
}
