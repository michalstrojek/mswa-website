/**
 * MSWA pricing — homepage offer + /cennik page content.
 * Publiczna oferta zgodna z aktualnym modelem sprzedaży MSWA
 * (wykonanie WWW + opcjonalne MSWA Care / MSWA Care Plus).
 */

export const websiteOffer = {
  label: "Strona internetowa",
  price: "1 500 zł",
  priceNote: "jednorazowo",
  headline: "Jedna strona. Cały proces po naszej stronie.",
  lead: "Zaczynamy od bezpłatnego projektu poglądowego — dostajesz link i oglądasz bez zobowiązania. Podstawowa strona zawiera wszystko, czego potrzebuje większość lokalnych firm — do 11 prostych punktów treści. Dodatkowe funkcje dobierzesz według jasnego cennika.",
  included: [
    "bezpłatny projekt poglądowy z linkiem do obejrzenia — bez zobowiązania do zakupu",
    "indywidualny projekt dopasowany do firmy",
    "pomysł, struktura i podstawowe treści po naszej stronie",
    "do 11 prostych punktów treści (modułów) na stronie głównej i podstronach",
    "sama dodatkowa podstrona nie zużywa punktu z limitu",
    "wersja na komputer, tablet i telefon",
    "formularz kontaktowy",
    "galeria, opinie, FAQ, mapa i inne elementy dopasowane do firmy",
    "do 150 zdjęć oraz sekcja filmów w ramach limitów umowy",
    "prosty odnośnik do zewnętrznej rezerwacji; proste elementy bloga jako punkty treści (bez CMS)",
    "podstawowe SEO i przygotowanie techniczne",
    "2 rundy drobnych zmian w cenie — maksymalnie 15 zmian w każdej rundzie; dodatkowa runda: 150 zł",
    "podpięcie domeny i publikacja po rozliczeniu",
    "pliki strony oraz licencja niewyłączna do korzystania, przenoszenia i dalszego rozwijania strony — zgodnie z warunkami oferty",
    "30 dni bezpłatnego usuwania usterek wykonawczych od publikacji strony",
  ],
  domainNote:
    "Domenę kupujesz i opłacasz samodzielnie. Pomagamy w wyborze, konfiguracji i podpięciu do strony.",
  processNote:
    "Bez zaliczki. Po akceptacji oferty e-mailem uzgadniamy poprawki, pokazujemy wersję końcową i po jej akceptacji płacisz 1 500 zł. Publikacja i przekazanie następują po rozliczeniu oraz spełnieniu niezbędnych warunków technicznych.",
  extendedNote:
    "Masz bardziej rozbudowany projekt? Rozszerzenia mają jasno określone ceny.",
  ctaLabel: "Zapytaj o swoją stronę",
  ctaHref: "/#kontakt",
  pricingLinkLabel: "Zobacz pełny zakres i dodatki",
  pricingHref: "/cennik",
} as const;

export const careOffer = {
  label: "MSWA Care",
  price: "150 zł",
  priceSuffix: "/ 30 dni",
  lead: "Utrzymanie techniczne i hosting strony na infrastrukturze Cloudflare — bez samodzielnego zarządzania środowiskiem.",
  included: [
    "hosting strony na infrastrukturze Cloudflare zarządzanej przez MSWA",
    "obsługa techniczna i utrzymanie strony",
    "automatyczne monitorowanie dostępności",
    "kopie zapasowe oraz możliwość przywrócenia działającej wersji",
    "reagowanie na awarie i niezbędne naprawy techniczne",
    "techniczna obsługa istniejącego formularza kontaktowego",
  ],
  excludedNote:
    "Bez zmian treści, zdjęć, cen ani wyglądu — takie prace obejmuje Care Plus albo wycena indywidualna.",
} as const;

export const carePlusOffer = {
  label: "MSWA Care Plus",
  price: "300 zł",
  priceSuffix: "/ 30 dni",
  lead: "W każdym opłaconym okresie 30 kolejnych dni otrzymujesz 2 rundy drobnych zmian w istniejącej stronie, maksymalnie 15 zmian w każdej rundzie. Nowe sekcje, funkcje i przebudowa strony wymagają osobnej wyceny.",
  included: [
    "wszystko z MSWA Care",
    "2 rundy drobnych zmian w każdym opłaconym okresie 30 kolejnych dni — maksymalnie 15 zmian w każdej rundzie",
    "aktualizacje tekstów, zdjęć, cen, kolorów i podobnych elementów w istniejącej strukturze strony",
    "jedna runda = jedno zbiorcze zgłoszenie drobnych zmian",
    "naprawy wad, które MSWA ma obowiązek usunąć, nie zużywają rund ani limitu zmian",
    "wykonanie zwykle do 5 dni roboczych od kompletnego zgłoszenia",
    "dodatkowa runda zmian: 150 zł",
  ],
  excludedNote:
    "Nowe sekcje, funkcje i przebudowa strony wymagają osobnej wyceny. Niewykorzystane rundy nie przechodzą dalej.",
} as const;

export const subscriptionNotes = {
  sectionLabel: "Po publikacji",
  sectionLead:
    "Care i Care Plus są dobrowolne. Opłacasz z góry wybrany okres 30 dni — bez automatycznego pobierania opłat i bez obowiązkowego abonamentu. Domenę kupujesz i opłacasz samodzielnie.",
  optionalNote:
    "Bez Care korzystasz z własnego hostingu i odpowiadasz za jego bieżące utrzymanie. Obsługa formularza jest wtedy niezależna od konta MSWA.",
  shared: [
    "W Care i Care Plus stronę utrzymujemy na infrastrukturze Cloudflare — domena pozostaje u Ciebie.",
    "Rezygnacja jest skuteczna na koniec bieżącego opłaconego okresu.",
    "Bezpłatne jest wydanie opłaconego kodu, dostępnych plików i podstawowych informacji do przeniesienia strony.",
    "Wykonanie standardowej migracji strony na zgodny hosting przez MSWA: 399 zł.",
    "Diagnozę awarii rozpoczynamy w ciągu 1 dnia roboczego. Nie gwarantujemy dostępności 100% ani stałego nadzoru 24/7.",
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
    lead: "Najpierw przygotowujemy bezpłatny projekt poglądowy i wysyłamy Ci link. Obejrzenie go nic nie zobowiązuje. Nie musisz mieć gotowych tekstów — opowiedz o firmie, a my zajmiemy się strukturą, treścią, wyglądem i publikacją.",
    paymentNote:
      "Bez zaliczki. Po akceptacji oferty i warunków e-mailem uzgadniamy poprawki, pokazujemy wersję końcową i po jej akceptacji płacisz 1 500 zł. Publikacja oraz przekazanie plików następują po rozliczeniu i spełnieniu niezbędnych warunków technicznych.",
    included: [
      "bezpłatny projekt poglądowy z linkiem do obejrzenia — bez zobowiązania do zakupu",
      "analiza firmy i potrzeb",
      "zaplanowanie struktury strony",
      "przygotowanie podstawowych tekstów, nagłówków i CTA",
      "indywidualny projekt dopasowany do marki",
      "do 11 prostych punktów treści (modułów) na stronie głównej i podstronach",
      "sama dodatkowa podstrona nie zużywa punktu z limitu",
      "wersja desktop, tablet i mobile",
      "menu i nawigacja",
      "podstawowy formularz kontaktowy",
      "galeria / realizacje",
      "do 150 zdjęć w standardowym zakresie projektu",
      "sekcja filmów w ramach limitów umowy",
      "wybrane opinie",
      "FAQ",
      "Google Maps",
      "linki social media",
      "prosty przycisk / odnośnik do zewnętrznego systemu rezerwacji (np. Booksy, Calendly)",
      "proste elementy bloga lub aktualności jako punkty treści (bez CMS)",
      "podstawowe animacje i efekty wizualne",
      "slider przed / po, jeśli pasuje do projektu",
      "podstawowe SEO techniczne",
      "Google Search Console",
      "favicon i podstawowe meta dane",
      "2 rundy drobnych zmian w cenie — maksymalnie 15 zmian w każdej rundzie; dodatkowa runda: 150 zł",
      "podpięcie domeny",
      "publikacja po rozliczeniu",
      "pliki strony oraz licencja niewyłączna do korzystania, przenoszenia i dalszego rozwijania strony — zgodnie z warunkami oferty",
      "30 dni bezpłatnego usuwania usterek wykonawczych od publikacji strony",
    ],
    domainNote:
      "Domenę kupujesz i opłacasz samodzielnie. Pomagamy w wyborze, konfiguracji i podpięciu.",
  },
  extensions: {
    eyebrow: "Rozszerzenia",
    title: "Potrzebujesz czegoś więcej?",
    lead: "Bazowy pakiet wystarcza większości lokalnych firm. Poniżej — dopłaty zatwierdzone w ofercie oraz rozszerzenia wyceniane indywidualnie. Elementów objętych pakietem 1 500 zł nie naliczamy drugi raz.",
    items: [
      { name: "Dodatkowy prosty punkt treści", price: "+150 zł" },
      { name: "Proste filtrowanie galerii według kategorii", price: "+250 zł" },
      { name: "Dodatkowa wersja językowa", price: "+300 zł" },
      { name: "Wyszukiwarka tekstowa galerii", price: "+500 zł" },
      {
        name: "Dodatkowy formularz (poza jednym standardowym formularzem kontaktowym)",
        price: "Wycena indywidualna",
      },
      {
        name: "Formularz z możliwością wysyłania zdjęć lub plików",
        price: "Wycena indywidualna",
      },
      { name: "Rozbudowany formularz wyceny", price: "Wycena indywidualna" },
      {
        name: "Formularz zapytania o rezerwację",
        price: "Wycena indywidualna",
      },
      { name: "Formularz wieloetapowy", price: "Wycena indywidualna" },
      { name: "Google Analytics", price: "Wycena indywidualna" },
      { name: "Meta Pixel", price: "Wycena indywidualna" },
      {
        name: "Google Analytics + Meta Pixel",
        price: "Wycena indywidualna",
      },
      { name: "Śledzenie konwersji", price: "Wycena indywidualna" },
      {
        name: "Video lub video w tle ponad limity umowy",
        price: "Wycena indywidualna",
      },
      { name: "Kilka lokalizacji na mapie", price: "Wycena indywidualna" },
      { name: "Firmowy e-mail w domenie", price: "Wycena indywidualna" },
      {
        name: "Przeniesienie większej ilości treści ze starej strony",
        price: "Wycena indywidualna",
      },
      {
        name: "Kalkulator orientacyjnej wyceny",
        price: "Wycena indywidualna",
      },
      {
        name: "Wdrożenie własnego systemu rezerwacji (nie dotyczy prostego przycisku do usługi zewnętrznej)",
        price: "Wycena indywidualna",
      },
      {
        name: "Blog / aktualności z CMS (nie dotyczy prostych elementów bloga w ramach punktów treści)",
        price: "Wycena indywidualna",
      },
      {
        name: "Realizacja ekspresowa",
        price: "dostępność, termin i cena ustalane indywidualnie",
      },
    ],
    scopeNote:
      "W cenie 1 500 zł są m.in. jeden standardowy formularz kontaktowy, do 11 prostych punktów treści, sekcja filmów w ramach limitów umowy, prosty odnośnik do zewnętrznej rezerwacji oraz proste elementy bloga jako punkty treści (bez CMS). Punkty można rozmieścić na stronie głównej i podstronach — sama dodatkowa podstrona nie zużywa punktu, ale nie oznacza to nieograniczonej liczby podstron ani treści poza limitem 11 punktów. Elementów objętych zakresem podstawowym nie naliczamy ponownie.",
    footnote:
      "Nie widzisz funkcji, której potrzebujesz? Opowiedz nam o niej przed rozpoczęciem projektu. Jeśli możemy ją wykonać, otrzymasz cenę przed podjęciem decyzji.",
    externalFeesNote:
      "Ceny nie obejmują ewentualnych abonamentów, licencji ani opłat pobieranych przez zewnętrzne usługi, np. systemy rezerwacji.",
  },
  subscriptions: {
    eyebrow: "Po publikacji",
    title: "MSWA Care i MSWA Care Plus",
    lead: "Care i Care Plus są dobrowolne. Jeśli ich nie wybierzesz, korzystasz z własnego hostingu i odpowiadasz za jego bieżące utrzymanie. Opłacasz z góry wybrany okres 30 dni — bez automatycznego pobierania opłat.",
    plans: [
      {
        name: "MSWA Care",
        price: "150 zł",
        priceSuffix: "/ 30 dni",
        lead: "Utrzymanie techniczne i hosting strony na infrastrukturze Cloudflare.",
        included: [
          "hosting strony na infrastrukturze Cloudflare zarządzanej przez MSWA",
          "obsługa techniczna i utrzymanie strony",
          "automatyczne monitorowanie dostępności",
          "kopie zapasowe kodu i plików oraz przywracanie działającej wersji",
          "reagowanie na awarie i niezbędne naprawy techniczne",
          "techniczna obsługa istniejącego formularza kontaktowego",
        ],
        note: "Nie obejmuje zmian treści, zdjęć, cen, kolorów ani innych aktualizacji zamawianych przez klienta.",
      },
      {
        name: "MSWA Care Plus",
        price: "300 zł",
        priceSuffix: "/ 30 dni",
        lead: "W każdym opłaconym okresie 30 kolejnych dni otrzymujesz 2 rundy drobnych zmian w istniejącej stronie, maksymalnie 15 zmian w każdej rundzie. Nowe sekcje, funkcje i przebudowa strony wymagają osobnej wyceny.",
        included: [
          "wszystko z MSWA Care",
          "2 rundy drobnych zmian w każdym opłaconym okresie 30 kolejnych dni — maksymalnie 15 zmian w każdej rundzie",
          "aktualizacje istniejących tekstów, zdjęć, cen, kolorów i podobnych elementów w istniejącej strukturze strony",
          "jedna runda = jedno zbiorcze zgłoszenie drobnych zmian",
          "naprawy wad, które MSWA ma obowiązek usunąć, nie zużywają rund ani limitu zmian",
          "standardowy termin: do 5 dni roboczych od kompletnego zgłoszenia",
          "dodatkowa runda zmian: 150 zł",
        ],
        note: "Nowe sekcje, funkcje i przebudowa strony wymagają osobnej wyceny. Niewykorzystane rundy nie przechodzą na kolejne okresy.",
      },
    ],
    sharedNotes: [
      "Domena pozostaje po stronie klienta.",
      "Rezygnacja jest skuteczna na koniec bieżącego opłaconego okresu.",
      "Bezpłatne jest wydanie opłaconego kodu, dostępnych plików i podstawowych informacji potrzebnych do przeniesienia strony.",
      "Jeśli zlecasz MSWA wykonanie standardowej migracji strony na zgodny hosting: 399 zł.",
      "Diagnozę zgłoszonej lub wykrytej awarii rozpoczynamy w ciągu 1 dnia roboczego. Nie gwarantujemy dostępności 100% ani stałego nadzoru 24/7.",
    ],
    ctaLabel: "Zapytaj o Care lub Care Plus",
    ctaHref: "/#kontakt",
  },
} as const;
