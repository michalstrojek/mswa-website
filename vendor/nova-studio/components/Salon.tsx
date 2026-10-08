"use client";

import Image from "next/image";
import { withBase } from "@/lib/asset";
import { useEffect, useRef } from "react";
import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { ArrowLink, Label } from "@/components/ui";
import { useInView } from "@/hooks/useInView";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export function Salon() {
  const reduced = usePrefersReducedMotion();
  const [sectionRef, visible] = useInView<HTMLElement>({ amount: 0.18 });
  const imageRef = useRef<HTMLDivElement>(null);
  const insetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    const onScroll = () => {
      const main = imageRef.current;
      const inset = insetRef.current;
      if (!main || window.innerWidth < 1024) {
        if (main) main.style.transform = "";
        if (inset) inset.style.transform = "";
        return;
      }

      const rect = main.getBoundingClientRect();
      const viewH = window.innerHeight || 1;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const clamped = Math.min(1, Math.max(0, progress));
      const mainOffset = (clamped - 0.5) * 36;
      const insetOffset = (clamped - 0.5) * -24;
      const zoom = 1 + clamped * 0.04;
      main.style.transform = `translate3d(0, ${mainOffset.toFixed(1)}px, 0) scale(${zoom.toFixed(4)})`;
      if (inset) {
        inset.style.transform = `translate3d(0, ${insetOffset.toFixed(1)}px, 0)`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced]);

  return (
    <section id="salon" ref={sectionRef} className="overflow-x-clip">
      <div className="px-5 pb-8 pt-2 sm:px-8 sm:pb-10 lg:px-10 lg:pb-14 lg:pt-0 xl:px-12">
        <div className="grid min-w-0 items-end gap-6 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,1.48fr)] lg:gap-7 xl:gap-9">
          <div className="min-w-0 self-center py-1 lg:py-4 lg:pr-2">
            <Reveal show={visible} variant="up-sm" delay={80}>
              <Label className="mb-5">Nasz salon</Label>
            </Reveal>
            <h2 className="headline text-[clamp(2.1rem,4vw,3.5rem)]">
              <LineReveal show={visible} delay={140}>
                <span className="block">Przestrzeń</span>
              </LineReveal>
              <LineReveal show={visible} delay={240} duration={1050}>
                <span className="block">
                  dla <span className="italic-word">ciebie.</span>
                </span>
              </LineReveal>
            </h2>
            <Reveal show={visible} variant="up-sm" delay={340}>
              <p className="mt-5 max-w-[18rem] text-[13px] leading-6 text-muted lg:mt-6">
                Nowoczesny salon, w którym styl spotyka się z komfortem. Dużo światła,
                świetna atmosfera i zespół, który naprawdę słucha.
              </p>
            </Reveal>
            <Reveal show={visible} variant="up-sm" delay={420}>
              <ArrowLink href="#salon" className="mt-6 link-line btn-arrow lg:mt-8">
                Zobacz nasz salon
              </ArrowLink>
            </Reveal>
          </div>

          <div className="relative min-w-0 pb-8 sm:pb-4 lg:pb-0">
            <div
              data-cursor="→"
              className={`relative min-h-[240px] overflow-hidden sm:min-h-[360px] lg:aspect-[16/9] lg:min-h-0 reveal reveal-clip-y${visible ? " is-visible" : ""}`}
              style={{ transitionDuration: "1.05s" }}
            >
              <div
                ref={imageRef}
                className="absolute inset-[-10%] origin-center will-change-transform"
              >
                <Image
                  src={withBase("/images/salon-1.jpg")}
                  alt="Wnętrze salonu NOVA STUDIO"
                  fill
                  className="object-cover object-[50%_45%]"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
              </div>

              <div
                ref={insetRef}
                className={`absolute z-10 w-[42%] max-w-[9.5rem] right-2.5 bottom-2.5 will-change-transform sm:right-5 sm:bottom-4 sm:w-[28%] sm:max-w-[11.5rem] lg:right-6 lg:bottom-5 lg:w-[24%] lg:max-w-[12.25rem] xl:right-7 xl:bottom-6 xl:max-w-[13rem] reveal reveal-up-sm${visible ? " is-visible" : ""}`}
                style={{ transitionDelay: "280ms", transitionDuration: "0.95s" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-ink text-cream ring-1 ring-cream/25 shadow-[0_18px_40px_rgba(17,17,17,0.28)]">
                  <Image
                    src={withBase("/images/salon-3.jpg")}
                    alt="Strefa mycia włosów"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40vw, 14vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  <p className="absolute bottom-3 left-2.5 right-2.5 font-display text-[0.78rem] leading-[0.95] tracking-wide uppercase sm:bottom-5 sm:left-4 sm:right-4 sm:text-[1.05rem] lg:text-[1.1rem]">
                    Więcej
                    <br />
                    niż salon.
                    <br />
                    To ludzie.
                    <br />
                    Atmosfera.
                    <br />i dobra
                    <br />
                    energia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
