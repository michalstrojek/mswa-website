import type { ReactNode } from 'react'
import { getBooksyUrl, type BarberId } from './content/site'

type BookLinkProps = {
  children: ReactNode
  className?: string
  barberId?: BarberId
  onClick?: () => void
}

/** Opens Booksy in a new tab. Swap URLs only in content/site.ts. */
export function BookLink({
  children,
  className = '',
  barberId,
  onClick,
}: BookLinkProps) {
  return (
    <a
      href={getBooksyUrl(barberId)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  )
}
