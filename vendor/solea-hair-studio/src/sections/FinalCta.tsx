import { motion, useReducedMotion } from 'framer-motion'
import { images } from '@/assets/images'
import { CampaignImage } from '@/components/media/CampaignImage'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { bookingUrl } from '@/config/booking'
import { easeEditorial } from '@/lib/motion'

export function FinalCta() {
  const reduce = useReducedMotion()

  return (
    <section className="relative isolate overflow-hidden bg-taupe-deep text-ivory">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-10 bg-gradient-to-b from-ivory to-transparent sm:h-14" />

      <div className="absolute inset-0">
        <CampaignImage
          src={images.ctaBg}
          alt=""
          className="h-full w-full"
          objectPosition="center 40%"
          hoverZoom={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-taupe-deep via-taupe-deep/78 to-taupe-deep/45" />

        {/* Soft warm light sweep — luxury salon light, not a visible gradient show */}
        {!reduce && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 w-[45%] bg-gradient-to-r from-transparent via-[#c4a484]/14 to-transparent mix-blend-soft-light"
            initial={{ left: '-30%', opacity: 0 }}
            whileInView={{ left: '85%', opacity: [0, 0.85, 0] }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 2.8, ease: easeEditorial, delay: 0.2 }}
          />
        )}
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 pt-20 pb-24 sm:px-8 lg:px-[8%] lg:pt-28 lg:pb-32">
        <div className="max-w-lg">
          <Reveal y={14} duration={0.85}>
            <p className="text-[11px] tracking-[0.28em] text-ivory/70 uppercase">
              Czas na Ciebie
            </p>
          </Reveal>

          {/* No overflow mask — always settles to fully visible even on fast scroll */}
          <motion.h2
            className="mt-4 font-display text-[2.5rem] leading-tight font-medium sm:text-6xl"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.9, delay: 0.1, ease: easeEditorial }}
          >
            Gotowa na zmianę?
          </motion.h2>

          <Reveal delay={0.22} y={12}>
            <p className="mt-6 text-[15px] leading-7 text-ivory/80">
              Umów wizytę i pozwól nam zadbać o Twoje włosy.
            </p>
          </Reveal>

          <motion.div
            className="mt-9 inline-block"
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.15, margin: '0px 0px -8% 0px' }}
            transition={{ duration: 0.7, delay: 0.28, ease: easeEditorial }}
          >
            <Button href={bookingUrl()} external variant="light">
              Umów termin →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
