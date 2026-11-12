"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const questions: ReadonlyArray<{ q: string; a: ReactNode }> = [
  {
    q: "Ile kosztuje strona?",
    a: (
      <>
        Strona internetowa kosztuje 1 500 zł jednorazowo. Najczęstsze
        rozszerzenia mają jasno określone ceny w naszym{" "}
        <Link
          href="/cennik"
          className="text-text underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
        >
          cenniku
        </Link>
        . Nietypowe lub bardziej zaawansowane funkcje wyceniamy indywidualnie
        przed rozpoczęciem prac.
      </>
    ),
  },
  {
    q: "Czy oglądanie projektu coś mnie zobowiązuje?",
    a: "Nie. Najpierw bezpłatnie przygotowujemy projekt poglądowy i wysyłamy Ci link. Możesz go obejrzeć bez zobowiązania do zakupu.",
  },
  {
    q: "Jak wygląda współpraca i płatność?",
    a: "Bez zaliczki. Jeśli oferta Ci odpowiada, akceptujesz ją i warunki e-mailem. Uzgadniamy poprawki, pokazujemy wersję końcową i po jej akceptacji płacisz 1 500 zł. Publikacja oraz przekazanie plików następują po rozliczeniu i spełnieniu niezbędnych warunków technicznych.",
  },
  {
    q: "Ile trwa wykonanie strony?",
    a: "Po rozmowie przygotowujemy bezpłatny projekt poglądowy. Termin realizacji końcowej strony ustalamy po akceptacji oferty — zależnie od zakresu i materiałów, które otrzymamy.",
  },
  {
    q: "Co muszę Wam dostarczyć?",
    a: "Przede wszystkim informacje o firmie, usługach i tym, co jest dla Ciebie ważne. Jeśli masz zdjęcia, logo lub istniejące materiały — wykorzystamy je. Nie musisz przygotowywać gotowego projektu ani wiedzieć, jak strona powinna wyglądać.",
  },
  {
    q: "Czy zajmujecie się domeną i hostingiem?",
    a: "Domenę kupujesz i opłacasz samodzielnie — pomagamy w wyborze, konfiguracji i podpięciu. Przy zakupie samej strony hosting oraz bieżące utrzymanie są po Twojej stronie. Jeśli wybierzesz MSWA Care lub MSWA Care Plus, utrzymanie strony na infrastrukturze Cloudflare zapewnia MSWA.",
  },
  {
    q: "Czy mogę zgłaszać poprawki?",
    a: "Tak. W cenie strony są 2 rundy drobnych zmian — maksymalnie 15 zmian w każdej. Dodatkowa runda kosztuje 150 zł. Większe zmiany i dodatkowe funkcje wyceniamy indywidualnie.",
  },
  {
    q: "Czy po publikacji muszę płacić abonament?",
    a: "Nie. Nie ma obowiązkowego abonamentu. Możesz korzystać ze strony na własnym hostingu. Opcjonalnie możesz wybrać MSWA Care za 150 zł / 30 dni (utrzymanie techniczne) albo MSWA Care Plus za 300 zł / 30 dni (utrzymanie techniczne i 2 rundy drobnych zmian w opłaconym okresie). Opłacasz z góry wybrany okres — bez automatycznego pobierania opłat. Bezpłatne jest wydanie kodu i plików do przeniesienia; wykonanie migracji przez MSWA na zgodny hosting kosztuje 399 zł.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="site-pad scroll-mt-24 md:px-10 lg:px-16">
      <div className="site-shell site-section-y border-t border-line md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <Reveal>
          <SectionLabel>Najczęstsze pytania</SectionLabel>
          <h2 className="mt-5 font-serif text-[clamp(2.05rem,5.5vw,3.15rem)] leading-[1.12] font-normal">
            Zanim zaczniemy.
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-line md:mt-16">
          {questions.map((item, index) => {
            const isOpen = open === index;
            const n = String(index + 1).padStart(2, "0");

            return (
              <Reveal key={item.q} delay={`${(index % 3) * 40}ms`}>
                <div className="border-b border-line">
                  <button
                    type="button"
                    className="flex w-full items-start gap-3.5 py-5 text-left sm:gap-4 md:gap-8 md:py-6"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <span className="mt-0.5 font-serif text-[1.2rem] text-accent/90 sm:mt-1 sm:text-[1.15rem]">
                      {n}
                    </span>
                    <span className="flex-1 pt-0.5 text-[15px] leading-snug md:text-[17px]">
                      {item.q}
                    </span>
                    <span
                      className={`mt-0.5 inline-block text-xl leading-none text-muted transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mt-1 ${
                        isOpen ? "rotate-45 text-accent" : "rotate-0"
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="faq-panel"
                    data-open={isOpen ? "true" : "false"}
                  >
                    <div className="faq-panel-inner">
                      <p className="max-w-2xl pb-6 pl-9 text-[14px] leading-relaxed text-muted sm:pl-10 md:pl-[4.25rem] md:text-[15px]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
