/**
 * MSWA confirmed pricing — website and optional care.
 */

export const websiteOffer = {
  label: "Strona internetowa",
  price: "1 490 zł",
  pricePrefix: "od",
  priceNote: "jednorazowo",
  headline: "Jedna strona. Cały proces po naszej stronie.",
  lead: "Nie rozbijamy projektu na dziesiątki dodatkowo płatnych elementów. Ustalamy, czego potrzebuje Twoja firma, tworzymy stronę i doprowadzamy ją do publikacji.",
  included: [
    "indywidualne dopasowanie projektu do firmy",
    "kompletna strona internetowa",
    "wersja na komputer, tablet i telefon",
    "pomoc przy treściach i strukturze",
    "formularze / kontakt / rezerwacje zależnie od potrzeb",
    "podstawowe SEO i przygotowanie techniczne",
    "podpięcie domeny i publikacja",
    "ustalone poprawki przed uruchomieniem",
  ],
  domainNote:
    "Domena pozostaje własnością klienta i jest kupowana bezpośrednio na jego dane. Pomagamy w jej wyborze, konfiguracji i podpięciu do strony.",
  extendedNote:
    "Masz bardziej rozbudowany projekt? Wyceniamy go indywidualnie po krótkiej rozmowie.",
  ctaLabel: "Zapytaj o swoją stronę",
  ctaHref: "/#kontakt",
} as const;

export const careOffer = {
  label: "Opieka po publikacji",
  price: "299 zł",
  priceSuffix: "/ mies.",
  lead: "Chcesz, żebyśmy zajmowali się stroną również po publikacji? MSWA Care obejmuje hosting strony, bieżącą opiekę oraz drobne zmiany i aktualizacje w ustalonym zakresie.",
  optionalNote:
    "MSWA Care jest opcjonalne — strona może działać również bez miesięcznego abonamentu.",
} as const;
