"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { DeviceMockup } from "@/components/home/DeviceMockup";
import { SectionLabel } from "@/components/site/SectionLabel";
import { showcaseMockups } from "@/lib/mockups";

export function Showcase() {
  const { nova, cutline, masaz, budowlaniec } = showcaseMockups;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const copy = root.querySelector<HTMLElement>("[data-showcase-copy]");
    const desktopA = root.querySelector<HTMLElement>("[data-showcase-desktop-a]");
    const desktopB = root.querySelector<HTMLElement>("[data-showcase-desktop-b]");
    const tablet = root.querySelector<HTMLElement>("[data-showcase-tablet]");
    const phone = root.querySelector<HTMLElement>("[data-showcase-phone]");

    const screens = [desktopA, desktopB, tablet, phone].filter(
      (el): el is HTMLElement => Boolean(el),
    );

    if (!copy || !screens.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set([copy, ...screens], { opacity: 1, x: 0, y: 0, scale: 1 });
      return;
    }

    gsap.set(copy, { opacity: 0, y: 22 });
    // Start tucked toward the composition center — then slide out into place
    gsap.set(desktopA, { opacity: 0, x: 48, y: 28, scale: 0.92 });
    gsap.set(desktopB, { opacity: 0, x: -40, y: 36, scale: 0.9 });
    gsap.set(tablet, { opacity: 0, x: 24, y: 56, scale: 0.9 });
    gsap.set(phone, { opacity: 0, x: -18, y: 64, scale: 0.88 });

    let played = false;

    const play = () => {
      if (played) return;
      played = true;

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", force3D: true },
      });

      tl.to(copy, { opacity: 1, y: 0, duration: 0.8 });

      tl.to(
        desktopA,
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.95 },
        "+=0.12",
      );
      tl.to(
        desktopB,
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.95 },
        "-=0.72",
      );
      tl.to(
        tablet,
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.85 },
        "-=0.55",
      );
      tl.to(
        phone,
        { opacity: 1, x: 0, y: 0, scale: 1, duration: 0.85 },
        "-=0.62",
      );
    };

    const alreadyVisible =
      root.getBoundingClientRect().top < window.innerHeight * 0.88;

    if (alreadyVisible) {
      play();
      return () => {
        gsap.killTweensOf([copy, ...screens]);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(root);

    return () => {
      observer.disconnect();
      gsap.killTweensOf([copy, ...screens]);
    };
  }, []);

  return (
    <section
      ref={rootRef}
      id="o-mswa"
      className="site-pad scroll-mt-24 md:px-10 lg:px-16"
    >
      <div className="site-shell site-section-y border-t border-line pb-8 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <div
            data-showcase-copy
            className="lg:col-span-4 will-change-transform"
          >
            <SectionLabel>O MSWA</SectionLabel>
            <h2 className="mt-5 font-serif text-[clamp(1.9rem,5.2vw,2.55rem)] leading-[1.14] font-normal">
              Różne firmy.
              <br />
              Różny charakter.
              <br />
              Ta sama dbałość o szczegóły.
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
              Każdy projekt dopasowujemy indywidualnie — pod względem treści,
              struktury, stylu wizualnego i sposobu prezentacji.
            </p>
            <p className="mt-7 text-[9px] tracking-[0.2em] text-muted/55 uppercase sm:mt-8">
              Wybrane projekty
            </p>
          </div>

          <div className="lg:col-span-8">
            {/* Keep layered overlap on mobile — scaled desktop composition */}
            <div className="relative mx-auto h-[280px] w-full max-w-[400px] overflow-visible sm:h-[340px] sm:max-w-[520px] md:h-[400px] md:max-w-[780px] lg:mx-0 lg:h-[420px] lg:max-w-none">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-[4%_0_0_4%] bg-[radial-gradient(ellipse_at_48%_45%,rgba(198,179,148,0.07)_0%,transparent_70%)]"
              />

              <div
                data-showcase-desktop-a
                className="absolute top-[0%] left-[0%] z-[2] w-[58%] will-change-transform sm:w-[52%] md:w-[50%]"
              >
                <DeviceMockup
                  name={nova.name}
                  image={nova.image}
                  imageAlt={nova.imageAlt}
                  device="desktop"
                  sizes="(min-width: 1024px) 28vw, 58vw"
                  className="w-full"
                />
              </div>

              <div
                data-showcase-desktop-b
                className="absolute top-[10%] right-[0%] z-[1] w-[50%] rotate-[1.5deg] will-change-transform sm:right-[4%] sm:w-[44%] md:top-[8%] md:w-[42%]"
              >
                <DeviceMockup
                  name={cutline.name}
                  image={cutline.image}
                  imageAlt={cutline.imageAlt}
                  device="desktop"
                  sizes="(min-width: 1024px) 22vw, 50vw"
                  className="w-full"
                />
              </div>

              <div
                data-showcase-tablet
                className="absolute bottom-[0%] left-[6%] z-[3] w-[28%] rotate-[-2deg] will-change-transform sm:left-[10%] sm:w-[24%] md:w-[22%]"
              >
                <DeviceMockup
                  name={masaz.name}
                  image={masaz.image}
                  imageAlt={masaz.imageAlt}
                  device="tablet"
                  sizes="(min-width: 1024px) 11vw, 28vw"
                  className="w-full"
                />
              </div>

              <div
                data-showcase-phone
                className="absolute right-[6%] bottom-[0%] z-[4] w-[16%] rotate-[2.5deg] will-change-transform sm:right-[10%] sm:w-[13%] md:right-[12%] md:w-[12%]"
              >
                <DeviceMockup
                  name={budowlaniec.name}
                  image={budowlaniec.image}
                  imageAlt={budowlaniec.imageAlt}
                  device="mobile"
                  sizes="(min-width: 1024px) 6vw, 16vw"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
