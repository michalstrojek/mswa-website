"use client";

import Image from "next/image";
import { useState } from "react";
import { BookingButton } from "@/components/ui";
import { withBase } from "@/lib/asset";
import { heroSlides } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const padded = String(index + 1).padStart(2, "0");

  return (
    <section id="start" className="relative overflow-x-clip">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.3fr)_minmax(0,1.05fr)]">
        <div className="flex min-w-0 flex-col justify-between px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:px-10 lg:py-14 xl:px-12">
          <div className="min-w-0">
            <h1 className="headline text-[clamp(2.75rem,12vw,5.8rem)]">
              <span className="hero-line">
                <span style={{ animationDelay: "60ms" }}>Więcej</span>
              </span>
              <span className="hero-line">
                <span
                  className="italic-word"
                  style={{ animationDelay: "220ms", animationDuration: "1.15s" }}
                >
                  niż
                </span>
              </span>
              <span className="hero-line">
                <span style={{ animationDelay: "340ms" }}>fryzura.</span>
              </span>
            </h1>
            <p
              className="hero-slide mt-5 text-[11px] tracking-[0.28em] uppercase text-muted sm:mt-6"
              style={{ animationDelay: "480ms" }}
            >
              Kolor. Charakter. Ty.
            </p>
            <div className="hero-fade mt-6 sm:mt-8" style={{ animationDelay: "580ms" }}>
              <BookingButton />
            </div>
          </div>

          <div
            className="hero-fade mt-8 flex min-w-0 items-end justify-between gap-4 sm:mt-12 sm:gap-6"
            style={{ animationDelay: "700ms" }}
          >
            <div className="flex min-w-0 items-end gap-3 sm:gap-4">
              <div className="flex shrink-0 -space-x-2">
                {heroSlides.map((item, i) => (
                  <button
                    key={item.image}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`relative h-9 w-9 overflow-hidden rounded-full border-2 ${
                      i === index ? "border-ink" : "border-cream"
                    }`}
                    aria-label={`Slajd ${i + 1}`}
                  >
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </button>
                ))}
              </div>
              <p className="max-w-[8.5rem] text-[10px] leading-4 tracking-[0.12em] uppercase text-muted sm:max-w-[9rem]">
                Nowa energia.
                <br />
                Za każdym razem.
              </p>
            </div>
            <p
              className="hero-slide shrink-0 font-display text-base tracking-widest text-muted sm:text-lg"
              style={{ animationDelay: "760ms" }}
            >
              <span className="text-ink">{padded}</span>
              <span className="mx-1">/</span>
              03
            </p>
          </div>
        </div>

        <div className="relative aspect-[3/4] min-w-0 overflow-hidden bg-cream-deep sm:aspect-auto sm:min-h-[480px] lg:min-h-[640px]">
          <div className="hero-clip absolute inset-0" style={{ animationDelay: "120ms" }}>
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              className="object-cover object-[50%_18%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="relative aspect-[3/4] min-w-0 overflow-hidden bg-ink text-cream sm:aspect-auto sm:min-h-[480px] lg:min-h-[640px]">
          <div
            className="hero-from-right absolute inset-0"
            style={{ animationDelay: "280ms" }}
          >
            <Image
              src={withBase("/images/hero-dark.jpg")}
              alt="Ciemne włosy w zbliżeniu"
              fill
              className="object-cover object-[70%_35%] brightness-[0.62] contrast-110 saturate-[0.7]"
              sizes="(max-width: 1024px) 100vw, 35vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/15" />
          </div>
          <p
            className="hero-slide absolute left-5 top-6 max-w-[11rem] text-[9px] tracking-[0.28em] text-cream/55 uppercase sm:left-8 sm:top-10 lg:left-8 lg:top-12"
            style={{ animationDelay: "640ms" }}
          >
            Nova Studio
            <span className="mx-1.5 text-cream/30">/</span>
            Color
            <span className="mx-1.5 text-cream/30">/</span>
            Style
          </p>
          <p
            className="hero-fade absolute bottom-8 left-5 right-5 max-w-[11rem] font-display text-[1.35rem] leading-[0.95] tracking-wide uppercase sm:bottom-10 sm:left-8 sm:right-8 sm:text-2xl"
            style={{ animationDelay: "760ms" }}
          >
            Dobre włosy
            <br />
            lepsza
            <br />
            wersja
            <br />
            ciebie.
          </p>
        </div>
      </div>
    </section>
  );
}
