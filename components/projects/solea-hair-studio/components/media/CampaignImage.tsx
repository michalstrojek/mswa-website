type CampaignImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  objectPosition?: string;
  hoverZoom?: boolean;
  /** Parallax omitted in MSWA — final resting crop only. */
  parallax?: number;
};

export function CampaignImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  priority = false,
  sizes,
  objectPosition = "center",
  hoverZoom = true,
}: CampaignImageProps) {
  const zoomClass = hoverZoom ? "campaign-photo-zoom" : "";

  return (
    <div className={`overflow-hidden ${className}`}>
      <div className="h-full w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          className={`campaign-photo h-full w-full object-cover ${zoomClass} ${imgClassName}`}
          style={{ objectPosition }}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding={priority ? "sync" : "async"}
        />
      </div>
    </div>
  );
}
