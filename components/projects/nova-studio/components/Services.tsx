"use client";

import {
  isDemoExternalBookingUrl,
  notifyDemoBooking,
} from "@/lib/demo-booking";
import { BOOKSY_URL, services } from "../lib/site";
import { Reveal } from "./Reveal";
import { Label } from "./ui";

export function Services() {
  const demoBooking = isDemoExternalBookingUrl(BOOKSY_URL);

  return (
    <section
      id="uslugi"
      className="border-t border-line px-5 py-14 sm:px-8 lg:px-10 lg:py-[4.25rem] xl:px-12"
    >
      <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0 overflow-hidden pr-2 lg:max-w-[22rem]">
          <Reveal variant="up-sm" delay={0}>
            <Label className="mb-5">Nasze usługi</Label>
          </Reveal>
          <Reveal variant="up" delay={80}>
            <h2 className="headline text-[clamp(2.1rem,3.1vw,3.55rem)]">
              Styl,
              <br />
              kolor,
              <br />
              <span className="italic-word">pielęgnacja.</span>
            </h2>
          </Reveal>
          <Reveal variant="up-sm" delay={160}>
            <p className="mt-8 max-w-[16rem] text-[11px] leading-5 tracking-[0.16em] uppercase text-muted">
              Wszystko, czego potrzebują Twoje włosy.
            </p>
          </Reveal>
        </div>

        <div className="min-w-0 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:gap-x-12">
          {services.map((item, i) => {
            const className = `group btn-arrow flex w-full gap-4 py-6 text-left ${i < 2 ? "border-b border-line" : ""}`;
            const body = (
              <>
                <span className="font-display text-sm tracking-widest text-muted">
                  {item.n}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-3">
                    <span className="text-[13px] tracking-[0.18em] uppercase">
                      {item.title}
                    </span>
                    <span aria-hidden="true" className="text-muted">
                      →
                    </span>
                  </span>
                  <span className="mt-2 block max-w-[18rem] text-[13px] leading-5 text-muted">
                    {item.text}
                  </span>
                </span>
              </>
            );

            return (
              <Reveal key={item.n} variant="up-sm" delay={120 + i * 85}>
                {demoBooking ? (
                  <button
                    type="button"
                    className={className}
                    title="Demonstracyjna rezerwacja"
                    aria-haspopup="dialog"
                    onClick={notifyDemoBooking}
                  >
                    {body}
                  </button>
                ) : (
                  <a
                    href={BOOKSY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {body}
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
