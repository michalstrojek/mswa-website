"use client";

import { useEffect, useRef, useState } from "react";
import { useReveal } from "./useReveal";

const IMG = "/projects/the-barber/images";

/** Placeholder Booksy destination — non-destructive until a real shop URL is set. */
const BOOKSY = "https://booksy.com/pl-pl/";

const services = [
  {
    name: "Strzyżenie Włosów",
    desc: "Konsultacja, mycie, autorskie strzyżenie i stylizacja.",
    price: "120 zł",
  },
  {
    name: "Modelowanie Brody",
    desc: "Strzyżenie brzytwą, gorący ręcznik, olejek pielęgnacyjny.",
    price: "90 zł",
  },
  {
    name: "Combo: Włosy + Broda",
    desc: "Pełen rytuał — strzyżenie, broda, masaż skóry głowy.",
    price: "190 zł",
  },
  {
    name: "Golenie Brzytwą",
    desc: "Klasyczne golenie na gorąco z balsamem po goleniu.",
    price: "110 zł",
  },
  {
    name: "Strzyżenie Maszynką",
    desc: "Szybkie, precyzyjne strzyżenie jedną długością.",
    price: "70 zł",
  },
  {
    name: "Strzyżenie Ojciec + Syn",
    desc: "Wspólny rytuał dla dwóch pokoleń.",
    price: "180 zł",
  },
];

const team = [
  {
    img: `${IMG}/barber1.jpg`,
    name: "Marek Kowalski",
    role: "Master Barber",
    offset: "max-lg:mr-10 lg:mt-0",
    crop: "object-[center_18%]",
  },
  {
    img: `${IMG}/barber2.jpg`,
    name: "Kamil Nowak",
    role: "Senior Stylist",
    offset: "mt-8 max-lg:ml-12 lg:mt-14",
    crop: "object-[center_22%]",
  },
  {
    img: `${IMG}/barber3.jpg`,
    name: "Tomasz Wójcik",
    role: "Founder · Brzytwa",
    offset: "mt-5 max-lg:mr-16 lg:mt-6",
    crop: "object-[center_8%]",
  },
];

const gallery = [
  { src: `${IMG}/gal-classic.jpg`, label: "CLASSIC", wide: true, alt: "Klasyczne strzyżenie męskie" },
  { src: `${IMG}/gal-fade.jpg`, label: "FADE", wide: false, alt: "Fade — widok z boku" },
  { src: `${IMG}/gal-texture.jpg`, label: "TEXTURE", wide: false, alt: "Teksturowany crop" },
  { src: `${IMG}/gal-beard.jpg`, label: "BEARD", wide: false, alt: "Modelowanie brody" },
  { src: `${IMG}/gal-razor.jpg`, label: "RAZOR", wide: true, alt: "Golenie brzytwą" },
  { src: `${IMG}/gal-salon.jpg`, label: "", wide: true, alt: "Wnętrze salonu" },
  { src: `${IMG}/gal-fade2.jpg`, label: "FADE", wide: false, alt: "Praca nad fade" },
  { src: `${IMG}/gal-mirror.jpg`, label: "CLASSIC", wide: false, alt: "Strzyżenie w lustrze" },
  { src: `${IMG}/gal-shave.jpg`, label: "", wide: false, alt: "Rytuał golenia" },
  { src: `${IMG}/gal-tools.jpg`, label: "", wide: false, alt: "Narzędzia barbera" },
  { src: `${IMG}/gal-chair.jpg`, label: "", wide: true, alt: "Fotel i stanowisko" },
];

export function TheBarberPage() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      dragging = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-dragging");
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onUp = () => {
      dragging = false;
      el.classList.remove("is-dragging");
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div className="the-barber-root overflow-x-hidden bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/5 bg-background/80 backdrop-blur-[6px]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            className="font-display text-xl tracking-widest text-foreground sm:text-2xl"
          >
            THE<span className="text-gold">·</span>BARBER
          </a>
          <div className="hidden gap-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#uslugi" className="transition-colors hover:text-foreground">
              Cennik
            </a>
            <a href="#zespol" className="transition-colors hover:text-foreground">
              Zespół
            </a>
            <a href="#galeria" className="transition-colors hover:text-foreground">
              Galeria
            </a>
            <a href="#kontakt" className="transition-colors hover:text-foreground">
              Kontakt
            </a>
          </div>
          <a
            href={BOOKSY}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-none bg-gold px-4 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-gold-foreground transition-transform hover:-translate-y-0.5 sm:px-6 sm:text-xs"
          >
            Zarezerwuj Fotel
            <span className="cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
        </nav>
      </header>

      <main id="tresc">
        <section
          id="top"
          className="relative h-screen min-h-[640px] w-full overflow-hidden"
        >
          <img
            src={`${IMG}/hero.jpg`}
            alt="Barber przy pracy"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/55 to-background/25" />
          <div className="absolute inset-0 bg-linear-to-r from-background/80 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background to-transparent" />

          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-16 sm:px-8 sm:pb-28">
            <div className="max-w-3xl">
              <div className="reveal mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.4em] text-gold sm:mb-6">
                <span className="h-px w-10 bg-gold" /> Est. 2014 · Warszawa
              </div>
              <h1 className="reveal font-display text-[clamp(2.15rem,8vw,5.5rem)] leading-[0.95] tracking-tight text-foreground">
                Więcej niż strzyżenie. <br />
                <span className="text-muted-foreground">Twój nowy</span>{" "}
                <span className="text-gold">wizerunek.</span>
              </h1>
              <p className="reveal mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">
                Ekskluzywny barbershop dla mężczyzn, którzy nie idą na kompromis.
                Precyzja brzytwy, rytuał fotela, charakter na całe tygodnie.
              </p>
              <div className="reveal mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
                <a
                  href={BOOKSY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none bg-gold px-6 py-4 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-gold-foreground transition-transform hover:-translate-y-0.5 sm:px-8 sm:py-5 sm:text-sm sm:tracking-[0.2em]"
                >
                  Umów wizytę przez Booksy
                  <span className="cta-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
                <a
                  href="#uslugi"
                  className="rounded-none border border-border px-6 py-4 text-center text-[12px] font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:border-gold hover:text-gold sm:px-8 sm:py-5 sm:text-sm sm:tracking-[0.2em]"
                >
                  Zobacz Cennik
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden pt-20 sm:pt-28">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-background to-transparent" />
          <div className="mx-auto grid max-w-5xl items-start gap-8 px-5 sm:px-8 md:grid-cols-[minmax(0,0.88fr)_auto_minmax(0,1.12fr)] md:gap-7 lg:gap-9">
            <div className="reveal relative z-10">
              <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
                — Filozofia
              </div>
              <h2 className="font-display text-4xl leading-[0.92] sm:text-5xl md:text-6xl">
                Rzemiosło. <br /> Charakter. <br />{" "}
                <span className="text-gold">Detal.</span>
              </h2>
            </div>

            <div className="reveal hidden h-[min(100%,13rem)] w-px self-start bg-linear-to-b from-transparent via-gold/65 to-transparent md:mt-14 md:block" />

            <div className="reveal relative z-10 flex flex-col gap-5 md:pt-0">
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground sm:gap-5 sm:text-lg">
                <p>
                  Wierzymy, że fotel barberski to miejsce, w którym mężczyzna
                  odzyskuje formę. Bez pośpiechu, bez kompromisów, z whiskey w
                  dłoni i brzytwą w pełnym skupieniu.
                </p>
                <p>
                  Każde strzyżenie zaczynamy od rozmowy. Kończymy je, gdy stojąc
                  przed lustrem — uśmiechasz się sam do siebie.
                </p>
              </div>
              <div className="reveal-right relative h-36 w-full overflow-hidden sm:h-40 md:-mt-1 md:w-[94%]">
                <img
                  src={`${IMG}/philosophy.jpg`}
                  alt="Brzytwa i narzędzia barbera"
                  width={1000}
                  height={700}
                  loading="lazy"
                  className="img-fade-left h-full w-full object-cover object-[center_40%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="uslugi" className="relative pt-20 pb-4 sm:pt-28 sm:pb-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-linear-to-b from-transparent to-surface/20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent via-surface/30 to-surface/55" />
          <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
            <div className="reveal mb-11 text-center sm:mb-14">
              <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
                — Menu
              </div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl">
                Cennik Premium
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
                Stała jakość, stałe ceny. Bez ukrytych kosztów. Każda wizyta to
                rytuał od początku do końca.
              </p>
            </div>

            <ul className="border-y border-white/8">
              {services.map((s, i) => (
                <li
                  key={s.name}
                  className="service-row reveal border-b border-white/8 py-8 last:border-b-0 sm:py-9"
                  data-delay={String((i % 6) + 1)}
                >
                  <div className="flex items-baseline gap-2">
                    <div className="min-w-0">
                      <h3 className="font-display text-xl tracking-tight text-foreground transition-colors duration-500 sm:text-2xl">
                        {s.name}
                      </h3>
                    </div>
                    <span className="dotted-leader hidden sm:block" />
                    <span className="ml-auto whitespace-nowrap font-display text-xl text-gold sm:ml-0 sm:text-2xl">
                      {s.price}
                    </span>
                  </div>
                  <p className="mt-2.5 max-w-xl text-[13px] leading-relaxed text-muted-foreground/85 sm:text-[15px]">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="zespol" className="relative pt-14 sm:pt-16">
          <div className="pointer-events-none absolute inset-x-0 -top-20 h-72 bg-linear-to-b from-surface/60 via-surface/25 to-transparent" />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="reveal mb-9 max-w-2xl sm:mb-12">
              <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
                — Załoga
              </div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl">
                Mistrzowie Fachu
              </h2>
              <p className="mt-5 text-muted-foreground sm:mt-6 sm:text-lg">
                Trzy charaktery. Trzy szkoły. Jeden standard precyzji.
              </p>
            </div>

            <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:items-start lg:gap-8">
              {team.map((m, i) => (
                <article
                  key={m.name}
                  className={`reveal group ${m.offset}`}
                  data-delay={String(i + 1)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={m.img}
                      alt={m.name}
                      width={800}
                      height={1120}
                      loading="lazy"
                      className={`team-shot team-shot-${i + 1} aspect-[3/4] w-full object-cover group-hover:scale-[1.025] ${m.crop} ${i === 1 ? "max-lg:aspect-[4/5]" : ""} ${i === 2 ? "max-lg:aspect-[5/6]" : ""}`}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/18" />
                    <div
                      className={`pointer-events-none absolute inset-0 mix-blend-multiply ${i === 1 ? "bg-[#0a0a0a]/30" : "bg-[#121212]/20"}`}
                    />
                    <div className="absolute top-4 left-4 font-display text-xs tracking-widest text-gold">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-2xl tracking-tight">
                      {m.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                      {m.role}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="relative pt-20 sm:pt-28">
          <div className="mx-auto mb-8 max-w-7xl px-5 sm:mb-10 sm:px-8">
            <div className="reveal flex items-end justify-between gap-6">
              <div>
                <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
                  — Vibe
                </div>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl">
                  Galeria & Atmosfera
                </h2>
              </div>
              <span className="hidden text-sm uppercase tracking-[0.25em] text-muted-foreground sm:block">
                @thebarber
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-background to-transparent sm:w-12" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-background to-transparent sm:w-12" />
            <div ref={galleryRef} className="gallery-strip">
              {gallery.map((g) => (
                <figure
                  key={g.alt}
                  className={`gallery-item ${g.wide ? "wide" : ""}`}
                >
                  <img
                    src={g.src}
                    alt={g.alt}
                    width={800}
                    height={600}
                    loading="lazy"
                    draggable={false}
                  />
                  {g.label ? (
                    <div className="gal-label">
                      <span>{g.label}</span>
                    </div>
                  ) : null}
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section
          id="kontakt"
          className="relative overflow-hidden pt-24 pb-20 sm:pt-32 sm:pb-28"
        >
          <img
            src={`${IMG}/cta-bg.jpg`}
            alt=""
            aria-hidden="true"
            className="img-fade-bottom pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.18]"
          />
          <div className="absolute inset-0 bg-linear-to-b from-background via-background/88 to-background" />
          <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/80" />

          <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
            <div className="reveal mb-6 text-[11px] font-medium uppercase tracking-[0.4em] text-gold">
              — Twój fotel czeka
            </div>
            <h2 className="reveal font-display text-[clamp(2.75rem,12vw,7rem)] leading-[0.9]">
              Gotowy na <br className="sm:hidden" />
              <span className="text-gold">zmianę?</span>
            </h2>
            <p className="reveal mx-auto mt-8 max-w-xl text-muted-foreground sm:text-lg">
              Zarezerwuj wizytę online w 30 sekund. Bez telefonów, bez kolejek.
              Wybierz barbera, godzinę i przyjdź.
            </p>

            <a
              href={BOOKSY}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal mt-12 inline-block rounded-none bg-gold px-10 py-5 text-[12px] font-bold uppercase tracking-[0.22em] text-gold-foreground transition-transform hover:-translate-y-0.5 sm:mt-14 sm:px-12 sm:py-6 sm:text-sm sm:tracking-[0.25em]"
            >
              Rezerwuję przez Booksy
              <span className="cta-arrow" aria-hidden="true">
                →
              </span>
            </a>

            <div className="reveal mt-20 grid gap-8 border-t border-white/8 pt-12 text-left text-sm sm:mt-24 sm:grid-cols-3 sm:gap-10">
              <div>
                <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                  Adres
                </div>
                <p className="text-foreground/90">
                  ul. Mokotowska 42 <br /> 00-543 Warszawa
                </p>
              </div>
              <div>
                <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                  Godziny
                </div>
                <p className="text-muted-foreground">
                  Pon–Pt: 10:00 — 21:00 <br />
                  Sob: 09:00 — 18:00 <br />
                  Niedz: Zamknięte
                </p>
              </div>
              <div>
                <div className="mb-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                  Kontakt
                </div>
                <p className="text-muted-foreground">
                  +48 600 123 456 <br />
                  kontakt@thebarber.pl
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/8 bg-background py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-xs uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} The Barber · Warszawa</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">
              Instagram
            </a>
            <a href="#" className="hover:text-foreground">
              Facebook
            </a>
            <a href="#" className="hover:text-foreground">
              Polityka
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
