import { motion, useReducedMotion } from 'framer-motion'
import type { ElementType, ReactNode } from 'react'
import { easeEditorial } from '@/lib/motion'

type MaskedLineProps = {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  /** Animate on mount (hero) vs whileInView (sections) */
  mode?: 'mount' | 'view'
}

/** Single line revealed vertically from below through an overflow mask. */
export function MaskedLine({
  children,
  className = '',
  delay = 0,
  duration = 0.95,
  mode = 'view',
}: MaskedLineProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <span className={`block ${className}`}>{children}</span>
  }

  const motionProps =
    mode === 'mount'
      ? {
          initial: { y: '110%' },
          animate: { y: '0%' },
        }
      : {
          initial: { y: '110%' },
          whileInView: { y: '0%' },
          viewport: { once: true, amount: 0.4 },
        }

  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        {...motionProps}
        transition={{ duration, delay, ease: easeEditorial }}
      >
        {children}
      </motion.span>
    </span>
  )
}

type MaskedLinesProps = {
  lines: ReactNode[]
  className?: string
  lineClassName?: string
  as?: ElementType
  delay?: number
  stagger?: number
  mode?: 'mount' | 'view'
}

/** Multi-line headline with per-line masked reveals. */
export function MaskedLines({
  lines,
  className = '',
  lineClassName = '',
  as: Tag = 'h1',
  delay = 0,
  stagger = 0.1,
  mode = 'view',
}: MaskedLinesProps) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <MaskedLine
          key={i}
          delay={delay + i * stagger}
          mode={mode}
          className={lineClassName}
        >
          {line}
        </MaskedLine>
      ))}
    </Tag>
  )
}
