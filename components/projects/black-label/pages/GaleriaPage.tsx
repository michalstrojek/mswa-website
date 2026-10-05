import { BookLink } from "../brand/BookLink";
import { GalleryGrid } from "../home/GalleryGrid";
import { galleryImages } from "../content/gallery";

export function GaleriaPage() {
  return (
    <main className="page-main">
      <div className="container-editorial page-intro">
        <p className="meta-label mb-5">Portfolio</p>
        <h1 className="page-title">Galeria</h1>
        <p className="section-copy mt-5 max-w-[46ch]">
          Fade, classic cut, textured crop, slick back, brody i linie cięcia.
          Praca z fotela — dużo realizacji, mało pustki.
        </p>
      </div>

      <div className="container-editorial">
        <GalleryGrid images={galleryImages} dense />

        <div className="mt-14 flex justify-end">
          <BookLink className="editorial-link" />
        </div>
      </div>
    </main>
  );
}
