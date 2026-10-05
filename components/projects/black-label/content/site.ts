export const site = {
  name: "BLACK LABEL",
  established: "EST. 2018",
  location: "Warszawa",
  tagline: "Precyzja. Rytuał. Charakter.",
  heroLead:
    "Luksusowy barber shop dla mężczyzn. Klasyczne cięcie, precyzyjna broda i spokojna atmosfera — bez pośpiechu, bez przypadkowych gestów.",
  bookLabel: "Umów wizytę",
  /**
   * Link Booksy do salonu.
   * Podmień na właściwy URL, np.:
   * https://booksy.com/pl-pl/XXXXX_black-label_...
   */
  booksyUrl: "https://booksy.com/pl-pl/",
  homeHref: "/projekty/black-label",
  ofertaHref: "/projekty/black-label/oferta",
  galeriaHref: "/projekty/black-label/galeria",
  kontaktHref: "/projekty/black-label/kontakt",
  instagram: {
    handle: "@blacklabel.warsaw",
    href: "https://instagram.com/",
  },
  contact: {
    address: "ul. Mokotowska 48",
    city: "00-543 Warszawa",
    phone: "+48 500 000 000",
    phoneHref: "tel:+48500000000",
    hours: [
      { days: "Pon – Pt", time: "10:00 – 20:00" },
      { days: "Sobota", time: "10:00 – 16:00" },
      { days: "Niedziela", time: "Zamknięte" },
    ],
  },
  about: {
    heading: "O nas",
    eyebrow: "Historia marki",
    accent: "Od początku z charakterem",
    paragraphs: [
      "BLACK LABEL powstał w 2018 roku w Warszawie. Nie jako kolejny punkt na mapie, tylko jako odpowiedź na pośpiech: zbyt wiele miejsc traktowało strzyżenie jak kolejkę do odhaczenia. Chcieliśmy salonu, w którym czas zwalnia, a każdy gest ma powód — od progu aż po ostatnią linię przy skórze.",
      "Idea była prosta i wymagająca. Miejsce stworzone dla mężczyzn, którzy cenią precyzję, atmosferę i jakość. Którzy nie przychodzą „na szybko”, tylko po rytuał. Spokój fotela, ciepło światła, metal, skóra, cisza między nożyczkami. Doświadczenie dopracowane, nie przypadkowe.",
      "Tym, czym wyróżnia się BLACK LABEL, nie jest efekt marketingu. To konsekwencja. Klasyczne barberstwo — fade, classic cut, textured crop, slick back, broda — połączone z nowoczesnym standardem obsługi: ustalonym tempem, uważnym słuchaniem i wykończeniem, które nie zostawia miejsca na pośpiech.",
      "Od pierwszego dnia trzymamy się tej samej zasady. Nie przyspieszamy kosztem detalu. Nie schodzimy z linii. Salon ma być trudny do pomylenia z czymkolwiek przypadkowym — przestrzenią o określonym charakterze, w której liczy się rytuał, spokój i praca wykonana do końca.",
    ],
  },
  footerNote: "Standard, nie przypadek.",
} as const;
