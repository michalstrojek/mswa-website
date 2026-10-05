const IMG = "/projects/black-label/images/home";

export type GalleryShape = "sq" | "tall" | "wide";

export type GalleryImage = {
  src: string;
  alt: string;
  shape: GalleryShape;
};

export const archiveImage = {
  src: `${IMG}/facade.jpg`,
  alt: "Wejście do salonu BLACK LABEL od ulicy — szyld, witryna i elewacja lokalu",
};

export const galleryImages: GalleryImage[] = [
  { src: `${IMG}/cut-01.jpg`, alt: "Fade — linia karku formowana maszynką", shape: "sq" },
  { src: `${IMG}/cut-02.jpg`, alt: "Textured crop w trakcie cięcia", shape: "tall" },
  { src: `${IMG}/cut-30.jpg`, alt: "Classic cut — profil po strzyżeniu", shape: "tall" },
  { src: `${IMG}/g-fade.jpg`, alt: "Textured crop z niskim fade", shape: "wide" },
  { src: `${IMG}/cut-29.jpg`, alt: "Slick back — wykończenie pomadą", shape: "tall" },
  { src: `${IMG}/cut-16.jpg`, alt: "Broda — profil i linia szyi", shape: "sq" },
  { src: `${IMG}/cut-19.jpg`, alt: "Detal linii cięcia przy skroni", shape: "sq" },
  { src: `${IMG}/craft-hair.jpg`, alt: "Fade — zbliżenie na kontur", shape: "tall" },
  { src: `${IMG}/cut-17.jpg`, alt: "Classic cut — faktura góry", shape: "sq" },
  { src: `${IMG}/cut-04.jpg`, alt: "Golenie brody pędzlem i pianą", shape: "wide" },
  { src: `${IMG}/cut-23.jpg`, alt: "Kontur brody przy uchu", shape: "sq" },
  { src: `${IMG}/cut-20.jpg`, alt: "Fade i grzebień — detal pracy", shape: "sq" },
  { src: `${IMG}/cut-39.jpg`, alt: "Textured crop — portret po strzyżeniu", shape: "tall" },
  { src: `${IMG}/cut-25.jpg`, alt: "Rzeźbienie brody w fotelu", shape: "wide" },
  { src: `${IMG}/cut-22.jpg`, alt: "Barber przy pracy nad fade", shape: "sq" },
  { src: `${IMG}/cut-09.jpg`, alt: "Klasyczne strzyżenie brody nożyczkami", shape: "tall" },
  { src: `${IMG}/ritual.jpg`, alt: "Rytuał brody w kierunkowym świetle", shape: "wide" },
  { src: `${IMG}/cut-26.jpg`, alt: "Broda — zbliżenie na formę", shape: "sq" },
  { src: `${IMG}/cut-31.jpg`, alt: "Barber przy fotelu — rytuał obsługi", shape: "tall" },
  { src: `${IMG}/cut-18.jpg`, alt: "Maszynki i suszarka — narzędzia stanowiska", shape: "tall" },
  { src: `${IMG}/cut-11.jpg`, alt: "Wnętrze salonu — fotele i ciepłe światło", shape: "wide" },
  { src: `${IMG}/cut-36.jpg`, alt: "Brzytwa, pędzel i nasadki", shape: "sq" },
  { src: `${IMG}/cut-33.jpg`, alt: "Profil klienta w trakcie strzyżenia brody", shape: "sq" },
  { src: `${IMG}/cut-32.jpg`, alt: "Barber prowadzący rytuał brody", shape: "tall" },
  { src: `${IMG}/cut-27.jpg`, alt: "Maszynki i pędzel na stanowisku", shape: "sq" },
  { src: `${IMG}/cut-24.jpg`, alt: "Nożyczki na drewnie — detal rzemiosła", shape: "sq" },
];

export const instagramPreviews = [
  galleryImages[0],
  galleryImages[1],
  galleryImages[4],
  galleryImages[2],
  galleryImages[7],
  galleryImages[5],
];

export const homeGallery = galleryImages.slice(0, 18);

export const heroImage = `${IMG}/ritual.jpg`;
