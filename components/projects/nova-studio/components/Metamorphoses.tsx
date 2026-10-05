"use client";

import Image from "next/image";
import { Reveal } from "./Reveal";
import { ArrowLink, Label } from "./ui";
import { makeovers } from "../lib/site";

export function Metamorphoses() {
  return (
    <section
      id="metamorfozy"
      className="px-5 pb-6 pt-16 sm:px-8 lg:px-10 lg:pb-4 lg:pt-20 xl:px-12"
    >
      <div className="grid min-w-0 items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)_minmax(0,0.7fr)]">
        <div>
          <Reveal variant="left" delay={0}>
            <Label className="mb-5">Metamorfozy</Label>
          </Reveal>
          <Reveal variant="left" delay={90}>
            <h2 className="headline text-[clamp(2.4rem,5vw,4.2rem)]">
              Realne
              <br />
              <span className="italic-word">efekty.</span>
            </h2>
          </Reveal>
          <Reveal variant="up-sm" delay={180}>
            <p className="mt-6 max-w-[16rem] text-[12px] leading-5 tracking-[0.08em] uppercase text-muted">
              Zobacz, jak dobry kolor i cięcie mogą zmienić więcej niż tylko włosy.
            </p>
          </Reveal>
          <Reveal variant="up-sm" delay={260}>
            <ArrowLink href="#metamorfozy" className="mt-8 link-line btn-arrow">
              Zobacz więcej
            </ArrowLink>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {makeovers.map((pair, pairIndex) => (
            <div key={pair.before} className="grid grid-cols-2 gap-2">
              <Reveal variant="left" delay={120 + pairIndex * 140}>
                <figure>
                  <div className="group relative aspect-[3/4] overflow-hidden bg-cream-deep">
                    <Image
                      src={pair.before}
                      alt={pair.beforeAlt}
                      fill
                      className="img-zoom object-cover"
                      sizes="(max-width: 640px) 45vw, 18vw"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-[10px] tracking-[0.22em] uppercase text-muted">
                    Przed
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal variant="right" delay={200 + pairIndex * 140}>
                <figure>
                  <div className="group relative aspect-[3/4] overflow-hidden bg-cream-deep">
                    <Image
                      src={pair.after}
                      alt={pair.afterAlt}
                      fill
                      className="img-zoom object-cover"
                      sizes="(max-width: 640px) 45vw, 18vw"
                    />
                  </div>
                  <figcaption className="mt-2 text-center text-[10px] tracking-[0.22em] uppercase text-muted">
                    Po
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal variant="up-sm" delay={280}>
          <p className="font-script text-[1.65rem] leading-tight text-ink/80 lg:pt-16 lg:text-[1.9rem]">
            Tu sama Ty.
            <br />
            Tylko bardziej
          </p>
        </Reveal>
      </div>
    </section>
  );
}
