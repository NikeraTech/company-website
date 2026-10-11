import Image from 'next/image';

const LOGO_ASPECT_RATIO = 652 / 558;

export default function Logo({
  size = 48,
  alt = 'Nikera',
}: {
  size?: number;
  alt?: string;
  variant?: 'image' | 'wordmark';
}) {
  return (
    <span
      className="relative block shrink-0 drop-shadow-[0_0_18px_rgba(0,139,255,0.36)]"
      style={{
        width: Math.round(size * LOGO_ASPECT_RATIO),
        height: size,
      }}
    >
      <Image
        src="/images/logo_trans.png"
        alt={alt}
        fill
        sizes={`${Math.round(size * LOGO_ASPECT_RATIO)}px`}
        className="object-contain"
        priority={size >= 64}
      />
    </span>
  );
}
