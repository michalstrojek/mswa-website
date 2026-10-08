export const booksy = {
  /**
   * Real salon Booksy URLs — empty while this is a conceptual demo.
   * BookLink shows a demo notice instead of opening a fake URL.
   */
  general: '',
  barbers: {
    michal: '',
    adam: '',
    kuba: '',
  },
  useBarberDeepLinks: true,
} as const

export type BarberId = keyof typeof booksy.barbers

/** Resolve a Booksy URL from one place — set real profiles here when available. */
export function getBooksyUrl(barberId?: BarberId): string {
  if (!barberId || !booksy.useBarberDeepLinks) return booksy.general
  return booksy.barbers[barberId]
}

export const site = {
  name: 'CUTLINE',
  tagline: 'Barbershop',
  phone: '+48 500 000 000',
  phoneHref: 'tel:+48500000000',
  instagram: '@cutline.barbershop',
  instagramUrl: 'https://instagram.com/cutline.barbershop',
  city: 'Warszawa',
  street: 'ul. Marszałkowska 42',
  address: 'ul. Marszałkowska 42, Warszawa',
  hours: [
    { days: 'Pon–Pt', time: '10:00–20:00' },
    { days: 'Sobota', time: '10:00–16:00' },
    { days: 'Niedziela', time: 'Zamknięte' },
  ],
  booksy,
  hero: {
    image: '/projects/cutline/images/hero-interior.jpg',
    imageAlt:
      'Wnętrze klasycznego barbershopu — skórzane fotele, lustra, ciemne drewno i szachownica na podłodze',
    headline: 'Klasyczny barbershop.\nAmerykański charakter.',
    support:
      'Ciepłe drewno, chrom i rzemiosło — miejsce, w którym strzyżenie to tradycja, nie trend.',
  },
  identityStrip: [
    'Est. 2016',
    'Klasyczne rzemiosło',
    'Warszawa',
    'Dobry cut. Dobra atmosfera.',
  ],
  about: {
    eyebrow: 'Historia',
    headline: 'Tradycja spotyka nowoczesność.',
    paragraphs: [
      'CUTLINE to klasyczny barbershop o amerykańskim charakterze — precyzyjne strzyżenie, broda i golenie brzytwą w spokojnym rytmie salonu.',
      'Łączymy tradycyjne techniki z nowoczesną dokładnością. Tu wraca się po dobry cut i atmosferę, nie po kolejny trend.',
    ],
    image: '/projects/cutline/images/about-shop.jpg',
    imageAlt:
      'Wnętrze CUTLINE — barberzy przy pracy, skórzane fotele, ciepłe światło i klasyczny charakter salonu',
  },
  barbers: [
    {
      id: 'michal' as const,
      name: 'Michał',
      specialty: 'Classic Cuts / Skin Fade',
      bio: 'Klasyczne strzyżenia i czyste fade’y — precyzja bez zbędnego szumu.',
      image: '/projects/cutline/images/team-michal.jpg',
      imageAlt:
        'Michał przy pracy — klasyczne strzyżenie i skin fade w salonie CUTLINE',
      imagePosition: 'center 12%',
    },
    {
      id: 'adam' as const,
      name: 'Adam',
      specialty: 'Beard / Razor Shave',
      bio: 'Broda i golenie brzytwą — ciepły ręcznik, ostry kontur, spokojny rytuał.',
      image: '/projects/cutline/images/team-adam.jpg',
      imageAlt: 'Adam — klasyczny barber przy goleniu i pielęgnacji brody',
      imagePosition: 'center 8%',
    },
    {
      id: 'kuba' as const,
      name: 'Kuba',
      specialty: 'Modern Cuts / Styling',
      bio: 'Nowoczesne cięcia i styling — kształt, tekstura, charakter.',
      image: '/projects/cutline/images/team-kuba.jpg',
      imageAlt: 'Kuba przy stanowisku — nowoczesne cięcie i styling',
      imagePosition: '78% 12%',
    },
  ],
  atmosphere: {
    eyebrow: 'Salon',
    headline: 'Tu chodzi o coś więcej niż samo cięcie.',
    lead: 'Drewno, lustro, rozmowa i rytm nożyczek — codzienność CUTLINE.',
    blocks: [
      {
        id: 'klimat',
        label: 'Klimat salonu',
        headline: 'Miejsce, w którym dobrze się siedzi.',
        paragraphs: [
          'Ciepłe światło, skórzane fotele i spokojny hałas warsztatu.',
          'Miejsce, w którym można na chwilę zwolnić i po prostu dobrze usiąść w fotelu.',
        ],
        main: {
          src: '/projects/cutline/images/hero-interior.jpg',
          alt: 'Wnętrze salonu — fotele, lustra i szachownica',
        },
        supporting: [
          {
            src: '/projects/cutline/images/gallery-chair.jpg',
            alt: 'Skórzany fotel barberski i chrom',
          },
          {
            src: '/projects/cutline/images/about-shop.jpg',
            alt: 'Życie salonu — barberzy przy pracy',
          },
        ],
      },
      {
        id: 'rzemioslo',
        label: 'Praca rąk',
        headline: 'Rzemiosło w detalu.',
        paragraphs: [
          'Precyzja, która się nie spieszy — cut, broda, rytuał.',
          'Każdy detal ma znaczenie, a dobre cięcie zaczyna się od uważności.',
        ],
        main: {
          src: '/projects/cutline/images/about-tools.jpg',
          alt: 'Narzędzia barbera na drewnianym blacie',
        },
        supporting: [
          {
            src: '/projects/cutline/images/gallery-01.jpg',
            alt: 'Nożyczki na tle ciemnego drewna',
          },
          {
            src: '/projects/cutline/images/gallery-work.jpg',
            alt: 'Barber przy precyzyjnym strzyżeniu',
          },
        ],
      },
    ],
  },
  servicesPreview: [
    { name: 'Strzyżenie', duration: '45 MIN', price: '100 PLN' },
    { name: 'Broda', duration: '30 MIN', price: '70 PLN' },
    { name: 'Combo', duration: '75 MIN', price: '150 PLN' },
    { name: 'Golenie brzytwą', duration: '40 MIN', price: '90 PLN' },
  ],
  instagramFeed: [
    '/projects/cutline/images/gallery-work.jpg',
    '/projects/cutline/images/team-michal.jpg',
    '/projects/cutline/images/gallery-01.jpg',
    '/projects/cutline/images/about-shop.jpg',
    '/projects/cutline/images/gallery-tools.jpg',
    '/projects/cutline/images/gallery-chair.jpg',
  ],
} as const
