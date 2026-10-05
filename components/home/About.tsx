"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DeviceMockup } from "@/components/home/DeviceMockup";
import { SectionLabel } from "@/components/site/SectionLabel";
import { showcaseMockups } from "@/lib/mockups";

const values = [
  {
    title: "Dopasowane do firmy",
    text: "Każdy projekt dopasowujemy do charakteru, branży i potrzeb firmy.",
  },
  {
    title: "Bez zbędnej techniki",
    text: "Nie musisz znać się na stronach — od tego jesteśmy my.",
  },
  {
    title: "Bez znikania po publikacji",
    text: "Jeśli później potrzebujesz zmian lub dalszej opieki, możesz do nas wrócić.",
  },
] as const;

/** Simplified, template-like browser shells — no real site content */
function TemplateFrame({
  className = "",
  density = "sparse",
}: {
  className?: string;
  density?: "sparse" | "dense" | "list";
}) {
  return (
    <div
      className={`overflow-hidden rounded-[10px] border border-text/22 bg-soft/90 shadow-[0_12px_28px_-18px_rgba(0,0,0,0.75)] sm:rounded-[12px] ${className}`}
      aria-hidden
    >
      <div className="flex h-5 items-center gap-1 border-b border-text/14 bg-elevated px-2.5 sm:h-6">
        <span className="h-1.5 w-1.5 rounded-full bg-text/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-text/30" />
        <span className="h-1.5 w-1.5 rounded-full bg-text/30" />
        <span className="ml-2 h-px w-10 bg-text/20 sm:w-14" />
      </div>
      <div className="space-y-2 bg-elevated/80 p-3 sm:space-y-2.5 sm:p-3.5">
        <div className="h-2 w-[38%] rounded-sm bg-text/18" />
        <div className="h-1.5 w-[72%] rounded-sm bg-text/14" />
        <div className="h-1.5 w-[55%] rounded-sm bg-text/12" />
        {density === "list" ? (
          <div className="mt-2 space-y-1.5">
            <div className="h-2 w-full rounded-sm bg-text/[0.1] ring-1 ring-text/16" />
            <div className="h-2 w-[88%] rounded-sm bg-text/[0.1] ring-1 ring-text/16" />
            <div className="h-2 w-[92%] rounded-sm bg-text/[0.1] ring-1 ring-text/16" />
            <div className="h-2 w-[70%] rounded-sm bg-text/[0.1] ring-1 ring-text/16" />
          </div>
        ) : (
          <div
            className={`mt-2 grid gap-1.5 ${
              density === "dense" ? "grid-cols-3" : "grid-cols-2"
            }`}
          >
            <div className="aspect-[4/3] rounded-sm bg-text/[0.09] ring-1 ring-text/16" />
            <div className="aspect-[4/3] rounded-sm bg-text/[0.09] ring-1 ring-text/16" />
            {density === "dense" ? (
              <div className="aspect-[4/3] rounded-sm bg-text/[0.09] ring-1 ring-text/16" />
            ) : null}
          </div>
        )}
        <div className="mt-1 h-1 w-[48%] rounded-sm bg-text/12" />
      </div>
    </div>
  );
}

const templateTargets = [
  { opacity: 0.72 },
  { opacity: 0.78 },
  { opacity: 0.82 },
  { opacity: 0.74 },
  { opacity: 0.68 },
  { opacity: 0.76 },
  { opacity: 0.7 },
] as const;

export function About() {
  const rootRef = useRef<HTMLElement>(null);
  const mockup = showcaseMockups.cutline;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const copy = root.querySelector<HTMLElement>("[data-about-copy]");
    const visual = root.querySelector<HTMLElement>("[data-about-visual]");
    const templates = Array.from(
      root.querySelectorAll<HTMLElement>("[data-about-template]"),
    );
    const main = root.querySelector<HTMLElement>("[data-about-main]");
    const valuesEl = root.querySelectorAll<HTMLElement>("[data-about-value]");
    const bridge = root.querySelector<HTMLElement>("[data-about-bridge]");
    const animated = [copy, visual, ...templates, main, ...valuesEl, bridge].filter(
      Boolean,
    );

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(animated, { opacity: 1, x: 0, y: 0 });
      return;
    }

    if (copy) gsap.set(copy, { opacity: 0, y: 20 });
    if (visual) gsap.set(visual, { opacity: 0 });
    templates.forEach((layer, i) => {
      gsap.set(layer, {
        opacity: 0,
        x: i % 2 === 0 ? -12 : 12,
        y: 10 + (i % 3) * 4,
      });
    });
    if (main) gsap.set(main, { opacity: 0, x: 16, y: 14 });
    gsap.set(valuesEl, { opacity: 0, y: 16 });
    if (bridge) gsap.set(bridge, { opacity: 0 });

    let played = false;

    const play = () => {
      if (played) return;
      played = true;

      const mobileVisual = window.matchMedia("(max-width: 767px)").matches;
      // Mobile: lift template visibility ~25% so the composition reads clearer
      // without competing with the headline. Desktop targets unchanged.
      const templateOpacity = (base: number) =>
        Math.min(1, base * (mobileVisual ? 1.28 : 1));

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", force3D: true },
      });

      if (copy) tl.to(copy, { opacity: 1, y: 0, duration: 0.75 });
      if (visual) tl.to(visual, { opacity: 1, duration: 0.4 }, "-=0.35");

      templates.forEach((layer, i) => {
        tl.to(
          layer,
          {
            opacity: templateOpacity(templateTargets[i]?.opacity ?? 0.4),
            x: 0,
            y: 0,
            duration: 0.75,
          },
          i === 0 ? "-=0.1" : "<0.08",
        );
      });

      if (main) {
        tl.to(main, { opacity: 1, x: 0, y: 0, duration: 0.9 }, "-=0.45");
      }

      if (bridge) tl.to(bridge, { opacity: 1, duration: 0.6 }, "-=0.2");
      tl.to(
        valuesEl,
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
        "-=0.25",
      );
    };

    const alreadyVisible =
      root.getBoundingClientRect().top < window.innerHeight * 0.88;

    if (alreadyVisible) {
      play();
      return () => {
        gsap.killTweensOf(animated);
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
      gsap.killTweensOf(animated);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="o-mswa"
      className="site-pad scroll-mt-24 md:px-10 lg:px-16"
    >
      <div className="site-shell site-section-y border-t border-line md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div
            data-about-copy
            className="lg:col-span-6 xl:col-span-5 will-change-transform"
          >
            <SectionLabel>MSWA</SectionLabel>
            <h2 className="mt-5 max-w-xl font-serif text-[clamp(2.05rem,5.5vw,3.15rem)] leading-[1.12] font-normal">
              Dobra strona powinna wyglądać jak Twoja firma.
              <br />
              I działać tak, jak tego potrzebujesz.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6">
              Najpierw poznajemy Twoją firmę, jej klientów i cel strony.
              Następnie dopasowujemy układ, treści i kierunek wizualny tak,
              żeby strona pasowała do charakteru biznesu i faktycznie spełniała
              swoją rolę.
            </p>
          </div>

          <div
            data-about-visual
            className="relative mx-auto h-[220px] w-full max-w-[340px] sm:h-[250px] sm:max-w-[380px] md:h-[260px] lg:col-span-6 lg:mr-28 lg:ml-auto lg:h-[270px] lg:max-w-[420px] xl:col-span-7 xl:max-w-[460px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[8%_0_0_12%] bg-[radial-gradient(ellipse_at_58%_45%,rgba(198,179,148,0.05)_0%,transparent_68%)]"
            />

            {/* Generic template shells around CUTLINE */}
            <div
              data-about-template
              className="absolute top-[2%] left-[8%] z-[1] w-[34%] -rotate-[8deg] will-change-transform sm:w-[32%]"
            >
              <TemplateFrame density="dense" />
            </div>
            <div
              data-about-template
              className="absolute top-[4%] right-[4%] z-[1] w-[32%] rotate-[7deg] will-change-transform sm:w-[30%]"
            >
              <TemplateFrame density="sparse" />
            </div>
            <div
              data-about-template
              className="absolute top-[28%] left-[6%] z-[2] w-[28%] -rotate-[3deg] will-change-transform sm:w-[26%]"
            >
              <TemplateFrame density="list" />
            </div>
            <div
              data-about-template
              className="absolute right-[2%] bottom-[18%] z-[2] w-[27%] rotate-[4deg] will-change-transform sm:w-[25%]"
            >
              <TemplateFrame density="dense" />
            </div>
            <div
              data-about-template
              className="absolute bottom-[2%] left-[16%] z-[1] w-[30%] rotate-[-5deg] will-change-transform sm:w-[28%]"
            >
              <TemplateFrame density="sparse" />
            </div>
            <div
              data-about-template
              className="absolute top-[18%] right-[10%] z-[1] w-[26%] rotate-[9deg] will-change-transform sm:w-[24%]"
            >
              <TemplateFrame density="list" />
            </div>
            {/* Moved from left of mockup → right of mockup */}
            <div
              data-about-template
              className="absolute top-[42%] right-[-2%] z-[1] w-[25%] rotate-[11deg] will-change-transform sm:right-[0%] sm:w-[23%]"
            >
              <TemplateFrame density="dense" />
            </div>

            {/* Front — CUTLINE */}
            <div
              data-about-main
              className="absolute top-[14%] right-[10%] z-[4] w-[60%] will-change-transform sm:right-[12%] sm:w-[56%] md:w-[54%]"
            >
              <DeviceMockup
                name={mockup.name}
                image={mockup.image}
                imageAlt={mockup.imageAlt}
                device="desktop"
                sizes="(min-width: 1024px) 28vw, 60vw"
                className="w-full"
                shellClassName="shadow-[0_24px_50px_-28px_rgba(0,0,0,0.85)]"
              />
            </div>
          </div>
        </div>

        {/* Subtle bridge from the visual story into the three values */}
        <div
          data-about-bridge
          className="relative mt-12 md:mt-16"
          aria-hidden
        >
          <div className="h-px w-full bg-line" />
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden md:grid md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="relative">
                <span className="absolute top-0 left-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent/45" />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value.title}
              data-about-value
              className={`relative border-b border-line py-8 will-change-transform md:border-b-0 md:py-10 ${
                index < values.length - 1 ? "md:pr-8 lg:pr-10" : ""
              } ${index > 0 ? "md:pl-8 lg:pl-10" : ""}`}
            >
              {index < values.length - 1 ? (
                <div
                  className="pointer-events-none absolute top-8 right-0 bottom-8 hidden w-px bg-line md:block"
                  aria-hidden
                />
              ) : null}
              <h3 className="text-[12px] tracking-[0.2em] uppercase">
                {value.title}
              </h3>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-muted">
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
