"use client";

import Image from "next/image";
import { useState } from "react";
import { BookingButton } from "./ui";
import { heroSlides } from "../lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = heroSlides[index];
  const padded = String(index + 1).padStart(2, "0");

  return (
    <section id="start" className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.3fr)_minmax(0,1.05fr)]">
        <div className="flex min-w-0 flex-col justify-between px-5 py-10 sm:px-8 lg:px-10 lg:py-14 xl:px-12">
          <div>
            <h1 className="headline text-[clamp(3.2rem,7vw,5.8rem)]">
              <span className="inline-block">Więcej</span>
              <br />
              <span className="italic-word inline-block">niż</span>
              <br />
              <span className="inline-block">fryzura.</span>
            </h1>
            <p className="mt-6 text-[11px] tracking-[0.28em] uppercase text-muted">
              Kolor. Charakter. Ty.
            </p>
            <div className="mt-8">
              <BookingButton />
            </div>
          </div>

          <div className="mt-12 flex items-end justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
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
              <p className="max-w-[9rem] text-[10px] leading-4 tracking-[0.12em] uppercase text-muted">
                Nowa energia.
                <br />
                Za każdym razem.
              </p>
            </div>
            <p className="font-display text-lg tracking-widest text-muted">
              <span className="text-ink">{padded}</span>
              <span className="mx-1">/</span>
              03
            </p>
          </div>
        </div>

        <div className="relative min-h-[70vw] min-w-0 overflow-hidden bg-cream-deep sm:min-h-[520px] lg:min-h-[640px]">
          <div className="absolute inset-0">
            <Image
              key={slide.image}
              src={slide.image}
              alt={slide.alt}
              fill
              priority
              className="object-cover object-[50%_20%]"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        <div className="relative min-h-[420px] min-w-0 overflow-hidden bg-ink text-cream sm:min-h-[520px] lg:min-h-[640px]">
          <div className="absolute inset-0">
            <Image
              src="/projects/nova-studio/images/hero-dark.jpg"
              alt="Ciemne włosy w zbliżeniu"
              fill
              className="object-cover object-[70%_40%] brightness-[0.62] contrast-110 saturate-[0.7]"
              sizes="(max-width: 1024px) 100vw, 35vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-black/15" />
          </div>
          <p className="absolute left-6 top-8 max-w-[11rem] text-[9px] tracking-[0.28em] text-cream/55 uppercase sm:left-8 sm:top-10 lg:left-8 lg:top-12">
            Nova Studio
            <span className="mx-1.5 text-cream/30">/</span>
            Color
            <span className="mx-1.5 text-cream/30">/</span>
            Style
          </p>
          <p className="absolute bottom-10 left-8 right-8 max-w-[11rem] font-display text-2xl leading-[0.95] tracking-wide uppercase">
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
