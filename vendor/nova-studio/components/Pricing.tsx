"use client";

import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { BookingButton, Label } from "@/components/ui";
import { pricing } from "@/lib/site";

export function Pricing() {
  return (
    <section
      id="cennik"
      className="overflow-x-clip border-t border-line/70 px-5 py-11 sm:px-8 sm:py-12 lg:px-10 lg:py-12 xl:px-12"
    >
      <div className="grid min-w-0 items-end gap-6 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-10 xl:gap-14">
        <div className="min-w-0 max-w-[26rem]">
          <Reveal variant="up-sm">
            <Label className="mb-4 lg:mb-5">Cennik</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.2rem,4vw,3.6rem)]">
            <LineReveal delay={80}>
              <span className="block">Jasna oferta.</span>
            </LineReveal>
            <LineReveal delay={180} duration={1050}>
              <span className="block">
                Czysta <span className="italic-word">cena.</span>
              </span>
            </LineReveal>
          </h2>
          <Reveal variant="up-sm" delay={280}>
            <p className="mt-5 max-w-[20rem] text-[13px] leading-6 text-muted lg:mt-6">
              Ceny orientacyjne — ostateczna wycena po konsultacji i ocenie stanu włosów.
              Najpopularniejsze usługi oznaczyliśmy dyskretnie.
            </p>
          </Reveal>
          <Reveal variant="up-sm" delay={360}>
            <BookingButton className="mt-6 lg:mt-7">Umów wizytę</BookingButton>
          </Reveal>
        </div>

        <Reveal variant="up-sm" delay={120}>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted lg:text-right">
            Hair / Color / Style · Warszawa
          </p>
        </Reveal>
      </div>

      <div className="mt-9 grid min-w-0 gap-8 lg:mt-11 lg:grid-cols-2 lg:gap-x-14 lg:gap-y-9 xl:gap-x-20">
        {pricing.map((group, gi) => (
          <Reveal key={group.group} variant="up-sm" delay={100 + gi * 90} amount={0.15}>
            <div>
              <div className="mb-4 flex items-baseline justify-between gap-4 border-b border-ink pb-2.5 lg:mb-5 lg:pb-3">
                <h3 className="font-display text-[1.15rem] tracking-[0.08em] uppercase lg:text-[1.25rem]">
                  {group.group}
                </h3>
                <span className="text-[10px] tracking-[0.22em] uppercase text-muted">
                  0{gi + 1}
                </span>
              </div>

              <ul className="space-y-0">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <div className="price-row group flex items-start justify-between gap-4 border-b border-line py-3.5 transition-colors duration-300 hover:border-ink/35 lg:py-4">
                      <div className="min-w-0 pr-2">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                          <p className="text-[13px] tracking-[0.04em] transition-transform duration-300 group-hover:translate-x-1">
                            {item.name}
                          </p>
                          {"popular" in item && item.popular ? (
                            <span className="text-[9px] tracking-[0.18em] uppercase text-muted">
                              Popularne
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1.5 text-[11px] tracking-[0.12em] uppercase text-muted">
                          {item.meta}
                        </p>
                      </div>
                      <p className="shrink-0 pt-0.5 font-display text-[14px] tracking-[0.04em] tabular-nums">
                        {item.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal variant="fade" delay={200}>
        <p className="mt-8 max-w-[36rem] text-[11px] leading-5 text-muted lg:mt-9">
          Koloryzacja i zabiegi pielęgnacyjne wyceniane indywidualnie — zależnie od długości,
          gęstości i historii włosów. Podczas konsultacji ustalimy dokładny zakres i koszt.
        </p>
      </Reveal>
    </section>
  );
}
