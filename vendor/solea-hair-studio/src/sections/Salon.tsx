import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { images } from '@/assets/images'
import { CampaignImage } from '@/components/media/CampaignImage'
import { Reveal } from '@/components/ui/Reveal'

function useDesktopParallax() {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setOk(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  return ok
}

export function Salon() {
  const reduce = useReducedMotion()
  const desktop = useDesktopParallax()
  const sectionRef = useRef<HTMLElement>(null)
  const live = desktop && !reduce

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const mainY = useTransform(scrollYProgress, [0, 1], live ? [18, -18] : [0, 0])
  const detail1Y = useTransform(
    scrollYProgress,
    [0, 1],
    live ? [12, -28] : [0, 0],
  )
  const detail2Y = useTransform(
    scrollYProgress,
    [0, 1],
    live ? [8, -42] : [0, 0],
  )

  return (
    <section
      ref={sectionRef}
      id="salon"
      className="bg-ivory pt-8 pb-16 sm:pt-12 sm:pb-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-8 lg:px-[8%]">
        <div className="max-w-xl">
          <Reveal>
            <p className="text-[11px] tracking-[0.26em] text-ink-soft uppercase">
              Salon
            </p>
          </Reveal>
          <Reveal delay={0.09}>
            <h2 className="mt-4 font-display text-[2.15rem] leading-tight font-medium text-ink sm:text-5xl">
              Miejsce, do którego chce się wracać.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-12">
          <motion.div style={{ y: mainY }}>
            <CampaignImage
              src={images.salonHero}
              alt="Główna przestrzeń salonu SOLÉA"
              className="aspect-[16/11] sm:aspect-[16/8]"
              objectPosition="center 62%"
              mask="left"
              maskDuration={1.15}
            />
          </motion.div>

          <div className="mt-5 grid grid-cols-2 gap-3 sm:absolute sm:right-[6%] sm:-bottom-16 sm:mt-0 sm:w-[36%] sm:gap-4 lg:-bottom-20">
            <motion.div style={{ y: detail1Y }}>
              <CampaignImage
                src={images.salonDetail1}
                alt="Łukowe lustro i kwiaty w salonie SOLÉA"
                className="aspect-[3/4] sm:-translate-y-12"
                objectPosition="center 40%"
                mask="up"
                maskDelay={0.14}
              />
            </motion.div>
            <motion.div style={{ y: detail2Y }}>
              <CampaignImage
                src={images.salonDetail2}
                alt="Stanowisko salonu — kamień i światło"
                className="aspect-[3/4] mt-8 sm:mt-14"
                objectPosition="center 55%"
                mask="down"
                maskDelay={0.22}
              />
            </motion.div>
          </div>
        </div>

        <Reveal delay={0.08}>
          <p className="mt-10 max-w-md text-sm leading-7 text-ink-soft sm:mt-28">
            Beż, kamień, ciepłe drewno i miękkie światło. Salon zaprojektowany tak,
            żebyś mogła zwolnić — zanim jeszcze usiądziesz.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
