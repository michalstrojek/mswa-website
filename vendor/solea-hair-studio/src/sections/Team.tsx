import { images } from '@/assets/images'
import { TEAM } from '@/data/team'
import { CampaignImage } from '@/components/media/CampaignImage'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { bookingUrl } from '@/config/booking'
import type { MaskDirection } from '@/lib/motion'

const PHOTO = {
  maja: images.maja,
  natalia: images.natalia,
  julia: images.julia,
  lena: images.lena,
  zosia: images.zosia,
} as const

function ctaLabel(name: string) {
  const inflected: Record<string, string> = {
    Maja: 'MAJĄ',
    Natalia: 'NATALIĄ',
    Julia: 'JULIĄ',
    Lena: 'LENĄ',
    Zosia: 'ZOSIĄ',
  }
  return `Umów wizytę z ${inflected[name] ?? name.toUpperCase()} →`
}

const MEMBER_LAYOUT = [
  {
    memberIndex: 0,
    className: 'col-span-2 lg:col-span-6 lg:row-span-2',
    featured: true,
    mask: 'up' as MaskDirection,
    delay: 0,
    textDelay: 0.55,
  },
  {
    memberIndex: 1,
    className: 'lg:col-span-3 lg:mt-10',
    featured: false,
    mask: 'down' as MaskDirection,
    delay: 0.14,
    textDelay: 0.7,
  },
  {
    memberIndex: 2,
    className: 'lg:col-span-3 lg:mt-4',
    featured: false,
    mask: 'up' as MaskDirection,
    delay: 0.28,
    textDelay: 0.84,
  },
  {
    memberIndex: 3,
    className: 'lg:col-span-3 lg:col-start-7 lg:mt-2',
    featured: false,
    mask: 'down' as MaskDirection,
    delay: 0.22,
    textDelay: 0.78,
  },
  {
    memberIndex: 4,
    className: 'lg:col-span-3 lg:mt-6',
    featured: false,
    mask: 'up' as MaskDirection,
    delay: 0.36,
    textDelay: 0.92,
  },
] as const

export function Team() {
  return (
    <section id="zespol" className="bg-ivory py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[8%]">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-ink-soft uppercase">
              Zespół
            </p>
          </Reveal>
          <Reveal delay={0.09}>
            <h2 className="mt-4 font-display text-[2.2rem] leading-tight font-medium text-ink sm:text-5xl">
              Osoby, którym powierzasz włosy.
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-12">
          {MEMBER_LAYOUT.map((slot) => {
            const member = TEAM[slot.memberIndex]
            return (
              <article key={member.id} className={slot.className}>
                <CampaignImage
                  src={PHOTO[member.id]}
                  alt={`${member.name} — ${member.specialty}`}
                  className={
                    slot.featured
                      ? 'aspect-[4/5] max-h-[70vh] lg:w-[88%]'
                      : 'aspect-[3/4] max-h-[56vh]'
                  }
                  objectPosition="center 18%"
                  parallax={slot.featured ? 14 : 0}
                  mask={slot.mask}
                  maskDelay={slot.delay}
                  maskDuration={1.1}
                  scaleFrom={1.03}
                />
                <Reveal delay={slot.textDelay} y={10}>
                  <h3 className="mt-4 font-display text-2xl text-ink sm:text-3xl">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-[12px] tracking-[0.16em] text-ink-soft uppercase">
                    {member.specialty}
                  </p>
                  <Button
                    href={bookingUrl({ stylist: member.id })}
                    external
                    variant="text"
                    className="mt-3 text-ink"
                  >
                    {ctaLabel(member.name)}
                  </Button>
                </Reveal>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
