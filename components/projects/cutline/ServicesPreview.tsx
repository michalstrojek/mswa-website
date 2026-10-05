import { site } from './content/site'
import { BookLink } from './BookLink'
import { Reveal } from './Reveal'

export function ServicesPreview() {
  return (
    <section
      id="oferta-preview"
      className="scroll-mt-24 bg-ivory py-14 md:py-16"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <div className="text-left">
            <p className="font-condensed text-sm tracking-[0.28em] text-muted-red uppercase">
              Cennik
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold tracking-wide text-navy">
              Oferta
            </h2>
            <p className="mt-3 max-w-md font-body text-[0.98rem] leading-relaxed text-walnut/70">
              Prosty cennik — jak klasyczna tablica w salonie.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="price-board mt-8 border border-walnut/20 bg-cream/60 px-5 py-2 md:mt-10 md:px-7">
            <ul>
              {site.servicesPreview.map((service) => (
                <li key={service.name} className="price-board-row group">
                  <div className="price-board-row-inner">
                    <h3 className="price-board-name font-condensed text-[1.2rem] font-semibold tracking-[0.12em] text-navy uppercase md:text-[1.35rem]">
                      {service.name}
                    </h3>
                    <span
                      className="price-board-dots"
                      aria-hidden="true"
                    />
                    <div className="flex shrink-0 items-baseline gap-4 font-condensed tracking-[0.1em] sm:gap-6">
                      <span className="text-sm text-walnut/55 uppercase">
                        {service.duration}
                      </span>
                      <span className="price-board-price min-w-[4.75rem] text-right text-[1.1rem] font-semibold text-navy md:text-[1.2rem]">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-8 md:mt-9">
            <BookLink className="text-link inline-flex items-center gap-2 font-condensed text-[0.95rem] tracking-[0.18em] text-navy uppercase">
              Umów wizytę
              <span className="text-link-arrow" aria-hidden="true">
                →
              </span>
            </BookLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
