import type { GalleryImage } from "../content/gallery";

type GalleryGridProps = {
  images: GalleryImage[];
  dense?: boolean;
};

export function GalleryGrid({ images, dense = false }: GalleryGridProps) {
  return (
    <div className={`gallery-grid${dense ? " gallery-grid--dense" : ""}`}>
      {images.map((image, index) => (
        <figure
          key={`${image.alt}-${index}`}
          className={`gallery-grid__item gallery-grid__item--${image.shape} m-0`}
        >
          <div className="media-frame media-frame--hover h-full">
            <img
              src={image.src}
              alt={image.alt}
              className="media-frame__image"
              loading="lazy"
            />
          </div>
        </figure>
      ))}
    </div>
  );
}
