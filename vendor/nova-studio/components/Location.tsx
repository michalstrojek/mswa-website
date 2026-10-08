"use client";

import { LineReveal } from "@/components/LineReveal";
import { Reveal } from "@/components/Reveal";
import { BookingButton, Label } from "@/components/ui";
import { contact } from "@/lib/site";

export function Location() {
  return (
    <section
      id="lokalizacja"
      className="overflow-x-clip border-t border-line/70 px-5 py-11 sm:px-8 sm:py-12 lg:px-10 lg:py-12 xl:px-12"
    >
      <div className="grid min-w-0 items-stretch gap-8 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-10 xl:gap-14">
        <div className="flex min-w-0 flex-col">
          <Reveal variant="up-sm">
            <Label className="mb-4 lg:mb-5">Gdzie jesteśmy</Label>
          </Reveal>
          <h2 className="headline text-[clamp(2.15rem,4vw,3.5rem)]">
            <LineReveal delay={80}>
              <span className="block">Odwiedź</span>
            </LineReveal>
            <LineReveal delay={180} duration={1050}>
              <span className="italic-word block">Nova.</span>
            </LineReveal>
          </h2>

          <Reveal variant="up-sm" delay={280}>
            <p className="mt-5 max-w-[22rem] text-[13px] leading-6 text-muted lg:mt-6">
              Salon w sercu Warszawy. Łatwy dojazd, komfortowa przestrzeń, miejsce stworzone
              z myślą o spokojnej i jakościowej wizycie.
            </p>
          </Reveal>

          <Reveal variant="up-sm" delay={360}>
            <div className="mt-7 space-y-5 border-t border-line pt-6 lg:mt-8 lg:space-y-6 lg:pt-7">
              <div>
                <p className="text-[10px] tracking-[0.24em] uppercase text-muted">Adres</p>
                <p className="mt-2 text-[14px] leading-6">
                  {contact.address}
                  <br />
                  {contact.city}
                </p>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.24em] uppercase text-muted">Godziny</p>
                <div className="mt-2 space-y-1 text-[13px] leading-6 text-ink/85">
                  {contact.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] tracking-[0.24em] uppercase text-muted">Kontakt</p>
                <div className="mt-2 space-y-1 text-[13px] leading-6">
                  <a href={contact.phoneHref} className="block link-line w-fit">
                    {contact.phone}
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block w-fit text-muted link-line"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="up-sm" delay={440}>
            <ul className="mt-6 space-y-2.5 border-t border-line pt-5 lg:mt-7 lg:space-y-3 lg:pt-6">
              {contact.notes.map((note) => (
                <li
                  key={note.label}
                  className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <span className="w-20 shrink-0 text-[10px] tracking-[0.2em] uppercase text-muted">
                    {note.label}
                  </span>
                  <span className="text-[12px] leading-5 text-ink/80">{note.value}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="up-sm" delay={520}>
            <div className="mt-7 flex flex-wrap items-center gap-3 lg:mt-8 lg:gap-4">
              <BookingButton>Umów wizytę</BookingButton>
              <a
                href={contact.mapDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-arrow inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase link-line"
              >
                Wyznacz trasę
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="clip-y" delay={120} duration={1100} amount={0.2} className="h-full">
          <div className="location-map group relative h-[340px] overflow-hidden bg-cream-deep sm:h-[380px] lg:h-full lg:min-h-[480px]">
            <iframe
              title="Mapa — NOVA STUDIO, ul. Wilcza 24, Warszawa"
              src={contact.mapEmbed}
              className="absolute inset-0 h-[calc(100%+48px)] w-full -translate-y-6 border-0 grayscale contrast-[1.08] brightness-[1.02] saturate-[0.25] transition-[filter] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-[0.2] group-hover:saturate-[0.65]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 bg-cream/10 mix-blend-multiply" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-ink/10" />
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 bg-gradient-to-t from-cream via-cream/80 to-transparent p-4 pt-14 sm:p-6 sm:pt-20">
              <p className="font-display text-[11px] tracking-[0.22em] uppercase text-ink/75">
                Wilcza 24 · Warszawa
              </p>
              <a
                href={contact.mapDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto btn-arrow inline-flex items-center gap-2 bg-ink px-3 py-2 text-[9px] tracking-[0.2em] text-cream uppercase transition-opacity hover:opacity-85"
              >
                Trasa
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
