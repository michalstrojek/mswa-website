/**
 * MSWA pricing — homepage offer + /cennik page content.
 */

export const websiteOffer = {
  label: "Strona internetowa",
  price: "1 490 zł",
  pricePrefix: "od",
  priceNote: "jednorazowo",
  headline: "Jedna strona. Cały proces po naszej stronie.",
  lead: "Podstawowa strona zawiera wszystko, czego potrzebuje większość lokalnych firm. Jeśli potrzebujesz dodatkowych funkcji lub większego zakresu, możesz dobrać je według jasnego cennika.",
  included: [
    "indywidualny projekt dopasowany do firmy",
    "pomysł, struktura i podstawowe treści po naszej stronie",
    "kompletna strona główna",
    "1 prosta dodatkowa podstrona",
    "do 10 głównych sekcji",
    "wersja na komputer, tablet i telefon",
    "formularz kontaktowy",
    "galeria, opinie, FAQ, mapa i inne sekcje dopasowane do firmy",
    "podstawowe SEO i przygotowanie techniczne",
    "podpięcie domeny i publikacja",
    "2 tury poprawek przed publikacją",
    "30 dni gwarancji technicznej",
  ],
  domainNote:
    "Domena pozostaje własnością klienta i jest kupowana bezpośrednio na jego dane. Pomagamy w jej wyborze, konfiguracji i podpięciu do strony.",
  extendedNote:
    "Masz bardziej rozbudowany projekt? Rozszerzenia mają jasno określone ceny.",
  ctaLabel: "Zapytaj o swoją stronę",
  ctaHref: "/#kontakt",
  pricingLinkLabel: "Zobacz pełny zakres i dodatki",
  pricingHref: "/cennik",
} as const;

export const careOffer = {
  label: "Opieka po publikacji",
  price: "299 zł",
  priceSuffix: "/ mies.",
  lead: "Chcesz, żebyśmy zajmowali się stroną również po publikacji? MSWA Care obejmuje hosting, bieżącą opiekę techniczną oraz 2 rundy drobnych zmian w każdym miesiącu.",
  optionalNote: "Opcjonalnie. Bez długoterminowego zobowiązania.",
} as const;

export const pricingPage = {
  hero: {
    eyebrow: "Cennik",
    title: "Wiesz, za co płacisz.",
    lead: "Bazowa strona zawiera wszystko, czego potrzebuje większość lokalnych firm. Jeśli Twój projekt wymaga czegoś więcej, poniżej znajdziesz jasne ceny rozszerzeń.",
  },
  website: {
    eyebrow: "Strona firmowa",
    price: "od 1 490 zł",
    priceNote: "jednorazowo",
    lead: "Nie musisz mieć gotowego projektu ani tekstów. Opowiedz nam o swojej firmie, pokaż materiały, które masz, a my zajmiemy się strukturą, treścią, wyglądem i publikacją.",
    included: [
      "analiza firmy i potrzeb",
      "zaplanowanie struktury strony",
      "przygotowanie podstawowych tekstów, nagłówków i CTA",
      "indywidualny projekt dopasowany do marki",
      "kompletna strona główna",
      "1 prosta dodatkowa podstrona",
      "do 10 głównych sekcji",
      "wersja desktop, tablet i mobile",
      "menu i nawigacja",
      "podstawowy formularz kontaktowy",
      "galeria / realizacje",
      "wybrane opinie",
      "FAQ",
      "Google Maps",
      "linki social media",
      "link do Booksy / Calendly lub innego zewnętrznego systemu",
      "podstawowe animacje i efekty wizualne",
      "slider przed / po, jeśli pasuje do projektu",
      "podstawowe SEO techniczne",
      "Google Search Console",
      "favicon i podstawowe meta dane",
      "podpięcie domeny",
      "publikacja",
      "2 tury poprawek przed publikacją",
      "30 dni gwarancji technicznej",
    ],
    domainNote:
      "Domena jest kupowana na dane klienta i pozostaje jego własnością.",
  },
  extensions: {
    eyebrow: "Rozszerzenia",
    title: "Potrzebujesz czegoś więcej?",
    lead: "Bazowy pakiet wystarcza większości lokalnych firm. Jeśli potrzebujesz dodatkowej funkcji, możesz rozszerzyć projekt o wybrane elementy.",
    items: [
      { name: "Dodatkowa prosta sekcja ponad ustalony zakres", price: "+50 zł" },
      { name: "Dodatkowa rozbudowana sekcja ponad ustalony zakres", price: "+100 zł" },
      { name: "Dodatkowy formularz", price: "+100 zł" },
      { name: "Możliwość wysyłania zdjęć lub plików", price: "+100 zł" },
      { name: "Google Analytics", price: "+100 zł" },
      { name: "Meta Pixel", price: "+100 zł" },
      { name: "Video lub video w tle", price: "+100 zł" },
      { name: "Kilka lokalizacji na mapie", price: "+100 zł" },
      { name: "Firmowy e-mail w domenie", price: "+100 zł" },
      { name: "Śledzenie konwersji", price: "od +100 zł" },
      { name: "Każda kolejna prosta podstrona", price: "+150 zł" },
      { name: "Rozbudowany formularz wyceny", price: "+150 zł" },
      { name: "Formularz zapytania o rezerwację", price: "+150 zł" },
      { name: "Osadzenie gotowego systemu rezerwacji", price: "+150 zł" },
      { name: "Galeria z filtrowaniem", price: "+150 zł" },
      { name: "Google Analytics + Meta Pixel", price: "+150 zł" },
      {
        name: "Przeniesienie większej ilości treści ze starej strony",
        price: "od +150 zł",
      },
      { name: "Rozbudowana podstrona", price: "+250 zł" },
      {
        name: "Konfiguracja gotowego systemu rezerwacji",
        price: "od +250 zł",
      },
      { name: "Dodatkowa wersja językowa", price: "+250 zł" },
      { name: "Kalkulator orientacyjnej wyceny", price: "od +250 zł" },
      { name: "Formularz wieloetapowy", price: "od +300 zł" },
      { name: "Blog / aktualności", price: "od +300 zł" },
      { name: "Ekspresowa realizacja", price: "+20% wartości projektu" },
    ],
    scopeNote:
      "Ceny rozszerzeń dotyczą elementów dodawanych ponad ustalony zakres bazowego projektu. Funkcje i sekcje, które naturalnie wynikają z koncepcji przygotowanej przez MSWA, nie są naliczane osobno.",
    footnote:
      "Nie widzisz funkcji, której potrzebujesz? Opowiedz nam o niej przed rozpoczęciem projektu. Jeśli możemy ją wykonać, otrzymasz cenę przed podjęciem decyzji.",
    externalFeesNote:
      "Ceny nie obejmują ewentualnych abonamentów, licencji ani opłat pobieranych przez zewnętrzne usługi, np. systemy rezerwacji.",
  },
  care: {
    eyebrow: "Opieka po publikacji",
    title: "MSWA Care",
    price: "299 zł",
    priceSuffix: "/ mies.",
    lead: "Nie chcesz zajmować się stroną po publikacji? My zrobimy to za Ciebie.",
    included: [
      "hosting strony",
      "bieżąca opieka techniczna",
      "kontrola działania strony",
      "2 rundy drobnych zmian miesięcznie",
    ],
    note: "Nowe podstrony, większe przebudowy i dodatkowe funkcjonalności są wyceniane osobno.",
    ctaLabel: "Chcę stronę z opieką",
    ctaHref: "/#kontakt",
  },
} as const;
