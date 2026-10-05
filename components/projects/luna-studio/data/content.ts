import type { StylistId } from "../config/booking";
import type { images } from "./images";

export const brand = {
  name: "LUNA STUDIO",
  tagline: "HAIR / COLOR / CARE",
};

export const nav = [
  { label: "START", href: "#start" },
  { label: "USŁUGI", href: "#uslugi" },
  { label: "KOLORYZACJA", href: "#koloryzacja" },
  { label: "ZESPÓŁ", href: "#zespol" },
  { label: "SALON", href: "#salon" },
  { label: "KONTAKT", href: "#kontakt" },
] as const;

export const cta = {
  label: "UMÓW WIZYTĘ",
  heroLabel: "UMÓW WIZYTĘ",
  bookingLabel: "UMÓW TERMIN",
  secondary: "POZNAJ LUNA",
  salonLabel: "ZOBACZ NASZ SALON",
  booksyNote: "REZERWACJA ONLINE / BOOKSY",
};

export const hero = {
  label: "LUNA STUDIO",
  headline: ["Włosy,", "które pasują", "do Ciebie."],
  support: [
    "Naturalne cięcie, spokojna koloryzacja",
    "i pielęgnacja bez pośpiechu.",
  ],
  photoAlt:
    "Kampanijny portret z długimi, zdrowymi włosami w jasnym salonie.",
};

export const valueStrip = [
  {
    title: "INDYWIDUALNE PODEJŚCIE",
    body: "Dobieramy fryzurę do Ciebie.",
    icon: "leaf",
  },
  {
    title: "KOLOR Z KLASĄ",
    body: "Naturalne blondy, brunetki i refleksy.",
    icon: "spark",
  },
  {
    title: "SPOKÓJ W SALONIE",
    body: "Bez pośpiechu. Z pełną uwagą.",
    icon: "heart",
  },
] as const;

export const services = {
  label: "NASZE USŁUGI",
  headline: ["To, czego", "potrzebują", "Twoje włosy."],
  aside: "ZDROWE. PIĘKNE. TWOJE.",
  items: [
    {
      num: "01",
      name: "CIĘCIE",
      body: "Nowoczesne cięcia dopasowane do Ciebie i Twojego stylu życia.",
    },
    {
      num: "02",
      name: "KOLORYZACJA",
      body: "Naturalne efekty, piękne refleksy i kolory z klasą.",
      id: "koloryzacja",
    },
    {
      num: "03",
      name: "PIELĘGNACJA",
      body: "Profesjonalne rytuały dla zdrowych i mocnych włosów.",
    },
    {
      num: "04",
      name: "STYLIZACJA",
      body: "Subtelne stylizacje na co dzień i wyjątkowe okazje.",
    },
  ],
} as const;

export const beautyStrip = {
  lines: ["PIĘKNE WŁOSY", "TO WIĘCEJ NIŻ FRYZURA.", "TO DOBRE SAMOPOCZUCIE."],
  photoAlt: "Panoramiczne zbliżenie zdrowych, naturalnych włosów.",
};

export const team = {
  label: "NASZ ZESPÓŁ",
  headline: ["Ludzie,", "którzy kochają", "włosy."],
  aside: "PASJA. DOŚWIADCZENIE. TY.",
  book: "UMÓW WIZYTĘ",
  people: [
    {
      name: "MAJA",
      focus: "Koloryzacja",
      bookingId: "maja" as StylistId,
      imageKey: "teamMaja" as keyof typeof images,
      alt: "Maja, kolorystka LUNA STUDIO.",
    },
    {
      name: "OLA",
      focus: "Cięcie",
      bookingId: "ola" as StylistId,
      imageKey: "teamOla" as keyof typeof images,
      alt: "Ola, specjalistka cięcia w LUNA STUDIO.",
    },
    {
      name: "JULIA",
      focus: "Stylizacja",
      bookingId: "julia" as StylistId,
      imageKey: "teamJulia" as keyof typeof images,
      alt: "Julia, stylistka LUNA STUDIO.",
    },
  ],
};

export const salon = {
  label: "NASZ SALON",
  headline: ["Miejsce,", "w którym możesz", "zwolnić."],
  copy: "Cicha atmosfera, indywidualna konsultacja, naturalne światło i komfort, który naprawdę czuć. U nas masz czas dla siebie.",
  aside: "WIĘCEJ NIŻ SALON. TO TWOJA PRZESTRZEŃ.",
  photoAlt: "Jasne, przestronne wnętrze salonu LUNA STUDIO.",
};

export const booking = {
  label: "CZAS NA CIEBIE",
  headline: "Gotowa na zmianę?",
  copy: "Umów konsultację lub wizytę i stwórzmy fryzurę, w której poczujesz się naprawdę sobą.",
};

export const footer = {
  brand: {
    name: "LUNA STUDIO",
    tagline: "HAIR / COLOR / CARE",
  },
  columns: [
    {
      title: "ADRES",
      lines: ["ul. Wilcza 24", "00-544 Warszawa"],
    },
    {
      title: "KONTAKT",
      lines: ["+48 22 100 20 30", "hello@lunastudio.pl"],
    },
    {
      title: "GODZINY",
      lines: ["PN–PT 10:00–20:00", "SB 10:00–18:00", "ND zamknięte"],
    },
  ],
  links: [
    { label: "Instagram", kind: "instagram" as const },
    { label: "Booksy", kind: "booksy" as const },
  ],
};
