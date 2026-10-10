/**
 * MSWA pricing — homepage offer + /cennik page content.
 */

export const websiteOffer = {
  label: "Strona internetowa",
  price: "1 500 zł",
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
    "Poprawki w ramach ustalonego zakresu przed publikacją",
    "30 dni bezpłatnego wsparcia technicznego po odbiorze",
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

export const hostingOffer = {
  label: "MSWA Hosting",
  price: "199 zł",
  priceSuffix: "/ 30 dni",
  lead: "Dla klientów, którzy chcą, żeby ich strona po prostu działała — bez samodzielnego zarządzania hostingiem.",
  included: [
    "hosting na infrastrukturze zarządzanej przez MSWA",
    "obsługa techniczna i utrzymanie strony",
    "automatyczne monitorowanie dostępności",
    "kopie zapasowe oraz możliwość przywrócenia działającej wersji",
    "reagowanie na awarie i niezbędne naprawy techniczne",
  ],
  excludedNote:
    "Bez zmian treści, zdjęć, cen ani wyglądu — takie prace wyceniamy indywidualnie.",
} as const;

export const careOffer = {
  label: "MSWA Care",
  price: "299 zł",
  priceSuffix: "/ 30 dni",
  lead: "Wszystko z MSWA Hosting oraz 2 rundy drobnych zmian na każde 30 dni.",
  included: [
    "wszystko z MSWA Hosting",
    "2 rundy drobnych zmian na każde 30 dni",
    "aktualizacje tekstów, zdjęć, cen, kolorów i podobnych elementów",
    "jedna runda = jedno zbiorcze zgłoszenie drobnych zmian",
    "wykonanie zwykle do 5 dni roboczych od kompletnego zgłoszenia",
  ],
  excludedNote:
    "Nowe podstrony, sekcje, funkcje i większe przebudowy wyceniamy osobno. Niewykorzystane rundy nie przechodzą dalej.",
} as const;

export const subscriptionNotes = {
  sectionLabel: "Po publikacji",
  sectionLead:
    "Abonamenty są opcjonalne. Płatność z góry za każde 30 dni. Domena pozostaje po stronie klienta.",
  optionalNote: "Opcjonalnie. Bez długoterminowego zobowiązania.",
  shared: [
    "Hosting zarządza MSWA — domena pozostaje u klienta.",
    "Wypowiedzenie e-mailem; przy zwykłej rezygnacji abonament działa do końca opłaconego okresu.",
    "Standardowe przeniesienie strony na hosting klienta po zakończeniu abonamentu jest darmowe.",
    "Diagnozę awarii rozpoczynamy w ciągu 1 dnia roboczego. Nie gwarantujemy dostępności 100%.",
  ],
} as const;

export const pricingPage = {
  hero: {
    eyebrow: "Cennik",
    title: "Wiesz, za co płacisz.",
    lead: "Bazowa strona zawiera wszystko, czego potrzebuje większość lokalnych firm. Jeśli Twój projekt wymaga czegoś więcej, poniżej znajdziesz jasne ceny rozszerzeń.",
  },
  website: {
    eyebrow: "Strona firmowa",
    price: "1 500 zł",
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
      "Poprawki w ramach ustalonego zakresu przed publikacją",
      "30 dni bezpłatnego wsparcia technicznego po odbiorze",
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
  subscriptions: {
    eyebrow: "Po publikacji",
    title: "MSWA Hosting i MSWA Care",
    lead: "Abonamenty są opcjonalne. Jeśli ich nie wybierzesz, korzystasz z hostingu na swoim koncie. Płatność z góry za każde 30 dni.",
    plans: [
      {
        name: "MSWA Hosting",
        price: "199 zł",
        priceSuffix: "/ 30 dni",
        lead: "Strona działa u nas — bez samodzielnego zarządzania hostingiem.",
        included: [
          "hosting na infrastrukturze zarządzanej przez MSWA",
          "obsługa techniczna i utrzymanie strony",
          "automatyczne monitorowanie dostępności",
          "kopie zapasowe kodu i plików oraz przywracanie działającej wersji",
          "reagowanie na awarie i niezbędne naprawy techniczne",
          "techniczna obsługa istniejącego formularza kontaktowego",
        ],
        note: "Nie obejmuje zmian treści, zdjęć, cen, kolorów ani innych aktualizacji zamawianych przez klienta.",
      },
      {
        name: "MSWA Care",
        price: "299 zł",
        priceSuffix: "/ 30 dni",
        lead: "Hosting i utrzymanie oraz 2 rundy drobnych zmian na każde 30 dni.",
        included: [
          "wszystko z MSWA Hosting",
          "2 rundy drobnych zmian na każde 30 dni",
          "aktualizacje istniejących tekstów, zdjęć, cen, kolorów i podobnych elementów",
          "jedna runda = jedno zbiorcze zgłoszenie drobnych zmian",
          "standardowy termin: do 5 dni roboczych od kompletnego zgłoszenia",
        ],
        note: "Nowe podstrony, sekcje, funkcje i większe przebudowy wyceniamy indywidualnie. Niewykorzystane rundy nie przechodzą na kolejne okresy.",
      },
    ],
    sharedNotes: [
      "Domena pozostaje po stronie klienta.",
      "Abonament można wypowiedzieć e-mailem; przy zwykłej rezygnacji działa do końca opłaconego okresu.",
      "Standardowe przeniesienie strony na hosting klienta po zakończeniu abonamentu jest darmowe.",
      "Diagnozę zgłoszonej lub wykrytej awarii rozpoczynamy w ciągu 1 dnia roboczego. Nie gwarantujemy dostępności 100% ani naprawy każdej awarii w określonym czasie.",
    ],
    ctaLabel: "Zapytaj o hosting lub opiekę",
    ctaHref: "/#kontakt",
  },
} as const;
