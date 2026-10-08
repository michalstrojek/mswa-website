"use client";

import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { BookingButton, Label } from "@/components/ui";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="grid min-w-0 items-end gap-7 px-5 py-9 sm:gap-10 sm:px-8 sm:py-11 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14 lg:px-12 lg:py-16 xl:gap-20 xl:px-14">
        <div className="min-w-0 overflow-visible">
          <Reveal variant="up-sm" delay={40}>
            <Label className="mb-3 !text-cream/55 sm:mb-4 lg:mb-5">Czas na zmianę</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.2rem,5.2vw,4.4rem)]">
            <LineReveal delay={100} duration={950}>
              <span className="block">Umów wizytę</span>
            </LineReveal>
            <LineReveal delay={220} duration={950}>
              <span className="block">i poczuj</span>
            </LineReveal>
            <LineReveal delay={380} duration={1150}>
              <span className="italic-word block">różnicę.</span>
            </LineReveal>
          </h2>
        </div>

        <div className="flex min-w-0 flex-col justify-center lg:pb-1">
          <Reveal variant="up-sm" delay={420}>
            <p className="max-w-[24rem] text-[13px] leading-6 text-cream/70">
              Dobre włosy to nie przypadek. Umów wizytę i poczuj nowy początek.
              Twoją najlepszą wersję.
            </p>
          </Reveal>
          <Reveal variant="up-sm" delay={540}>
            <BookingButton variant="light" className="mt-5 w-fit sm:mt-6 lg:mt-8">
              Umów termin
            </BookingButton>
          </Reveal>
          <Reveal variant="fade" delay={680}>
            <p className="mt-3 text-[9px] tracking-[0.28em] uppercase text-cream/45 lg:mt-4">
              Rezerwacja online / Booksy
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
