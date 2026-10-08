import { motion, useReducedMotion } from 'framer-motion'
import { CampaignImage } from '@/components/media/CampaignImage'
import { easeEditorial } from '@/lib/motion'

type BeforeAfterProps = {
  beforeSrc: string
  afterSrc: string
  title: string
}

/**
 * Signature SOLÉA transformation: BEFORE → AFTER horizontal wipe with reveal line.
 */
export function BeforeAfter({ beforeSrc, afterSrc, title }: BeforeAfterProps) {
  const reduce = useReducedMotion()

  return (
    <figure className="w-full">
      <div className="grid grid-cols-2 gap-2 sm:gap-3">
        {/* BEFORE — present first */}
        <motion.div
          className="relative"
          initial={reduce ? false : { opacity: 0.92 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: easeEditorial }}
        >
          <CampaignImage
            src={beforeSrc}
            alt={`${title} — przed`}
            className="aspect-[3/4]"
            objectPosition="center 18%"
            hoverZoom={false}
            imgClassName="before-photo"
          />
          <span className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-taupe-deep/50 to-transparent" />
          <span className="pointer-events-none absolute left-3 top-3 text-[10px] tracking-[0.22em] text-ivory uppercase">
            Przed
          </span>
        </motion.div>

        {/* AFTER — wipe reveal */}
        <div className="relative overflow-hidden">
          <motion.div
            className="relative"
            initial={
              reduce
                ? false
                : { clipPath: 'inset(0 100% 0 0)' }
            }
            whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 1.0,
              delay: 0.35,
              ease: easeEditorial,
            }}
          >
            <CampaignImage
              src={afterSrc}
              alt={`${title} — po`}
              className="aspect-[3/4]"
              objectPosition="center 18%"
              hoverZoom={false}
              imgClassName="after-photo"
            />
            <span className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-taupe-deep/50 to-transparent" />
            <motion.span
              className="pointer-events-none absolute left-3 top-3 text-[10px] tracking-[0.22em] text-ivory uppercase"
              initial={reduce ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.4, delay: 1.05, ease: easeEditorial }}
            >
              Po
            </motion.span>
          </motion.div>

          {/* Vertical wipe line */}
          {!reduce && (
            <motion.span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 w-px bg-ivory/70"
              initial={{ left: '0%', opacity: 0 }}
              whileInView={{
                left: ['0%', '100%'],
                opacity: [0, 1, 1, 0],
              }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 1.0,
                delay: 0.35,
                ease: easeEditorial,
                times: [0, 0.08, 0.92, 1],
              }}
            />
          )}
        </div>
      </div>

      <motion.figcaption
        className="mt-4 font-display text-xl text-ink italic sm:text-2xl"
        initial={reduce ? false : { opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, delay: 0.55, ease: easeEditorial }}
      >
        {title}
      </motion.figcaption>
    </figure>
  )
}
