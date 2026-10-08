export const SITE = {
  name: 'SOLÉA',
  fullName: 'SOLÉA Hair Studio',
  tagline: 'Naturalne piękno. Na co dzień.',
  address: 'ul. Mokotowska 48',
  postal: '00-543 Warszawa',
  phone: '+48 22 123 45 67',
  phoneHref: 'tel:+48221234567',
  email: 'studio@soleahair.pl',
  instagram: 'https://instagram.com/soleahairstudio',
  instagramHandle: '@soleahairstudio',
  hours: [
    { days: 'Wt — Pt', time: '9:00 — 20:00' },
    { days: 'Sobota', time: '9:00 — 16:00' },
    { days: 'Nd — Pon', time: 'nieczynne' },
  ],
} as const

export const NAV = [
  { id: 'start', label: 'Start', href: '#start' },
  { id: 'uslugi', label: 'Usługi', href: '#uslugi' },
  { id: 'zespol', label: 'Zespół', href: '#zespol' },
  { id: 'salon', label: 'Salon', href: '#salon' },
  { id: 'kontakt', label: 'Kontakt', href: '#kontakt' },
] as const
