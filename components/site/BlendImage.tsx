import Image from "next/image";
import { Parallax } from "@/components/site/Parallax";

export type ImageFade =
  | "left"
  | "right"
  | "bottom"
  | "soft-bottom"
  | "left-bottom"
  | "right-bottom"
  | "edges";

type BlendImageProps = {
  src: string;
  alt: string;
  fade?: ImageFade;
  grade?: "none" | "cinematic" | "veil";
  parallax?: boolean;
  amount?: number;
  className?: string;
  objectPosition?: string;
  sizes?: string;
  priority?: boolean;
  quality?: number;
};

export function BlendImage({
  src,
  alt,
  fade = "bottom",
  grade = "none",
  parallax = false,
  amount = 18,
  className = "",
  objectPosition = "center",
  sizes,
  priority = false,
  quality = 95,
}: BlendImageProps) {
  const media = (
    <div className="img-frame-media absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="img-grade object-cover"
        style={{ objectPosition }}
        sizes={sizes}
        quality={quality}
      />
    </div>
  );

  return (
    <div className={`img-frame ${className}`} data-fade={fade} data-grade={grade}>
      {parallax ? (
        <Parallax className="absolute inset-0 h-full" amount={amount}>
          {media}
        </Parallax>
      ) : (
        media
      )}
    </div>
  );
}
