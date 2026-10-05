"use client";

import { Reveal } from "./Reveal";
import { BookingButton, Label } from "./ui";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      <div className="grid min-w-0 items-end gap-10 px-6 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-14 lg:px-12 lg:py-20 xl:gap-20 xl:px-14">
        <div className="min-w-0 overflow-visible">
          <Reveal>
            <Label className="mb-4 !text-cream/55 lg:mb-5">Czas na zmianę</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.4rem,5.2vw,4.4rem)]">
            <Reveal as="span" className="inline-block">
              Umów wizytę
              <br />i poczuj
            </Reveal>
            <br />
            <Reveal as="span" className="inline-block">
              <span className="italic-word">różnicę.</span>
            </Reveal>
          </h2>
        </div>

        <div className="flex min-w-0 flex-col justify-center lg:pb-1">
          <Reveal>
            <p className="max-w-[24rem] text-[13px] leading-6 text-cream/70">
              Dobre włosy to nie przypadek. Umów wizytę i poczuj nowy początek.
              Twoją najlepszą wersję.
            </p>
          </Reveal>
          <Reveal>
            <BookingButton variant="light" className="mt-6 w-fit lg:mt-8">
              Umów termin
            </BookingButton>
          </Reveal>
          <Reveal>
            <p className="mt-3 text-[9px] tracking-[0.28em] uppercase text-cream/45 lg:mt-4">
              Rezerwacja online / Booksy
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
