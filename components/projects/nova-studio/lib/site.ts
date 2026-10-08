/** Empty = demo notice (no invented salon Booksy profile). */
export const BOOKSY_URL = "";

const img = (name: string) => `/projects/nova-studio/images/${name}`;

export const nav = [
  { href: "#start", label: "Start" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#metamorfozy", label: "Metamorfozy" },
  { href: "#zespol", label: "Zespół" },
  { href: "#salon", label: "Salon" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export const heroSlides = [
  {
    image: img("hero-1.jpg"),
    alt: "Kobieta z krótkimi blond włosami",
  },
  {
    image: img("hero-2.jpg"),
    alt: "Portret z naturalnym kolorem włosów",
  },
  {
    image: img("hero-3.jpg"),
    alt: "Stylizacja z charakterem",
  },
] as const;

export const services = [
  {
    n: "01",
    title: "Cięcie",
    text: "Nowoczesne cięcia dopasowane do Ciebie i Twojego stylu.",
  },
  {
    n: "02",
    title: "Koloryzacja",
    text: "Naturalne efekty, wyraziste kolory.",
  },
  {
    n: "03",
    title: "Pielęgnacja",
    text: "Zdrowsze i mocne włosy dzięki profesjonalnym rytuałom.",
  },
  {
    n: "04",
    title: "Stylizacja",
    text: "Na co dzień i na wyjątkowe okazje.",
  },
] as const;

export const makeovers = [
  {
    before: img("makeover-1-before.jpg"),
    after: img("makeover-1-after-v2.jpg"),
    beforeAlt: "Ta sama kobieta przed koloryzacją — płaskie, mniej dopracowane włosy",
    afterAlt: "Ta sama kobieta po koloryzacji — jasny wymiarowy blond i stylizacja",
  },
  {
    before: img("makeover-2-before.jpg"),
    after: img("makeover-2-after-v2.jpg"),
    beforeAlt: "Ta sama kobieta przed zabiegiem — proste, nieutrzymane włosy",
    afterAlt: "Ta sama kobieta po zabiegu — głębszy brąz i falowana stylizacja",
  },
] as const;

export const team = [
  {
    name: "Maja",
    role: "Kolorystka",
    image: img("maja-v2.jpg"),
  },
  {
    name: "Ola",
    role: "Cięcie",
    image: img("ola-v2.jpg"),
  },
  {
    name: "Julia",
    role: "Stylistka",
    image: img("julia-v2.jpg"),
  },
  {
    name: "Natalia",
    role: "Koloryzacja",
    image: img("natalia-v2.jpg"),
  },
  {
    name: "Zosia",
    role: "Cięcie / stylizacja",
    image: img("zosia-v2.jpg"),
  },
] as const;

export const contact = {
  address: "ul. Wilcza 24",
  city: "00-544 Warszawa",
  phone: "+48 22 100 20 30",
  phoneHref: "tel:+48221002030",
  email: "hello@novastudio.pl",
  hours: ["PN–PT 10:00–20:00", "SB 10:00–18:00", "ND zamknięte"],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
    { label: "Booksy", href: BOOKSY_URL },
  ],
} as const;
