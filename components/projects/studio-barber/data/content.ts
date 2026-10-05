export const brand = {
  name: "STUDIO BARBER",
  tagline: "GOOD MEN LOOK BETTER",
  lang: "PL",
};

export const nav = [
  { label: "STRONA GŁÓWNA", href: "#" },
  { label: "USŁUGI", href: "#uslugi" },
  { label: "ZESPÓŁ", href: "#zespol" },
  { label: "NASZ SALON", href: "#salon" },
  { label: "KONTAKT", href: "#kontakt" },
] as const;

export const cta = {
  label: "REZERWUJ WIZYTĘ",
  heroLabel: "Zarezerwuj wizytę",
  secondary: "Poznaj salon",
};

export const hero = {
  eyebrow: "BARBERSHOP W CENTRUM WARSZAWY",
  headline: ["Dobry styl.", "Bez kombinowania."],
  support:
    "Precyzyjne cięcie, spokojna atmosfera i wygodna rezerwacja. Studio dla mężczyzn, którzy lubią, gdy wszystko po prostu działa.",
  points: ["Precyzyjne cięcia", "W centrum Warszawy", "Rezerwacja online"],
};

export const valueStrip = [
  {
    n: "01",
    title: "Spokojna atmosfera",
    body: "Bez pośpiechu i bez zadęcia. Wchodzisz, siadasz, wychodzisz w dobrym nastroju.",
  },
  {
    n: "02",
    title: "Barberzy, którzy słuchają",
    body: "Dobieramy cięcie do Ciebie, nie odwrotnie. Jasno, konkretnie, na temat.",
  },
  {
    n: "03",
    title: "Wygodna lokalizacja",
    body: "Centrum Warszawy. Łatwy dojazd, zero kombinowania z dojazdem.",
  },
  {
    n: "04",
    title: "Rezerwacja bez problemów",
    body: "Kilka kliknięć w Booksy i termin masz z głowy.",
  },
] as const;

export const team = {
  label: "ZESPÓŁ",
  lead: "Wybierz swojego barbera.",
  aside: "Różne style. Jeden standard.",
  people: [
    {
      key: "teamKuba",
      bookingId: "kuba",
      name: "Kuba",
      focus: "Fade / nowoczesne cięcia / naturalny look",
      alt: "Kuba przy stanowisku w jasnym salonie Studio Barber.",
    },
    {
      key: "teamMichal",
      bookingId: "michal",
      name: "Michał",
      focus: "Klasyka / broda / precyzja",
      alt: "Michał w salonie Studio Barber, światło dzienne, czarny strój.",
    },
    {
      key: "teamOskar",
      bookingId: "oskar",
      name: "Oskar",
      focus: "Texture / stylizacja / swobodny charakter",
      alt: "Oskar przy lustrze w jasnym wnętrzu Studio Barber.",
    },
  ],
  book: "Umów wizytę",
} as const;

export const services = {
  label: "USŁUGI",
  lead: ["Wiesz,", "za co płacisz."],
  more: "Zobacz pełną ofertę",
  items: [
    { name: "Strzyżenie", duration: "45 min", price: "110 zł" },
    { name: "Strzyżenie + broda", duration: "75 min", price: "160 zł" },
    { name: "Broda", duration: "30 min", price: "70 zł" },
    { name: "Buzz cut", duration: "30 min", price: "80 zł" },
  ],
} as const;

export const salon = {
  label: "NASZ SALON",
  copy: [
    "Jasno, wygodnie i bez zadęcia.",
    "Miejsce zrobione pod dobrą wizytę.",
  ],
} as const;

export const booking = {
  heading: "Dobra wizyta zaczyna się od prostego wyboru.",
  copy: "Wybierz barbera, zarezerwuj termin i wpadnij. Resztą zajmiemy się na miejscu.",
  meta: [
    { label: "Adres", value: "ul. Example 12, Warszawa" },
    { label: "Godziny", value: "Pn–Pt 10–20 · Sb 10–18" },
    { label: "Telefon", value: "+48 123 456 789" },
  ],
} as const;

export const footer = {
  brand: {
    name: "STUDIO BARBER",
    tagline: "GOOD MEN LOOK BETTER",
  },
  columns: [
    {
      title: "ADRES",
      lines: ["ul. Example 12", "Warszawa"],
    },
    {
      title: "KONTAKT",
      lines: ["+48 123 456 789", "hello@studiobarber.pl"],
    },
    {
      title: "GODZINY",
      lines: ["PN–PT 10:00–20:00", "SB 10:00–18:00", "ND zamknięte"],
    },
  ],
  links: [
    { label: "Instagram", social: "instagram" as const },
    { label: "Booksy", booksy: true },
  ],
} as const;
