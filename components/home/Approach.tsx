"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SectionLabel } from "@/components/site/SectionLabel";

const points = [
  {
    n: "01",
    title: "Marka",
    text: "Kolory, typografia i styl dopasowane do tego, jak chcesz być odbierany.",
  },
  {
    n: "02",
    title: "Charakter",
    text: "Elegancki, nowoczesny, surowy, minimalistyczny czy bardziej odważny — strona ma oddawać klimat Twojej firmy.",
  },
  {
    n: "03",
    title: "Cel",
    text: "Projektujemy układ pod to, czego potrzebuje Twój biznes — kontakt, rezerwacje, prezentację usług, portfolio czy pozyskiwanie zapytań.",
  },
] as const;

export function Approach() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const copy = root.querySelector<HTMLElement>("[data-approach-copy]");
    const items = Array.from(
      root.querySelectorAll<HTMLElement>("[data-approach-item]"),
    );
    const lines = Array.from(
      root.querySelectorAll<HTMLElement>("[data-approach-line]"),
    );

    if (!copy || !items.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set([copy, ...items], { opacity: 1, y: 0 });
      gsap.set(lines, { scaleX: 1 });
      return;
    }

    gsap.set(copy, { opacity: 0, y: 24 });
    gsap.set(items, { opacity: 0, y: 22 });
    gsap.set(lines, { scaleX: 0, transformOrigin: "left center" });

    let played = false;

    const play = () => {
      if (played) return;
      played = true;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", force3D: true },
      });

      tl.to(copy, { opacity: 1, y: 0, duration: 0.85 });

      items.forEach((item, index) => {
        const line = lines[index];
        const at = index === 0 ? "-=0.4" : "+=0.3";

        tl.to(item, { opacity: 1, y: 0, duration: 0.75 }, at);
        if (line) {
          tl.to(line, { scaleX: 1, duration: 0.7, ease: "power2.out" }, "<");
        }
      });
    };

    const alreadyVisible =
      root.getBoundingClientRect().top < window.innerHeight * 0.88;

    if (alreadyVisible) {
      play();
      return () => {
        gsap.killTweensOf([copy, ...items, ...lines]);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        observer.disconnect();
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      gsap.killTweensOf([copy, ...items, ...lines]);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="podejscie"
      className="site-pad scroll-mt-24 md:px-10 lg:px-16"
    >
      <div className="site-shell site-section-y border-t border-line md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div data-approach-copy className="lg:col-span-5 will-change-transform">
            <SectionLabel>Indywidualne podejście</SectionLabel>
            <h2 className="mt-5 font-serif text-[clamp(2.05rem,5.5vw,3.15rem)] leading-[1.12] font-normal">
              Nie dopasowujemy firmy do strony.
              <br />
              Dopasowujemy stronę do firmy.
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:mt-6">
              Każda firma ma własny charakter, klientów i sposób działania.
              Najpierw poznajemy Twój biznes, a następnie dopasowujemy układ,
              treści i kierunek wizualny tak, żeby strona naprawdę do niego
              pasowała.
            </p>
          </div>

          <div className="lg:col-span-7 lg:pt-10">
            <div className="border-y border-line">
              {points.map((point) => (
                <div
                  key={point.n}
                  data-approach-item
                  className="relative grid grid-cols-[3.75rem_1fr] gap-4 border-b border-line py-7 last:border-b-0 sm:grid-cols-[4.5rem_1fr] sm:gap-8 md:py-8 will-change-transform"
                >
                  <div
                    data-approach-line
                    className="pointer-events-none absolute top-0 right-0 left-0 h-px bg-line"
                    aria-hidden
                  />
                  <p className="font-serif text-[2.05rem] leading-none text-accent/90 md:text-[2.35rem]">
                    {point.n}
                  </p>
                  <div>
                    <h3 className="text-[12px] tracking-[0.2em] uppercase">
                      {point.title}
                    </h3>
                    <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted">
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
