/**
 * MSWA pricing — homepage offer + /cennik page content.
 * Zgodne z umowami MSWA PR_02 (wykonanie WWW) i PR_03 (Hosting/Care).
 */

export const websiteOffer = {
  label: "Strona internetowa",
  price: "1 500 zł",
  priceNote: "jednorazowo",
  headline: "Jedna strona. Cały proces po naszej stronie.",
  lead: "Podstawowa strona zawiera wszystko, czego potrzebuje większość lokalnych firm — do 11 prostych punktów treści. Jeśli potrzebujesz dodatkowych funkcji lub większego zakresu, możesz dobrać je według jasnego cennika.",
  included: [
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
    "podpięcie domeny i publikacja",
    "poprawki w ramach ustalonego zakresu przed publikacją",
    "30 dni bezpłatnego wsparcia technicznego od publikacji strony",
  ],
  domainNote:
    "Domena pozostaje własnością klienta i jest kupowana bezpośrednio na jego dane. Pomagamy w jej wyborze, konfiguracji i podpięciu do strony. Koszt zakupu i odnowień domeny ponosi klient.",
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
    "dodatkowa runda zmian: 150 zł",
  ],
  excludedNote:
    "Nowe podstrony, sekcje, funkcje i większe przebudowy wyceniamy osobno. Niewykorzystane rundy nie przechodzą dalej.",
} as const;

export const subscriptionNotes = {
  sectionLabel: "Po publikacji",
  sectionLead:
    "Abonamenty są opcjonalne. Płatność z góry za każde 30 dni. Domena pozostaje po stronie klienta. Bez minimalnego okresu zobowiązania i kar za rezygnację.",
  optionalNote: "Opcjonalnie. Bez długoterminowego zobowiązania.",
  shared: [
    "Hosting zarządza MSWA — domena pozostaje u klienta.",
    "Rezygnacja jest skuteczna na koniec bieżącego opłaconego okresu.",
    "Bezpłatne jest wydanie opłaconego kodu, dostępnych plików i podstawowych informacji do przeniesienia strony.",
    "Wykonanie standardowej migracji strony na zgodny hosting przez MSWA: 399 zł.",
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
    paymentNote:
      "Płatność: 50% zaliczki (750 zł) i 50% po akceptacji projektu (750 zł). Pierwsza kompletna wersja standardowo do 7 dni roboczych od zawarcia umowy, opłacenia zaliczki i dostarczenia kompletnych materiałów. Dopłata w ciągu 7 dni kalendarzowych od akceptacji. Publikacja i przekazanie po pełnej zapłacie.",
    included: [
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
      "podpięcie domeny",
      "publikacja",
      "poprawki w ramach ustalonego zakresu przed publikacją",
      "30 dni bezpłatnego wsparcia technicznego od publikacji strony",
    ],
    domainNote:
      "Domena jest kupowana na dane klienta i pozostaje jego własnością. Koszt zakupu i odnowień ponosi klient.",
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
    title: "MSWA Hosting i MSWA Care",
    lead: "Abonamenty są opcjonalne. Jeśli ich nie wybierzesz, korzystasz z hostingu na swoim koncie. Płatność z góry za każde 30 dni. Bez minimalnego okresu zobowiązania i kar za rezygnację.",
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
          "dodatkowa runda zmian: 150 zł",
        ],
        note: "Nowe podstrony, sekcje, funkcje i większe przebudowy wyceniamy indywidualnie. Niewykorzystane rundy nie przechodzą na kolejne okresy.",
      },
    ],
    sharedNotes: [
      "Domena pozostaje po stronie klienta.",
      "Rezygnacja jest skuteczna na koniec bieżącego opłaconego okresu.",
      "Bezpłatne jest wydanie opłaconego kodu, dostępnych plików i podstawowych informacji potrzebnych do przeniesienia strony.",
      "Jeśli zlecasz MSWA wykonanie standardowej migracji strony na zgodny hosting: 399 zł.",
      "Diagnozę zgłoszonej lub wykrytej awarii rozpoczynamy w ciągu 1 dnia roboczego. Nie gwarantujemy dostępności 100% ani naprawy każdej awarii w określonym czasie.",
    ],
    ctaLabel: "Zapytaj o hosting lub opiekę",
    ctaHref: "/#kontakt",
  },
} as const;
