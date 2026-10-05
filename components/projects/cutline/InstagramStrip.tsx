import { site } from './content/site'
import { Reveal } from './Reveal'

export function InstagramStrip() {
  return (
    <section
      id="instagram"
      className="border-t border-walnut/10 bg-ivory py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
            <p className="font-condensed text-sm tracking-[0.28em] text-muted-red uppercase">
              Społeczność
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.85rem,3.5vw,2.5rem)] font-semibold tracking-wide text-navy">
              Instagram
            </h2>
            <p className="mt-2 max-w-md font-body text-[0.98rem] leading-relaxed text-walnut/70">
              Cuty, ekipa i życie salonu — {site.instagram}
            </p>
            </div>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link inline-flex w-fit items-center gap-2 font-condensed text-[0.95rem] tracking-[0.18em] text-navy uppercase"
            >
              Obserwuj na Instagramie
              <span className="text-link-arrow" aria-hidden="true">
                →
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-2 overflow-hidden sm:grid-cols-3 md:grid-cols-6 md:gap-3">
            {site.instagramFeed.map((src) => (
              <a
                key={src}
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ig-tile group relative min-w-0 overflow-hidden bg-walnut/10"
              >
                <img
                  src={src}
                  alt=""
                  className="ig-tile-img aspect-square w-full object-cover"
                  loading="lazy"
                />
                <span className="ig-tile-label pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/75 to-transparent px-2 py-2.5 font-condensed text-[0.65rem] tracking-[0.14em] text-ivory uppercase">
                  {site.instagram}
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
