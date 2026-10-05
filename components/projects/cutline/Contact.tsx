import { site } from './content/site'
import { BookLink } from './BookLink'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section
      id="kontakt"
      className="relative scroll-mt-24 overflow-hidden bg-navy text-ivory"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(61,43,31,0.45),transparent_55%),radial-gradient(ellipse_at_90%_100%,rgba(232,200,154,0.08),transparent_45%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p className="font-condensed text-sm tracking-[0.28em] text-tungsten/80 uppercase">
            Zapraszamy
          </p>
          <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] font-semibold tracking-wide text-ivory">
            Kontakt
          </h2>
          <div className="mt-5 h-px w-16 bg-chrome/35" aria-hidden="true" />
        </Reveal>

        <div className="mt-10 grid gap-10 md:mt-12 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-5">
            <p className="font-display text-2xl font-semibold tracking-wide text-ivory md:text-3xl">
              {site.name}
            </p>
            <p className="mt-1 font-condensed text-sm tracking-[0.28em] text-tungsten/75 uppercase">
              {site.tagline}
            </p>

            <address className="mt-6 space-y-1 font-body text-[1.05rem] leading-relaxed text-ivory/80 not-italic">
              <p>{site.city}</p>
              <p>{site.street}</p>
            </address>

            <p className="mt-6">
              <a
                href={site.phoneHref}
                className="font-condensed text-xl tracking-[0.08em] text-ivory transition-colors hover:text-tungsten"
              >
                {site.phone}
              </a>
            </p>

            <p className="mt-4">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-condensed text-[0.95rem] tracking-[0.14em] text-ivory/70 uppercase transition-colors hover:text-tungsten"
              >
                {site.instagram}
              </a>
            </p>
          </Reveal>

          <Reveal className="md:col-span-4 md:col-start-7">
            <h3 className="font-condensed text-sm tracking-[0.22em] text-tungsten/80 uppercase">
              Godziny otwarcia
            </h3>
            <ul className="mt-5 space-y-3">
              {site.hours.map((row) => (
                <li
                  key={row.days}
                  className="flex justify-between gap-6 border-b border-chrome/15 pb-3 font-condensed tracking-[0.06em]"
                >
                  <span className="text-ivory/75">{row.days}</span>
                  <span className="text-ivory">{row.time}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="md:col-span-12">
            <BookLink className="btn-book btn-book-light">
              Umów wizytę
              <span className="btn-book-arrow" aria-hidden="true">
                →
              </span>
            </BookLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
