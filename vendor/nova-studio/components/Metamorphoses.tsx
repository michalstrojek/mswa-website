"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, Label } from "@/components/ui";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { makeovers } from "@/lib/site";

function MakeoverPair({
  pair,
  pairIndex,
}: {
  pair: (typeof makeovers)[number];
  pairIndex: number;
}) {
  const reduced = usePrefersReducedMotion();
  const afterRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(reduced ? 1 : 0);
  const locked = useRef(false);

  useEffect(() => {
    if (reduced) {
      setProgress(1);
      return;
    }

    const el = afterRef.current;
    if (!el) return;

    const onScroll = () => {
      if (locked.current && window.innerWidth >= 1024) return;

      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight || 1;

      if (window.innerWidth < 1024) {
        // Mobile: one-shot near viewport
        if (rect.top < viewH * 0.85) {
          setProgress(1);
          locked.current = true;
        }
        return;
      }

      const raw = (viewH * 0.78 - rect.top) / (viewH * 0.42);
      const next = Math.min(1, Math.max(0, raw));
      setProgress(next);
      if (next >= 0.98) locked.current = true;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  const base = 80 + pairIndex * 120;
  const opened = progress >= 0.92;
  const clipRight = Math.max(0, (1 - progress) * 100);

  return (
    <div
      className="grid grid-cols-2 gap-2.5 min-[350px]:gap-3 sm:gap-3.5"
      data-cursor="ZOBACZ"
    >
      <Reveal variant="clip-y" delay={base} duration={950}>
        <figure>
          <div className="group relative aspect-[3/4] overflow-hidden bg-cream-deep">
            <Image
              src={pair.before}
              alt={pair.beforeAlt}
              fill
              className="reveal-media img-zoom object-cover object-[50%_22%] saturate-[0.88] contrast-[0.96] brightness-[0.97]"
              sizes="(max-width: 640px) 45vw, 18vw"
            />
          </div>
          <figcaption className="mt-2.5 text-center text-[10px] tracking-[0.26em] uppercase text-muted/80">
            Przed
          </figcaption>
        </figure>
      </Reveal>

      <figure>
        <div
          ref={afterRef}
          className="group relative aspect-[3/4] overflow-hidden bg-cream-deep"
          style={{
            clipPath: reduced ? undefined : `inset(0 ${clipRight.toFixed(2)}% 0 0)`,
            transition: locked.current || opened
              ? "clip-path 0.45s cubic-bezier(0.22, 1, 0.36, 1)"
              : undefined,
            willChange: reduced ? undefined : "clip-path",
          }}
        >
          <Image
            src={pair.after}
            alt={pair.afterAlt}
            fill
            className="img-zoom object-cover object-[50%_18%] contrast-[1.03] saturate-[0.96]"
            sizes="(max-width: 640px) 45vw, 18vw"
          />
        </div>
        <figcaption
          className={`mt-2.5 text-center text-[10px] font-medium tracking-[0.26em] uppercase text-ink/70 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            progress > 0.55 ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
        >
          Po
        </figcaption>
      </figure>
    </div>
  );
}

export function Metamorphoses() {
  return (
    <section
      id="metamorfozy"
      className="px-5 pb-5 pt-10 sm:px-8 sm:pt-12 lg:px-10 lg:pb-4 lg:pt-14 xl:px-12"
    >
      <div className="grid min-w-0 items-start gap-9 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.55fr)_minmax(0,0.7fr)] lg:gap-10">
        <div>
          <Reveal variant="up-sm" delay={0}>
            <Label className="mb-5">Metamorfozy</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.4rem,5vw,4.2rem)]">
            <LineReveal delay={80}>
              <span className="block">Realne</span>
            </LineReveal>
            <LineReveal delay={180} duration={1050}>
              <span className="italic-word block">efekty.</span>
            </LineReveal>
          </h2>
          <Reveal variant="up-sm" delay={280}>
            <p className="mt-6 max-w-[16rem] text-[12px] leading-5 tracking-[0.08em] uppercase text-muted">
              Zobacz, jak dobry kolor i cięcie mogą zmienić więcej niż tylko włosy.
            </p>
          </Reveal>
          <Reveal variant="up-sm" delay={360}>
            <ArrowLink href="#metamorfozy" className="mt-8 link-line btn-arrow">
              Zobacz więcej
            </ArrowLink>
          </Reveal>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 sm:gap-9">
          {makeovers.map((pair, pairIndex) => (
            <MakeoverPair key={pair.before} pair={pair} pairIndex={pairIndex} />
          ))}
        </div>

        <Reveal variant="up-sm" delay={320}>
          <p className="font-script text-[1.65rem] leading-tight text-ink/80 lg:pt-12 lg:text-[1.9rem]">
            Tu sama Ty.
            <br />
            Tylko bardziej
          </p>
        </Reveal>
      </div>
    </section>
  );
}
