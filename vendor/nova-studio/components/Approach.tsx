"use client";

import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { Label } from "@/components/ui";
import { approachSteps } from "@/lib/site";

export function Approach() {
  return (
    <section
      id="podejscie"
      className="overflow-x-clip border-t border-line/60 px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-[4rem] xl:px-12"
    >
      <div className="grid min-w-0 items-start gap-9 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-16 xl:gap-24">
        <div className="min-w-0 max-w-[26rem] lg:pt-2">
          <Reveal variant="up-sm" delay={0}>
            <Label className="mb-5 lg:mb-6">Nasze podejście</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.25rem,4.4vw,3.9rem)]">
            <LineReveal delay={80} className="block">
              <span className="block">Zaczynamy</span>
            </LineReveal>
            <LineReveal delay={200} duration={1050} className="block">
              <span className="block">
                od <span className="italic-word">Ciebie.</span>
              </span>
            </LineReveal>
          </h2>
          <Reveal variant="up-sm" delay={320}>
            <p className="mt-6 max-w-[20rem] text-[13px] leading-6 text-muted lg:mt-8">
              Nie zaczynamy od trendów. Najpierw poznajemy Ciebie, Twoje włosy i efekt,
              którego naprawdę potrzebujesz.
            </p>
          </Reveal>
        </div>

        <div className="min-w-0 lg:pt-1">
          {approachSteps.map((step, i) => (
            <Reveal
              key={step.n}
              variant="up-sm"
              delay={100 + i * 150}
              className="approach-step"
              amount={0.35}
            >
              <div className="flex gap-4 py-5 sm:gap-9 sm:py-8 lg:py-9">
                <span
                  className="approach-num font-display text-[clamp(2rem,3.2vw,3rem)] leading-none tracking-tight text-ink/20"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <div className="approach-copy min-w-0 flex-1 pt-1">
                  <p className="text-[12px] tracking-[0.24em] uppercase">{step.title}</p>
                  <p className="mt-2.5 max-w-[22rem] text-[13px] leading-6 text-muted sm:mt-3.5">
                    {step.text}
                  </p>
                </div>
              </div>
              {i < approachSteps.length - 1 ? (
                <span className="approach-rule" aria-hidden="true" />
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
