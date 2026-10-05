import { site } from './content/site'
import { Reveal } from './Reveal'
import { RazorWipe } from './RazorWipe'

export function About() {
  const { about } = site

  return (
    <section id="o-nas" className="scroll-mt-24 bg-cream text-navy">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-12 md:gap-12 md:px-8 md:py-20">
        <Reveal className="md:col-span-6 lg:col-span-5">
          <p className="font-condensed text-sm tracking-[0.28em] text-muted-red uppercase">
            {about.eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[clamp(1.85rem,4vw,2.65rem)] leading-[1.15] font-semibold tracking-wide text-navy">
            {about.headline}
          </h2>

          <div className="mt-6 space-y-4 font-body text-[1.02rem] leading-[1.7] text-walnut/90">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal className="md:col-span-6 lg:col-span-6 lg:col-start-7">
          <figure>
            <RazorWipe>
              <img
                src={about.image}
                alt={about.imageAlt}
                className="aspect-[5/4] w-full object-cover object-center md:aspect-[4/3]"
                loading="lazy"
              />
            </RazorWipe>
            <figcaption className="mt-3 font-condensed text-xs tracking-[0.22em] text-walnut/55 uppercase">
              Salon · drewno · rzemiosło
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
