export const BOOKSY_URL = "https://booksy.com/pl-pl/";

export const nav = [
  { href: "#start", label: "Start" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#metamorfozy", label: "Metamorfozy" },
  { href: "#zespol", label: "Zespół" },
  { href: "#cennik", label: "Cennik" },
  { href: "#lokalizacja", label: "Lokalizacja" },
] as const;

export const heroSlides = [
  {
    image: "/demos/nova-studio/images/hero-1.jpg",
    alt: "Kobieta z krótkimi blond włosami",
  },
  {
    image: "/demos/nova-studio/images/hero-2.jpg",
    alt: "Portret z naturalnym kolorem włosów",
  },
  {
    image: "/demos/nova-studio/images/hero-3.jpg",
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
    before: "/demos/nova-studio/images/makeover-1-before.jpg",
    after: "/demos/nova-studio/images/makeover-1-after-v2.jpg",
    beforeAlt: "Ta sama kobieta przed koloryzacją — płaskie, mniej dopracowane włosy",
    afterAlt: "Ta sama kobieta po koloryzacji — jasny wymiarowy blond i stylizacja",
  },
  {
    before: "/demos/nova-studio/images/makeover-2-before.jpg",
    after: "/demos/nova-studio/images/makeover-2-after-v2.jpg",
    beforeAlt: "Ta sama kobieta przed zabiegiem — proste, nieutrzymane włosy",
    afterAlt: "Ta sama kobieta po zabiegu — głębszy brąz i falowana stylizacja",
  },
] as const;

export const approachSteps = [
  {
    n: "01",
    title: "Rozmowa",
    text: "Poznajemy Twoje potrzeby, styl i codzienność.",
  },
  {
    n: "02",
    title: "Kierunek",
    text: "Dobieramy cięcie, kolor i pielęgnację do Ciebie.",
  },
  {
    n: "03",
    title: "Efekt",
    text: "Tworzymy włosy, które wyglądają dobrze także po wyjściu z salonu.",
  },
] as const;

export const pricing = [
  {
    group: "Strzyżenie",
    items: [
      {
        name: "Strzyżenie damskie",
        meta: "45–60 min",
        price: "160 zł",
        popular: true,
      },
      {
        name: "Strzyżenie + modelowanie",
        meta: "70–90 min",
        price: "210 zł",
      },
      {
        name: "Strzyżenie grzywki",
        meta: "15 min",
        price: "50 zł",
      },
      {
        name: "Konsultacja fryzjerska",
        meta: "20 min",
        price: "0 zł",
      },
    ],
  },
  {
    group: "Koloryzacja",
    items: [
      {
        name: "Koloryzacja jednolita",
        meta: "od 90 min",
        price: "od 320 zł",
        popular: true,
      },
      {
        name: "Balayage / refleksy",
        meta: "3–4 h",
        price: "od 480 zł",
        popular: true,
      },
      {
        name: "Tonowanie",
        meta: "45–60 min",
        price: "od 180 zł",
      },
      {
        name: "Retusz odrostu",
        meta: "60–75 min",
        price: "od 220 zł",
      },
    ],
  },
  {
    group: "Pielęgnacja",
    items: [
      {
        name: "Regeneracja premium",
        meta: "45–60 min",
        price: "220 zł",
        popular: true,
      },
      {
        name: "Rytuał odbudowy",
        meta: "60 min",
        price: "280 zł",
      },
      {
        name: "Botoks / bonding",
        meta: "90 min",
        price: "od 350 zł",
      },
    ],
  },
  {
    group: "Stylizacja",
    items: [
      {
        name: "Modelowanie",
        meta: "40–50 min",
        price: "120 zł",
      },
      {
        name: "Stylizacja okazjonalna",
        meta: "60–90 min",
        price: "od 180 zł",
        popular: true,
      },
      {
        name: "Upięcie",
        meta: "60–90 min",
        price: "od 200 zł",
      },
    ],
  },
] as const;

export type TestimonialTile = {
  quote: string;
  author: string;
  detail: string;
  tone: "cream" | "deep" | "ink" | "accent";
  size: "sm" | "md" | "lg";
  showStars?: boolean;
  rating?: string;
};

export const testimonialWall: TestimonialTile[] = [
  {
    quote: "Pierwszy raz wyszłam z salonu dokładnie z tym, co miałam w głowie.",
    author: "Karolina",
    detail: "koloryzacja",
    tone: "ink",
    size: "lg",
    showStars: true,
    rating: "5.0",
  },
  {
    quote: "Kolor wygląda naturalnie i po kilku tygodniach nadal układa się świetnie.",
    author: "Natalia",
    detail: "blond / refleksy",
    tone: "cream",
    size: "md",
  },
  {
    quote: "Nie dostałam po prostu fryzury. Ktoś naprawdę mnie wysłuchał.",
    author: "Julia",
    detail: "cięcie",
    tone: "deep",
    size: "md",
    showStars: true,
    rating: "5.0",
  },
  {
    quote: "Atmosfera, światło, zespół — wszystko czuć w detalu.",
    author: "Ola",
    detail: "pielęgnacja",
    tone: "cream",
    size: "sm",
  },
  {
    quote: "Balayage, o którym marzyłam od miesięcy. Delikatny i luksusowy.",
    author: "Ania",
    detail: "balayage",
    tone: "accent",
    size: "md",
    showStars: true,
    rating: "5.0",
  },
  {
    quote: "Szybko, precyzyjnie, bez zbędnego chaosu. Wracam.",
    author: "Marta",
    detail: "strzyżenie",
    tone: "cream",
    size: "sm",
  },
  {
    quote: "Włosy po wyjściu wyglądają jak po sesji — i tak zostają na dni.",
    author: "Zosia",
    detail: "stylizacja",
    tone: "deep",
    size: "md",
  },
  {
    quote: "Tonowanie uratowało mój blond. Miękki, czysty, bez żółtego.",
    author: "Kasia",
    detail: "tonowanie",
    tone: "cream",
    size: "sm",
    showStars: true,
    rating: "5.0",
  },
  {
    quote: "Czułam się zaopiekowana od pierwszej rozmowy do efektu końcowego.",
    author: "Magda",
    detail: "koloryzacja",
    tone: "ink",
    size: "md",
  },
  {
    quote: "Najlepsze cięcie, jakie miałam w Warszawie.",
    author: "Ewa",
    detail: "cięcie",
    tone: "cream",
    size: "sm",
  },
  {
    quote: "Regeneracja zrobiła więcej niż pół roku domowych masek.",
    author: "Asia",
    detail: "pielęgnacja",
    tone: "deep",
    size: "sm",
    showStars: true,
    rating: "5.0",
  },
  {
    quote: "Tu nie goni się trendów. Tu buduje się charakter włosów.",
    author: "Iga",
    detail: "konsultacja",
    tone: "accent",
    size: "md",
  },
] as const;

export const testimonials = testimonialWall.slice(0, 3).map((t) => ({
  quote: t.quote,
  author: t.author,
  detail: t.detail,
}));

export const team = [
  {
    name: "Maja",
    role: "Kolorystka",
    image: "/demos/nova-studio/images/maja-v2.jpg",
  },
  {
    name: "Ola",
    role: "Cięcie",
    image: "/demos/nova-studio/images/ola-v2.jpg",
  },
  {
    name: "Julia",
    role: "Stylistka",
    image: "/demos/nova-studio/images/julia-v2.jpg",
  },
  {
    name: "Natalia",
    role: "Koloryzacja",
    image: "/demos/nova-studio/images/natalia-v2.jpg",
  },
  {
    name: "Zosia",
    role: "Cięcie / stylizacja",
    image: "/demos/nova-studio/images/zosia-v2.jpg",
  },
] as const;

export const contact = {
  address: "ul. Wilcza 24",
  city: "00-544 Warszawa",
  district: "Śródmieście",
  phone: "+48 22 100 20 30",
  phoneHref: "tel:+48221002030",
  email: "hello@novastudio.pl",
  hours: ["PN–PT 10:00–20:00", "SB 10:00–18:00", "ND zamknięte"],
  mapEmbed:
    "https://www.openstreetmap.org/export/embed.html?bbox=21.0105%2C52.2235%2C21.0265%2C52.2295&layer=mapnik&marker=52.2265%2C21.0185",
  mapDirections:
    "https://www.google.com/maps/dir/?api=1&destination=ul.+Wilcza+24,+00-544+Warszawa",
  notes: [
    { label: "Dzielnica", value: "Śródmieście" },
    { label: "Dojazd", value: "Metro Politechnika · autobusy Wilcza" },
    { label: "Parking", value: "Strefa płatna w okolicy" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
    { label: "Booksy", href: BOOKSY_URL },
  ],
} as const;
