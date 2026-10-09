"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/site/Button";
import { DeviceMockup } from "@/components/home/DeviceMockup";
import { SectionLabel } from "@/components/site/SectionLabel";
import { heroMockups } from "@/lib/mockups";

/**
 * Desktop geometric fan — unchanged poses.
 * Rotations: -18° · -9° · 0° · +9° · +18°
 */
const fanCards = [
  { mockup: heroMockups.atelier, rotate: -18, zIndex: 1, scale: 1 },
  { mockup: heroMockups.lucente, rotate: -9, zIndex: 2, scale: 1 },
  {
    mockup: heroMockups.solea,
    rotate: 0,
    zIndex: 5,
    scale: 1.04,
    priority: true,
  },
  { mockup: heroMockups.velora, rotate: 9, zIndex: 3, scale: 1 },
  { mockup: heroMockups.detailer, rotate: 18, zIndex: 2, scale: 1 },
] as const;

/**
 * Mobile radial card fan — GSAP-driven poses from a shared bottom pivot.
 * x/y are % of each card’s own size; xPercent includes −50 for centering.
 */
const mobileFanCards = [
  {
    mockup: heroMockups.atelier,
    zIndex: 1,
    width: "50%",
    x: -36,
    y: 14,
    rotate: -16,
  },
  {
    mockup: heroMockups.lucente,
    zIndex: 2,
    width: "52%",
    x: -22,
    y: 7,
    rotate: -8,
  },
  {
    mockup: heroMockups.solea,
    zIndex: 5,
    width: "59%",
    x: 0,
    y: 0,
    rotate: 0,
  },
  {
    mockup: heroMockups.velora,
    zIndex: 3,
    width: "52%",
    x: 22,
    y: 7,
    rotate: 8,
  },
  {
    mockup: heroMockups.detailer,
    zIndex: 2,
    width: "50%",
    x: 36,
    y: 14,
    rotate: 16,
  },
] as const;

const mobilePoseById = Object.fromEntries(
  mobileFanCards.map((c) => [
    c.mockup.id,
    {
      // −50 centers on left:50%; then fan offset
      xPercent: -50 + c.x,
      yPercent: c.y,
      rotate: c.rotate,
    },
  ]),
);

export function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const q = <T extends HTMLElement>(sel: string) =>
      root.querySelector<T>(sel);
    const qa = <T extends HTMLElement>(sel: string) =>
      root.querySelectorAll<T>(sel);

    const eyebrow = q("[data-hero-eyebrow]");
    const lines = qa("[data-hero-line]");
    const lead = q("[data-hero-lead]");
    const cta = q("[data-hero-cta]");
    const link = q("[data-hero-link]");
    const meta = q("[data-hero-meta]");
    const cards = qa("[data-fan-card]");
    const mobileCards = qa("[data-mobile-fan-card]");
    const layers = qa("[data-fan-layer]");
    const tablet = q("[data-hero-tablet]");
    const phone = q("[data-hero-phone]");
    const fanStage = q("[data-hero-fan]");
    const devices = q("[data-hero-devices]");
    const mobileFan = q("[data-mobile-fan]");

    const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

    const desktopPose = (card: HTMLElement) => ({
      rotate: Number(card.dataset.rotate ?? 0),
      scale: Number(card.dataset.scale ?? 1),
      x: 0,
      y: 0,
    });

    const mobilePose = (card: HTMLElement) => {
      const id = card.dataset.mobileFanId ?? "";
      return (
        mobilePoseById[id] ?? { xPercent: -50, yPercent: 0, rotate: 0 }
      );
    };

    const setFinalFan = () => {
      cards.forEach((card) => {
        const { rotate, scale, x, y } = desktopPose(card);
        gsap.set(card, {
          opacity: 1,
          rotate,
          scale,
          x,
          y,
          transformOrigin: "50% 100%",
        });
      });
      mobileCards.forEach((card) => {
        gsap.set(card, {
          opacity: 1,
          ...mobilePose(card),
          scale: 1,
          transformOrigin: "50% 100%",
        });
      });
    };

    if (reduced) {
      gsap.set(
        [eyebrow, ...Array.from(lines), lead, cta, link, meta, tablet, phone]
          .filter(Boolean),
        { opacity: 1, y: 0, filter: "none", scale: 1 },
      );
      setFinalFan();
      return;
    }

    const MOCKUP_DELAY_MS = 450;
    // Permanent: five-card fan starts 500ms later than the original timeline
    // positions. Tablet/phone entrance timing unchanged.
    const FAN_DELAY_S = 0.5;

    let cancelled = false;
    let startTimer = 0;
    let introTimer = 0;

    const ctx = gsap.context(() => {
      gsap.set(eyebrow, { opacity: 0, y: 12 });
      gsap.set(lines, { opacity: 0, y: 30, filter: "blur(6px)" });
      gsap.set([lead, cta, link, meta], { opacity: 0, y: 22 });

      gsap.set(cards, {
        opacity: 0,
        rotate: 0,
        scale: 0.9,
        x: 0,
        y: 16,
        transformOrigin: "50% 100%",
        force3D: true,
      });
      // Mobile: closed stack — will fan open in playMockups.
      gsap.set(mobileCards, {
        opacity: 0,
        xPercent: -50,
        yPercent: 16,
        rotate: 0,
        scale: 0.86,
        transformOrigin: "50% 100%",
        force3D: true,
      });
      gsap.set([tablet, phone].filter(Boolean), {
        opacity: 0,
        y: 28,
        scale: 0.94,
        force3D: true,
      });

      const copyTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.25,
      });
      copyTl.to(eyebrow, { opacity: 1, y: 0, duration: 0.55 }, 0);
      copyTl.to(
        lines,
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.14 },
        0.14,
      );
      copyTl.to(lead, { opacity: 1, y: 0, duration: 0.65 }, 0.64);
      copyTl.to(cta, { opacity: 1, y: 0, duration: 0.6 }, 0.8);
      copyTl.to(link, { opacity: 1, y: 0, duration: 0.55 }, 0.9);
      copyTl.to(meta, { opacity: 1, y: 0, duration: 0.55 }, 1.02);

      const byId = (id: string) => q(`[data-fan-id="${id}"]`);
      const solea = byId("solea");
      const lucente = byId("lucente");
      const velora = byId("velora");
      const atelier = byId("atelier");
      const detailer = byId("detailer");

      const warmFanImages = () => {
        const imgs = Array.from(
          root.querySelectorAll<HTMLImageElement>(
            isMobile()
              ? "[data-mobile-fan] img"
              : "[data-hero-fan] img",
          ),
        );
        const decoded = Promise.all(
          imgs.map((img) => {
            if (img.complete && img.naturalWidth > 0) return Promise.resolve();
            return (img.decode?.() ?? Promise.resolve()).catch(() => undefined);
          }),
        );
        // Never block the intro forever if decode stalls.
        return Promise.race([
          decoded,
          new Promise<void>((resolve) => {
            window.setTimeout(resolve, 1200);
          }),
        ]);
      };

      const playMockups = async () => {
        if (cancelled) return;

        await warmFanImages();
        if (cancelled) return;

        await new Promise<void>((resolve) => {
          requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
        });
        if (cancelled) return;

        const tl = gsap.timeline({
          defaults: { ease: "power3.out", force3D: true },
        });
        // Offset only fan-card start times; tablet/phone keep original positions.
        const fanAt = (t: number) => t + FAN_DELAY_S;

        if (isMobile()) {
          const order: { id: string; duration: number; at: number }[] = [
            { id: "solea", duration: 1.05, at: 0 },
            { id: "lucente", duration: 1.15, at: 0.1 },
            { id: "velora", duration: 1.15, at: 0.1 },
            { id: "atelier", duration: 1.25, at: 0.2 },
            { id: "detailer", duration: 1.25, at: 0.2 },
          ];

          order.forEach(({ id, duration, at }) => {
            const el = q(`[data-mobile-fan-id="${id}"]`);
            if (!el) return;
            // Re-assert closed stack right before tween (survives HMR / strict remount).
            gsap.set(el, {
              opacity: 0,
              xPercent: -50,
              yPercent: 16,
              rotate: 0,
              scale: 0.86,
              transformOrigin: "50% 100%",
              force3D: true,
            });
            tl.fromTo(
              el,
              {
                opacity: 0,
                xPercent: -50,
                yPercent: 16,
                rotate: 0,
                scale: 0.86,
              },
              {
                opacity: 1,
                ...mobilePose(el),
                scale: 1,
                duration,
                ease: "power3.out",
                force3D: true,
                immediateRender: false,
              },
              fanAt(at),
            );
          });
          return;
        }

        const pose = (el: HTMLElement | null) =>
          el ? desktopPose(el) : { rotate: 0, scale: 1, x: 0, y: 0 };

        tl.to(
          solea,
          { opacity: 1, ...pose(solea), y: 0, duration: 1.05 },
          fanAt(0),
        );
        tl.to(
          lucente,
          { opacity: 1, ...pose(lucente), y: 0, duration: 1.15 },
          fanAt(0.08),
        );
        tl.to(
          velora,
          { opacity: 1, ...pose(velora), y: 0, duration: 1.15 },
          fanAt(0.08),
        );
        tl.to(
          atelier,
          { opacity: 1, ...pose(atelier), y: 0, duration: 1.25 },
          fanAt(0.16),
        );
        tl.to(
          detailer,
          { opacity: 1, ...pose(detailer), y: 0, duration: 1.25 },
          fanAt(0.16),
        );

        tl.to(
          tablet,
          { opacity: 1, y: 0, scale: 1, duration: 0.85 },
          0.75,
        );
        tl.to(
          phone,
          { opacity: 1, y: 0, scale: 1, duration: 0.85 },
          0.9,
        );

        // Pin idle-float start to production end of phone entrance (1.75s),
        // so a delayed fan does not push it later via timeline duration.
        tl.add(() => {
          if (!tablet || !phone) return;
          gsap.to(tablet, {
            y: -4,
            duration: 5.8,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          });
          gsap.to(phone, {
            y: -5,
            duration: 6.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: 0.4,
          });
        }, 1.75);
      };

      // Start after a short delay — do not wait for window "load" (can stall).
      startTimer = window.setTimeout(() => {
        void playMockups();
      }, MOCKUP_DELAY_MS);
    }, root);

    const finePointer =
      window.matchMedia("(pointer: fine)").matches && window.innerWidth >= 1024;

    let introDone = false;
    introTimer = window.setTimeout(() => {
      introDone = true;
    }, MOCKUP_DELAY_MS + 2600);

    const parallaxLayers: { el: HTMLElement; factor: number; tilt: number }[] =
      [
        ...Array.from(layers).map((el) => {
          const id = el.dataset.fanLayer ?? "";
          const factor =
            id === "solea"
              ? 1
              : id === "lucente" || id === "velora"
                ? 0.55
                : 0.35;
          const tilt =
            id === "solea" ? 1.4 : id === "lucente" || id === "velora" ? 1 : 0.7;
          return { el, factor, tilt };
        }),
        ...(tablet ? [{ el: tablet, factor: 0.7, tilt: 0.8 }] : []),
        ...(phone ? [{ el: phone, factor: 0.85, tilt: 1 }] : []),
      ];

    const onPointerMove = (event: PointerEvent) => {
      if (!finePointer || !introDone) return;
      const rect = root.getBoundingClientRect();
      const nx = (event.clientX - rect.left) / rect.width - 0.5;
      const ny = (event.clientY - rect.top) / rect.height - 0.5;

      parallaxLayers.forEach(({ el, factor, tilt }) => {
        const max = 10 * factor;
        if (el === tablet || el === phone) {
          gsap.to(el, {
            x: nx * max,
            duration: 0.55,
            ease: "power2.out",
            overwrite: "auto",
          });
          return;
        }
        gsap.to(el, {
          x: nx * max,
          y: ny * max * 0.6,
          rotateY: nx * tilt,
          rotateX: -ny * tilt * 0.7,
          duration: 0.55,
          ease: "power2.out",
          overwrite: "auto",
          transformPerspective: 800,
        });
      });
    };

    const onScroll = () => {
      if (isMobile()) {
        if (!mobileFan) return;
        const y = Math.min(Math.max(window.scrollY, 0), 320);
        gsap.set(mobileFan, { y: (y / 320) * 10 });
        return;
      }
      if (!fanStage || !devices) return;
      const y = Math.min(Math.max(window.scrollY, 0), 320);
      const p = y / 320;
      gsap.set(fanStage, { y: p * 12 });
      gsap.set(devices, { y: p * -8 });
    };

    if (finePointer) {
      root.addEventListener("pointermove", onPointerMove);
    }
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelled = true;
      window.clearTimeout(introTimer);
      window.clearTimeout(startTimer);
      root.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-x-clip lg:min-h-svh lg:overflow-hidden"
    >
      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col md:gap-0 lg:grid lg:min-h-svh lg:grid-cols-2">
        {/* Copy — under mockups on mobile, left-aligned like desktop */}
        <div className="site-pad order-2 mx-auto flex w-full max-w-[510px] flex-col items-start justify-center pt-12 pb-14 text-left md:order-1 md:max-w-[520px] md:px-10 md:pt-28 md:pb-10 lg:mx-0 lg:max-w-none lg:px-16 lg:pt-24 lg:pb-20">
          <div data-hero-eyebrow>
            <SectionLabel>Strony internetowe dla firm</SectionLabel>
          </div>
          <h1 className="mt-5 font-serif text-[clamp(2.2rem,7.2vw,3.2rem)] leading-[1.08] font-normal md:mt-6">
            <span className="block" data-hero-line>
              Nowoczesne strony,
            </span>
            <span className="block" data-hero-line>
              które pokazują Twój biznes.
            </span>
          </h1>
          <p
            data-hero-lead
            className="mt-6 max-w-[440px] text-[15px] leading-relaxed text-muted"
          >
            Tworzymy strony internetowe dla firm od A do Z. Każdy projekt
            dopasowujemy do marki, charakteru firmy i sposobu, w jaki
            pracujesz. Ty dajesz nam najważniejsze informacje — my zajmujemy
            się resztą. Od pierwszego pomysłu po gotową stronę.
          </p>
          <div className="mt-7 flex w-full max-w-[440px] flex-row flex-wrap items-center gap-x-5 gap-y-3 md:mt-8 md:gap-x-7">
            <div data-hero-cta>
              <Button href="/#portfolio">
                Zobacz portfolio
                <span className="arrow-shift" aria-hidden>
                  →
                </span>
              </Button>
            </div>
            <div data-hero-link>
              <Button href="/#kontakt" variant="ghost">
                Porozmawiajmy
              </Button>
            </div>
          </div>
          <p
            data-hero-meta
            className="mt-7 max-w-[440px] text-[9px] leading-relaxed tracking-[0.18em] text-muted/70 uppercase"
          >
            Indywidualny projekt · Mobile · Podpięcie domeny i publikacja
          </p>
        </div>

        {/* ─── MOBILE: radial card fan (5 browser mockups only) ─── */}
        <div className="order-1 mx-auto mt-10 w-full overflow-visible px-2 md:hidden">
          <div
            data-mobile-fan
            className="relative mx-auto overflow-visible"
            style={{
              width: "min(435px, calc(100vw - 20px))",
              height: "min(265px, calc((100vw - 20px) * 0.61))",
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[8%_0_0_0] bg-[radial-gradient(ellipse_at_50%_85%,rgba(198,179,148,0.1)_0%,transparent_70%)]"
            />

            {mobileFanCards.map((card) => (
              <div
                key={card.mockup.id}
                data-mobile-fan-card
                data-mobile-fan-id={card.mockup.id}
                className="absolute bottom-[4%] left-1/2 will-change-transform"
                style={{
                  width: card.width,
                  zIndex: card.zIndex,
                  transformOrigin: "50% 100%",
                }}
              >
                <DeviceMockup
                  name={card.mockup.name}
                  image={card.mockup.image}
                  imageAlt={card.mockup.imageAlt}
                  device="desktop"
                  priority
                  sizes="(max-width: 767px) 58vw, 1px"
                  shellClassName="hero-fan-shell"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ─── DESKTOP / md+: original fan + tablet + phone (unchanged) ─── */}
        <div className="relative order-1 mx-auto mt-11 hidden h-[min(58vh,520px)] w-full max-w-[520px] md:order-2 md:mt-0 md:block md:max-h-[560px] md:min-h-[360px] lg:mx-0 lg:h-auto lg:max-h-none lg:min-h-0 lg:max-w-none lg:self-stretch lg:pb-6 lg:pt-12 xl:px-2">
          <div
            data-hero-fan
            className="hero-fan relative mx-auto h-full w-full overflow-visible [perspective:900px]"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[6%_0_0_0] bg-[radial-gradient(ellipse_at_50%_78%,rgba(198,179,148,0.09)_0%,transparent_68%)]"
            />

            {fanCards.map((card) => (
              <div
                key={card.mockup.id}
                data-fan-card
                data-fan-id={card.mockup.id}
                data-rotate={card.rotate}
                data-scale={card.scale}
                className="hero-fan-card absolute bottom-[2%] left-1/2 h-[84%] w-[52%] -ml-[26%] will-change-transform lg:bottom-[1%]"
                style={{
                  zIndex: card.zIndex,
                  transformOrigin: "50% 100%",
                }}
              >
                <div
                  data-fan-layer={card.mockup.id}
                  className="absolute top-0 left-0 w-full will-change-transform [transform-style:preserve-3d]"
                >
                  <DeviceMockup
                    name={card.mockup.name}
                    image={card.mockup.image}
                    imageAlt={card.mockup.imageAlt}
                    device="desktop"
                    priority
                    sizes="(min-width: 1024px) 24vw, (min-width: 768px) 52vw, 36vw"
                    shellClassName="hero-fan-shell"
                    className="w-full"
                  />
                </div>
              </div>
            ))}

            <div data-hero-devices className="contents">
              <div
                data-hero-tablet
                className="absolute bottom-[7%] left-[26%] z-[6] w-[30%] rotate-[-0.5deg] will-change-transform lg:bottom-[10%] lg:left-[25%] lg:w-[31%]"
              >
                <DeviceMockup
                  name={heroMockups.aura.name}
                  image={heroMockups.aura.image}
                  imageAlt={heroMockups.aura.imageAlt}
                  device="tablet"
                  sizes="(min-width: 1024px) 14vw, 28vw"
                  shellClassName="hero-fan-shell"
                  className="w-full"
                />
              </div>
              <div
                data-hero-phone
                className="absolute bottom-[3%] left-[54%] z-[7] w-[16%] rotate-[2deg] will-change-transform lg:bottom-[5%] lg:left-[53%] lg:w-[17%]"
              >
                <DeviceMockup
                  name={heroMockups.elektryk.name}
                  image={heroMockups.elektryk.image}
                  imageAlt={heroMockups.elektryk.imageAlt}
                  device="mobile"
                  sizes="(min-width: 1024px) 8vw, 15vw"
                  shellClassName="hero-fan-shell"
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
