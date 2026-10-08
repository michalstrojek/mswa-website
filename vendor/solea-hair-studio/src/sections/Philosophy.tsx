import { PHILOSOPHY } from '@/data/philosophy'
import { LeafIcon, LotusIcon, StarsIcon } from '@/components/icons/LineIcons'
import { Reveal } from '@/components/ui/Reveal'

const ICONS = {
  leaf: LeafIcon,
  stars: StarsIcon,
  lotus: LotusIcon,
}

export function Philosophy() {
  return (
    <section className="relative bg-ivory pt-4 pb-8 sm:pt-6 sm:pb-10 lg:pt-8 lg:pb-12">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-16 xl:px-24">
        <div className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <div className="max-w-xl lg:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-[0.26em] text-ink-soft uppercase">
                {PHILOSOPHY.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.09}>
              <h2 className="mt-4 font-display text-[2.35rem] leading-tight font-medium text-ink sm:text-5xl lg:text-[3.1rem]">
                {PHILOSOPHY.headline}
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-md text-[15px] leading-7 text-ink-soft">
                {PHILOSOPHY.intro}
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6 lg:col-span-7 lg:mt-2 lg:gap-8">
            {PHILOSOPHY.pillars.map((pillar, index) => {
              const Icon = ICONS[pillar.icon]
              return (
                <Reveal key={pillar.id} delay={0.08 + 0.1 * index} className="min-w-0">
                  <Icon className="h-5 w-5 text-stone" />
                  <h3 className="mt-4 font-display text-[1.35rem] leading-snug text-ink">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">
                    {pillar.copy}
                  </p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
