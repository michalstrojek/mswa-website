"use client";

import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const questions = [
  {
    q: "Ile kosztuje strona?",
    a: "Podstawowe projekty zaczynają się od 1 490 zł. Jeśli strona wymaga większej liczby podstron, dodatkowych funkcji albo bardziej rozbudowanego zakresu, wyceniamy ją indywidualnie przed rozpoczęciem pracy.",
  },
  {
    q: "Ile trwa wykonanie strony?",
    a: "Standardowa strona jest zwykle gotowa w 3–7 dni roboczych od otrzymania potrzebnych materiałów. Bardziej rozbudowane projekty mogą wymagać więcej czasu. Dokładny termin ustalamy przed rozpoczęciem prac.",
  },
  {
    q: "Co muszę Wam dostarczyć?",
    a: "Przede wszystkim informacje o firmie, usługach i tym, co jest dla Ciebie ważne. Jeśli masz zdjęcia, logo lub istniejące materiały — wykorzystamy je. Nie musisz przygotowywać gotowego projektu ani wiedzieć, jak strona powinna wyglądać.",
  },
  {
    q: "Czy zajmujecie się domeną i hostingiem?",
    a: "Tak. Pomagamy w wyborze i konfiguracji domeny, ale domena jest kupowana i rejestrowana bezpośrednio na klienta. Przy zakupie samej strony hosting również jest po stronie klienta. W przypadku MSWA Care hosting zapewnia i obsługuje MSWA.",
  },
  {
    q: "Czy mogę zgłaszać poprawki?",
    a: "Tak. Przed publikacją dostajesz stronę do wglądu i nanosimy ustalone poprawki, żeby finalna wersja była zgodna z tym, czego potrzebujesz.",
  },
  {
    q: "Czy po publikacji muszę płacić abonament?",
    a: "Nie. Po wykonaniu strony nie ma obowiązkowego abonamentu. Możesz korzystać ze strony samodzielnie na własnej domenie i hostingu. Jeśli chcesz, możesz dodatkowo wybrać MSWA Care za 299 zł miesięcznie — wtedy zajmujemy się hostingiem, zmianami, aktualizacjami i bieżącą obsługą strony.",
  },
] as const;

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
