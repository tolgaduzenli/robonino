export function CheckItem({ label, color }: { label: string; color: string }) {
  return (
    <div className="flex items-center gap-2.5 text-[13.5px]" style={{ color: 'oklch(30% 0.02 258)' }}>
      <span
        className="flex h-[18px] w-[18px] flex-none items-center justify-center rounded-full"
        style={{ background: color }}
      >
        <span
          className="-mt-0.5 h-[5px] w-2 border-b-2 border-l-2 border-white"
          style={{ transform: 'rotate(-45deg)' }}
        />
      </span>
      {label}
    </div>
  );
}
