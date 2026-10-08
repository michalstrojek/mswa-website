import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'
import { REVEAL, easeEditorial } from '@/lib/motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  scaleFrom?: number
  amount?: number
}

function useIsCompact() {
  const [compact, setCompact] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setCompact(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return compact
}

/** Soft editorial text/content reveal — minimal travel, no flashy motion. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  y = REVEAL.y,
  duration = 0.85,
  scaleFrom,
  amount = 0.14,
}: RevealProps) {
  const reduce = useReducedMotion()
  const compact = useIsCompact()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  const travel = compact ? Math.min(y, REVEAL.yMobile) : y
  const initialScale = scaleFrom && !compact ? scaleFrom : undefined

  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: travel,
        ...(initialScale ? { scale: initialScale } : null),
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        ...(initialScale ? { scale: 1 } : null),
      }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: easeEditorial }}
    >
      {children}
    </motion.div>
  )
}
