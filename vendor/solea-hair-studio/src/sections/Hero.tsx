import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useRef } from 'react'
import { images } from '@/assets/images'
import { Button } from '@/components/ui/Button'
import { ScriptAccent } from '@/components/ui/ScriptAccent'
import { MaskedLine, MaskedLines } from '@/components/ui/MaskedText'
import { CampaignImage } from '@/components/media/CampaignImage'
import { ArchFrame } from '@/components/shapes/ArchFrame'
import { WaveDivider } from '@/components/shapes/WaveDivider'
import { bookingUrl } from '@/config/booking'
import { easeEditorial } from '@/lib/motion'

const HERO_LABELS = ['Kolor', 'Cięcie', 'Pielęgnacja', 'Stylizacja']

export function Hero() {
  const reduce = useReducedMotion()
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 50],
  )

  return (
    <section
      ref={sectionRef}
      id="start"
      className="relative isolate min-h-[100svh] overflow-hidden bg-taupe-deep text-ivory"
    >
      {/* Background — cinematic settle + subtle scroll parallax */}
      <motion.div
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%]"
        style={{ y: parallaxY }}
      >
        <motion.div
          className="absolute inset-0 origin-[68%_22%]"
          initial={reduce ? false : { scale: 1.05, opacity: 0.85 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.85, ease: easeEditorial }}
        >
          <CampaignImage
            src={images.heroPortrait}
            alt="Kobieta z falowanymi włosami — kampania SOLÉA"
            className="absolute inset-0 h-full w-full"
            imgClassName="hero-photo"
            priority
            objectPosition="50% 32%"
            hoverZoom={false}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-taupe-deep/55 via-transparent to-taupe-deep/50 lg:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-[46%] bg-gradient-to-r from-taupe-deep from-10% via-taupe-deep/70 to-transparent lg:block" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-taupe-deep/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-taupe-deep/30 to-transparent" />
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-6 pt-28 pb-24 sm:px-8 lg:justify-center lg:px-12 lg:pt-20 lg:pb-28">
        <div className="max-w-[32rem]">
          <MaskedLine
            mode="mount"
            delay={0.28}
            duration={0.9}
            className="text-[11px] tracking-[0.28em] text-ivory/70 uppercase"
          >
            Naturalne piękno. Na co dzień.
          </MaskedLine>

          <MaskedLines
            mode="mount"
            as="h1"
            delay={0.42}
            stagger={0.12}
            className="mt-5 font-display text-[2.45rem] leading-[1.06] font-medium text-ivory sm:text-6xl lg:text-[4.2rem]"
            lines={['Włosy,', 'które idą', 'z Tobą.']}
          />

          <motion.p
            className="mt-6 max-w-md text-[15px] leading-7 text-ivory/80"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.82, ease: easeEditorial }}
          >
            Kolor, cięcie i pielęgnacja w harmonii z Twoim stylem życia. Bez
            kompromisów.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-4"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 1.02, ease: easeEditorial }}
          >
            <Button href={bookingUrl()} external variant="light">
              Umów wizytę →
            </Button>
            <Button href="#salon" variant="ghost" className="text-ivory">
              Zobacz nasz salon
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-20 hidden lg:block">
        {/* Positioning shell — no clip, so script text can extend outside the arch */}
        <div className="absolute top-[16%] right-[8%] h-[58%] w-[10.75rem] xl:right-[9%] xl:w-[11.75rem]">
          <motion.div
            className="h-full w-full"
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    y: 28,
                    scale: 0.92,
                    clipPath: 'inset(100% 0 0 0 round 999px 999px 4px 4px)',
                  }
            }
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              clipPath: 'inset(0% 0 0 0 round 999px 999px 4px 4px)',
            }}
            transition={{ duration: 1.35, delay: 0.55, ease: easeEditorial }}
          >
            <ArchFrame className="h-full">
              <CampaignImage
                src={images.heroArch}
                alt="Wnętrze salonu SOLÉA"
                className="h-full"
                objectPosition="center 42%"
                hoverZoom={false}
              />
            </ArchFrame>
          </motion.div>
          {/* Sibling of clipped arch — never clipped by clip-path / overflow */}
          <motion.div
            className="absolute top-[36%] -left-[6.4rem] z-10"
            initial={
              reduce
                ? false
                : { opacity: 0, y: 10, rotate: -18 }
            }
            animate={{ opacity: 1, y: 0, rotate: -13 }}
            transition={{ duration: 0.95, delay: 1.55, ease: easeEditorial }}
          >
            <ScriptAccent className="text-[1.7rem] leading-[1.05] text-ivory/90">
              Good Hair
              <br />
              Good Mood
            </ScriptAccent>
          </motion.div>
        </div>

        <motion.ul
          className="absolute right-[8.5%] bottom-[14%] space-y-1.5 text-right text-[10px] tracking-[0.28em] text-ivory/45 uppercase xl:right-[9.5%]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.65, ease: easeEditorial }}
        >
          {HERO_LABELS.map((label) => (
            <li key={label}>{label}</li>
          ))}
        </motion.ul>
      </div>

      <motion.div
        className="relative z-10 -mt-8 px-6 pb-10 lg:hidden"
        aria-hidden
        initial={reduce ? false : { opacity: 0, y: 8, rotate: -2 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.9, delay: 1.2, ease: easeEditorial }}
      >
        <ScriptAccent className="text-[1.4rem] text-ivory/85">
          Good Hair Good Mood
        </ScriptAccent>
      </motion.div>

      <WaveDivider variant="hero-to-ivory" />
    </section>
  )
}
