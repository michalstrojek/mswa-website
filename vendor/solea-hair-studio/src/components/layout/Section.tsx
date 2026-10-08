import type { ReactNode } from 'react'

type SectionProps = {
  id?: string
  tone?: 'light' | 'dark'
  className?: string
  children: ReactNode
}

export function Section({
  id,
  tone = 'light',
  className = '',
  children,
}: SectionProps) {
  const toneClass = tone === 'dark' ? 'bg-taupe-deep text-ivory' : 'bg-ivory text-ink'

  return (
    <section id={id} className={`relative ${toneClass} ${className}`}>
      {children}
    </section>
  )
}
