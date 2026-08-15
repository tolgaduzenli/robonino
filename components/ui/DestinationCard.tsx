import Image from 'next/image';

export function DestinationCard({
  image,
  name,
  tag,
}: {
  image: string;
  name: string;
  tag?: string;
}) {
  return (
    <div className="rn-card relative overflow-hidden rounded-[18px]" style={{ aspectRatio: '4 / 5' }}>
      <Image src={image} alt={name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(0deg, oklch(20% 0.06 258 / 0.75), transparent 55%)' }}
      />
      <div className="absolute bottom-[18px] left-[18px] text-white">
        <div className="font-poppins text-[19px] font-extrabold">{name}</div>
        {tag && <div className="text-[12.5px] opacity-85">{tag}</div>}
      </div>
    </div>
  );
}

export function GalleryImage({ image, label }: { image: string; label: string }) {
  return (
    <div className="rn-card relative overflow-hidden rounded-[18px]" style={{ aspectRatio: '4 / 3' }}>
      <Image src={image} alt={label} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
    </div>
  );
}
