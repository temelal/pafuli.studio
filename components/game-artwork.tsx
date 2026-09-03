import { assetPath } from "@/lib/site-config";

export function GameArtwork({
  image,
  alt,
  eager = false,
  className = "",
  label,
}: {
  image: string;
  alt: string;
  eager?: boolean;
  className?: string;
  label?: string;
}) {
  return (
    <figure className={`game-artwork ${className}`.trim()}>
      <picture>
        <source srcSet={assetPath(`/images/${image}.avif`)} type="image/avif" />
        <source srcSet={assetPath(`/images/${image}.webp`)} type="image/webp" />
        <img
          src={assetPath(`/images/${image}.png`)}
          alt={alt}
          width="1672"
          height="941"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : "auto"}
          decoding="async"
        />
      </picture>
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  );
}
