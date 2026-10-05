"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'

function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Signature reveal: a thin chrome line travels down the photo
 * while a hard clip-path unveils the image behind it.
 * Always ends fully visible (failsafe + reduced-motion + no-IO fallback).
 */
export function RazorWipe({
  children,
  className = '',
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<'idle' | 'running' | 'done'>(() =>
    prefersReducedMotion() ? 'done' : 'idle',
  )
  const finishedRef = useRef(phase === 'done')

  useEffect(() => {
    if (finishedRef.current) return

    const el = ref.current
    if (!el) return

    let startTimer = 0
    let doneTimer = 0

    const finish = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      setPhase('done')
    }

    const start = () => {
      if (finishedRef.current) return
      setPhase((current) => (current === 'idle' ? 'running' : current))
      window.clearTimeout(doneTimer)
      doneTimer = window.setTimeout(finish, 820)
    }

    // Absolute failsafe — never leave the image hidden
    const failSafe = window.setTimeout(finish, 2000)

    if (typeof IntersectionObserver === 'undefined') {
      start()
      return () => {
        window.clearTimeout(failSafe)
        window.clearTimeout(doneTimer)
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        start()
      },
      { threshold: 0.12, rootMargin: '40px 0px -5% 0px' },
    )

    observer.observe(el)

    // Refresh mid-page / already in view
    const rect = el.getBoundingClientRect()
    const inView =
      rect.top < window.innerHeight * 0.9 && rect.bottom > 40
    if (inView) {
      startTimer = window.setTimeout(start, 40)
    }

    return () => {
      observer.disconnect()
      window.clearTimeout(failSafe)
      window.clearTimeout(startTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={[
        'razor-wipe',
        phase === 'running' ? 'razor-wipe-running' : '',
        phase === 'done' ? 'razor-wipe-done' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <div className="razor-wipe-media">{children}</div>
      {phase === 'running' ? (
        <div className="razor-wipe-blade" aria-hidden="true" />
      ) : null}
    </div>
  )
}
