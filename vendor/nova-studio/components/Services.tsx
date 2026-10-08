"use client";

import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { Label } from "@/components/ui";
import {
  isDemoExternalBookingUrl,
  notifyDemoBooking,
} from "@/lib/demo-booking";
import { BOOKSY_URL, services } from "@/lib/site";
import { useInView } from "@/hooks/useInView";

function ServiceRow({
  item,
  index,
}: {
  item: (typeof services)[number];
  index: number;
}) {
  const [ref, visible] = useInView<HTMLElement>({ amount: 0.35 });
  const demoBooking = isDemoExternalBookingUrl(BOOKSY_URL);
  const className = `service-draw group btn-arrow flex w-full gap-4 py-3.5 text-left sm:py-5 lg:py-6${visible ? " is-visible" : ""}`;
  const style = { transitionDelay: `${140 + index * 110}ms` };

  const body = (
    <>
      <span
        className={`reveal reveal-up-sm font-display text-sm tracking-widest text-muted transition-colors group-hover:text-ink/70${visible ? " is-visible" : ""}`}
        style={{ transitionDelay: `${100 + index * 110}ms` }}
      >
        {item.n}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-start justify-between gap-3">
          <span
            className={`reveal reveal-up-sm service-title text-[13px] tracking-[0.18em] uppercase${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: `${180 + index * 110}ms` }}
          >
            {item.title}
          </span>
          <span
            aria-hidden="true"
            className={`reveal reveal-fade text-muted${visible ? " is-visible" : ""}`}
            style={{ transitionDelay: `${220 + index * 110}ms` }}
          >
            →
          </span>
        </span>
        <span
          className={`reveal reveal-up-sm mt-2 block max-w-[18rem] text-[13px] leading-5 text-muted${visible ? " is-visible" : ""}`}
          style={{ transitionDelay: `${240 + index * 110}ms` }}
        >
          {item.text}
        </span>
      </span>
    </>
  );

  if (demoBooking) {
    return (
      <button
        ref={ref as React.RefObject<HTMLButtonElement | null>}
        type="button"
        className={className}
        style={style}
        title="Demonstracyjna rezerwacja"
        aria-haspopup="dialog"
        onClick={notifyDemoBooking}
      >
        {body}
      </button>
    );
  }

  return (
    <a
      ref={ref as React.RefObject<HTMLAnchorElement | null>}
      href={BOOKSY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      style={style}
    >
      {body}
    </a>
  );
}

export function Services() {
  return (
    <section
      id="uslugi"
      className="border-t border-line px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14 xl:px-12"
    >
      <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] lg:gap-12 xl:gap-16">
        <div className="min-w-0 overflow-hidden pr-2 lg:max-w-[22rem]">
          <Reveal variant="up-sm" delay={0}>
            <Label className="mb-5">Nasze usługi</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.1rem,3.1vw,3.55rem)]">
            <LineReveal delay={80}>
              <span className="block">Styl,</span>
            </LineReveal>
            <LineReveal delay={160}>
              <span className="block">kolor,</span>
            </LineReveal>
            <LineReveal delay={260} duration={1050}>
              <span className="italic-word block">pielęgnacja.</span>
            </LineReveal>
          </h2>
          <Reveal variant="up-sm" delay={340}>
            <p className="mt-7 max-w-[16rem] text-[11px] leading-5 tracking-[0.16em] uppercase text-muted">
              Wszystko, czego potrzebują Twoje włosy.
            </p>
          </Reveal>
        </div>

        <div className="min-w-0 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:gap-x-12">
          {services.map((item, i) => (
            <ServiceRow key={item.n} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
