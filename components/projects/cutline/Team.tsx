import { site } from './content/site'
import { BookLink } from './BookLink'
import { Reveal } from './Reveal'

export function Team() {
  return (
    <section id="ekipa" className="scroll-mt-24 bg-cream text-navy">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <Reveal>
          <div className="max-w-xl">
            <p className="font-condensed text-sm tracking-[0.28em] text-muted-red uppercase">
              Ekipa
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,2.85rem)] font-semibold tracking-wide text-navy">
              Nasi barberzy
            </h2>
            <p className="mt-4 font-body text-[1.02rem] leading-relaxed text-walnut/80">
              Ludzie za krzesłem — wybierz barbera i umów wizytę bezpośrednio.
            </p>
          </div>
        </Reveal>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0 md:pb-0">
          {site.barbers.map((barber) => (
            <Reveal
              key={barber.id}
              className="w-[80vw] max-w-[340px] shrink-0 snap-center md:w-auto md:max-w-none"
            >
              <article className="team-card group">
                <div className="relative overflow-hidden bg-walnut/10">
                  <img
                    src={barber.image}
                    alt={barber.imageAlt}
                    className={`team-card-img team-card-img-${barber.id} aspect-[4/5] w-full object-cover`}
                    style={{ objectPosition: barber.imagePosition }}
                    loading="lazy"
                  />
                </div>

                <div className="mt-4 pt-1">
                  <h3 className="team-card-name font-display text-[1.65rem] font-semibold tracking-wide text-navy md:text-2xl">
                    {barber.name}
                  </h3>
                  <p className="mt-1.5 font-condensed text-sm tracking-[0.16em] text-muted-red uppercase">
                    {barber.specialty}
                  </p>
                  <p className="mt-3 font-body text-[0.95rem] leading-relaxed text-walnut/75">
                    {barber.bio}
                  </p>
                  <BookLink
                    barberId={barber.id}
                    className="text-link mt-4 inline-flex items-center gap-2 font-condensed text-[0.9rem] tracking-[0.16em] text-navy uppercase"
                  >
                    Umów u {barber.name}
                    <span className="text-link-arrow" aria-hidden="true">
                      →
                    </span>
                  </BookLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-9 font-body text-sm text-walnut/55 md:mt-10">
            Wolisz bez wyboru?{' '}
            <BookLink className="text-link font-condensed tracking-[0.08em] text-navy uppercase">
              Umów wizytę ogólnie
            </BookLink>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
