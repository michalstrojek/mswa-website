import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { MASK_CLIP, easeEditorial, type MaskDirection } from '@/lib/motion'

type CampaignImageProps = {
  src: string
  alt: string
  className?: string
  imgClassName?: string
  priority?: boolean
  sizes?: string
  objectPosition?: string
  /** Desktop hover zoom. Default true. */
  hoverZoom?: boolean
  /** Subtle scroll parallax in px (desktop only). */
  parallax?: number
  /** Editorial magazine wipe reveal. */
  mask?: MaskDirection
  maskDelay?: number
  maskDuration?: number
  /** Soft scale settle during mask reveal. */
  scaleFrom?: number
}

function useDesktopMotion() {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px) and (hover: hover)')
    const update = () => setOk(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return ok
}

export function CampaignImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  priority = false,
  sizes,
  objectPosition = 'center',
  hoverZoom = true,
  parallax = 0,
  mask,
  maskDelay = 0,
  maskDuration = 1.05,
  scaleFrom = 1.03,
}: CampaignImageProps) {
  const reduce = useReducedMotion()
  const desktop = useDesktopMotion()
  const ref = useRef<HTMLDivElement>(null)
  const enableParallax = Boolean(parallax) && desktop && !reduce
  const enableMask = Boolean(mask) && !reduce

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    enableParallax ? [parallax, -parallax] : [0, 0],
  )

  const zoomClass = hoverZoom && !reduce ? 'campaign-photo-zoom' : ''
  const clip = mask ? MASK_CLIP[mask] : null

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      initial={
        enableMask && clip
          ? { clipPath: clip.hidden, scale: scaleFrom }
          : undefined
      }
      whileInView={
        enableMask && clip
          ? { clipPath: clip.visible, scale: 1 }
          : undefined
      }
      viewport={enableMask ? { once: true, amount: 0.22 } : undefined}
      transition={
        enableMask
          ? { duration: maskDuration, delay: maskDelay, ease: easeEditorial }
          : undefined
      }
    >
      <motion.div
        className={
          enableParallax
            ? 'h-[112%] w-full will-change-transform'
            : 'h-full w-full'
        }
        style={enableParallax ? { y } : undefined}
      >
        <img
          src={src}
          alt={alt}
          sizes={sizes}
          className={`campaign-photo h-full w-full object-cover ${zoomClass} ${imgClassName}`}
          style={{ objectPosition }}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
        />
      </motion.div>
    </motion.div>
  )
}
