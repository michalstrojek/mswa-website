import type { ReactNode } from 'react'

type ArchFrameProps = {
  children: ReactNode
  className?: string
}

export function ArchFrame({ children, className = '' }: ArchFrameProps) {
  return (
    <div className={`overflow-hidden rounded-t-full rounded-b-[4px] ${className}`}>
      {children}
    </div>
  )
}
