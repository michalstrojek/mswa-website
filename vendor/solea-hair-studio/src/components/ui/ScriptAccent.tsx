import type { ReactNode } from 'react'

type ScriptAccentProps = {
  children: ReactNode
  className?: string
}

export function ScriptAccent({ children, className = '' }: ScriptAccentProps) {
  return (
    <p
      className={`font-script text-[1.65rem] leading-none text-cream/90 md:text-[2rem] ${className}`}
    >
      {children}
    </p>
  )
}
