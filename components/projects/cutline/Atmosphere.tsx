import { site } from './content/site'
import { Reveal } from './Reveal'

type AtmosphereBlock = (typeof site.atmosphere.blocks)[number]

function BlockCopy({ block }: { block: AtmosphereBlock }) {
  return (
    <div className="max-w-md">
      <p className="font-condensed text-sm tracking-[0.28em] text-muted-red uppercase">
        {block.label}
      </p>
      <h3 className="mt-3 font-display text-[clamp(1.55rem,3vw,2.15rem)] leading-[1.2] font-semibold tracking-wide text-navy">
        {block.headline}
      </h3>
      <div className="mt-5 space-y-3 font-body text-[1.02rem] leading-[1.7] text-walnut/80">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 28)}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

function BlockVisuals({
  block,
  compact,
}: {
  block: AtmosphereBlock
  compact?: boolean
}) {
  return (
    <div className="space-y-3 md:space-y-3.5">
      <figure className="atmosphere-media overflow-hidden">
        <img
          src={block.main.src}
          alt={block.main.alt}
          className={
            compact
              ? 'aspect-[5/4] w-full object-cover md:aspect-[3/2]'
              : 'aspect-[16/11] w-full object-cover object-[50%_42%] md:aspect-[4/3]'
          }
          loading="lazy"
        />
      </figure>
      <div className="grid grid-cols-2 gap-3 md:gap-3.5">
        {block.supporting.map((image) => (
          <figure key={image.src} className="atmosphere-media overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              className="aspect-square w-full object-cover md:aspect-[5/4]"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </div>
  )
}

export function Atmosphere() {
  const { atmosphere } = site
  const [klimat, rzemioslo] = atmosphere.blocks

  return (
    <section
      id="atmosfera"
      className="scroll-mt-24 border-y border-walnut/10 bg-cream text-navy"
    >
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-20">
        <Reveal>
          <div className="max-w-2xl">
            <p className="font-condensed text-sm tracking-[0.28em] text-muted-red uppercase">
              {atmosphere.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.85rem)] leading-[1.15] font-semibold tracking-wide text-navy">
              {atmosphere.headline}
            </h2>
            <p className="mt-4 max-w-xl font-body text-[1.02rem] leading-relaxed text-walnut/80">
              {atmosphere.lead}
            </p>
          </div>
        </Reveal>

        {/* Block 1 — Klimat salonu: text left, visuals right */}
        <Reveal>
          <div className="mt-11 grid items-start gap-7 md:mt-12 md:grid-cols-12 md:gap-10 lg:gap-12">
            <div className="md:col-span-5 lg:col-span-4">
              <BlockCopy block={klimat} />
            </div>
            <div className="md:col-span-7 lg:col-span-8">
              <BlockVisuals block={klimat} />
            </div>
          </div>
        </Reveal>

        {/* Block 2 — Praca rąk: visuals left, text right */}
        <Reveal>
          <div className="mt-12 grid items-start gap-7 border-t border-walnut/10 pt-12 md:mt-14 md:grid-cols-12 md:gap-10 md:pt-14 lg:gap-12">
            <div className="order-2 md:order-1 md:col-span-7 lg:col-span-8">
              <BlockVisuals block={rzemioslo} compact />
            </div>
            <div className="order-1 md:order-2 md:col-span-5 lg:col-span-4">
              <BlockCopy block={rzemioslo} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
