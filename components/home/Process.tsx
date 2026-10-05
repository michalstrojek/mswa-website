"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";

const stages = [
  {
    n: "01",
    title: "Poznajemy Twoją firmę",
    text: "Krótko rozmawiamy o działalności, klientach, ofercie i tym, jaki efekt chcesz osiągnąć.",
  },
  {
    n: "02",
    title: "Tworzymy kierunek",
    text: "Na podstawie rozmowy przygotowujemy koncepcję strony i jej charakter wizualny.",
  },
  {
    n: "03",
    title: "Budujemy i dopracowujemy",
    text: "Powstaje strona, dostajesz ją do wglądu i nanosimy ustalone poprawki.",
  },
  {
    n: "04",
    title: "Uruchamiamy",
    text: "Podpinamy domenę, publikujemy stronę i wszystko jest gotowe do działania.",
  },
] as const;

export function Process() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const line = root.querySelector<HTMLElement>("[data-process-line]");
    const vline = root.querySelector<HTMLElement>("[data-process-vline]");
    const steps = Array.from(
      root.querySelectorAll<HTMLElement>("[data-process-step]"),
    );
    const dots = Array.from(
      root.querySelectorAll<HTMLElement>("[data-process-dot]"),
    );

    if (!steps.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const desktop = window.matchMedia("(min-width: 768px)").matches;

    if (reduced) {
      gsap.set(steps, { opacity: 1, y: 0 });
      gsap.set(dots, { scale: 1, opacity: 1 });
      if (line) gsap.set(line, { scaleX: 1 });
      if (vline) gsap.set(vline, { scaleY: 1 });
      return;
    }

    gsap.set(steps[0], { opacity: 1, y: 0 });
    gsap.set(dots[0], { scale: 1, opacity: 1 });
    gsap.set(steps.slice(1), { opacity: 0, y: 18 });
    gsap.set(dots.slice(1), { scale: 0, opacity: 0 });
    if (line) gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
    if (vline) gsap.set(vline, { scaleY: 0, transformOrigin: "top center" });

    let played = false;

    const revealStep = (index: number) => {
      const step = steps[index];
      const dot = dots[index];
      if (!step) return;

      gsap.to(step, {
        opacity: 1,
        y: 0,
        duration: 0.65,
        ease: "power3.out",
        force3D: true,
      });
      if (dot) {
        gsap.to(dot, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const playDesktop = () => {
      if (!line || steps.length < 2) return;

      const track = line.parentElement;
      if (!track) return;

      const trackRect = track.getBoundingClientRect();
      const progressAt = dots.map((dot) => {
        const rect = dot.getBoundingClientRect();
        const center = rect.left + rect.width / 2 - trackRect.left;
        return Math.min(1, Math.max(0, center / trackRect.width));
      });

      const start = progressAt[0] ?? 0;
      gsap.set(line, { scaleX: start });

      const segmentDuration = 0.65;
      const pause = 0.2;
      const tl = gsap.timeline();

      for (let i = 1; i < steps.length; i++) {
        const target = progressAt[i] ?? i / (steps.length - 1);

        tl.to(line, {
          scaleX: target,
          duration: segmentDuration,
          ease: "power2.inOut",
        });
        tl.add(() => revealStep(i));
        tl.to({}, { duration: pause });
      }

      const last = progressAt[progressAt.length - 1] ?? 1;
      if (last < 0.98) {
        tl.to(line, {
          scaleX: 1,
          duration: 0.45,
          ease: "power2.out",
        });
      }
    };

    const playMobile = () => {
      if (!vline) {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        steps.slice(1).forEach((_, i) => {
          tl.add(() => revealStep(i + 1), i === 0 ? "+=0.25" : "+=0.2");
          tl.to({}, { duration: 0.2 });
        });
        return;
      }

      const segment = 0.55;
      const pause = 0.2;
      const tl = gsap.timeline();

      // Vertical line grows with each step reveal
      for (let i = 1; i < steps.length; i++) {
        const progress = i / (steps.length - 1);
        tl.to(vline, {
          scaleY: progress,
          duration: segment,
          ease: "power2.inOut",
        });
        tl.add(() => revealStep(i));
        tl.to({}, { duration: pause });
      }
      tl.to(vline, { scaleY: 1, duration: 0.35, ease: "power2.out" });
    };

    const play = () => {
      if (played) return;
      played = true;
      if (desktop && line) playDesktop();
      else playMobile();
    };

    const alreadyVisible =
      root.getBoundingClientRect().top < window.innerHeight * 0.85;

    if (alreadyVisible) {
      play();
      return () => {
        gsap.killTweensOf([line, vline, ...steps, ...dots].filter(Boolean));
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        observer.disconnect();
      },
      { threshold: 0.28, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      gsap.killTweensOf([line, vline, ...steps, ...dots].filter(Boolean));
    };
  }, []);

  return (
    <section id="proces" className="site-pad scroll-mt-24 md:px-10 lg:px-16">
      <div className="site-shell site-section-y border-t border-line md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <Reveal>
          <SectionLabel>Prosty proces</SectionLabel>
          <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.05rem,5.5vw,3.15rem)] leading-[1.12] font-normal">
            Od pierwszej rozmowy
            <br />
            do gotowej strony.
          </h2>
        </Reveal>

        <div ref={rootRef} className="relative mt-12 md:mt-20">
          {/* Desktop horizontal track */}
          <div
            className="pointer-events-none absolute top-[1.15rem] right-0 left-0 hidden h-px bg-line md:block"
            aria-hidden
          />
          <div
            data-process-line
            className="pointer-events-none absolute top-[1.15rem] left-0 hidden h-px w-full origin-left bg-accent md:block"
            style={{ transform: "scaleX(0)" }}
            aria-hidden
          />

          {/* Mobile vertical timeline rail */}
          <div
            className="pointer-events-none absolute top-3 bottom-3 left-[0.35rem] w-px bg-line md:hidden"
            aria-hidden
          />
          <div
            data-process-vline
            className="pointer-events-none absolute top-3 bottom-3 left-[0.35rem] w-px origin-top bg-accent md:hidden"
            style={{ transform: "scaleY(0)" }}
            aria-hidden
          />

          <ol className="relative grid gap-0 md:grid-cols-4 md:gap-6">
            {stages.map((stage, index) => (
              <li
                key={stage.n}
                data-process-step
                className="relative border-0 py-6 pl-8 will-change-transform md:border-t-0 md:py-0 md:pt-10 md:pl-0 md:pb-0"
                style={index === 0 ? undefined : { opacity: 0 }}
              >
                <span className="absolute top-8 left-0 flex h-2 w-2 -translate-x-[1px] items-center justify-center md:top-[0.85rem] md:left-0 md:translate-x-0">
                  <span
                    data-process-dot
                    className="block h-2 w-2 rounded-full bg-accent"
                    style={
                      index === 0
                        ? undefined
                        : { transform: "scale(0)", opacity: 0 }
                    }
                  />
                </span>
                <p className="font-serif text-[2.1rem] leading-none text-accent/90 md:text-[2.4rem]">
                  {stage.n}
                </p>
                <h3 className="mt-3 text-[12px] tracking-[0.2em] uppercase md:mt-4">
                  {stage.title}
                </h3>
                <p className="mt-2.5 max-w-xs text-[15px] leading-relaxed text-muted md:mt-3">
                  {stage.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay="200ms">
          <p className="mt-12 max-w-xl border-l border-accent/50 pl-4 text-[14px] leading-relaxed text-muted md:mt-16">
            Ty dajesz nam wiedzę o swojej firmie. Techniczną stroną całego
            procesu zajmujemy się my.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
