type IconProps = { className?: string }

export function LeafIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M8 22c8-1 12-8 16-16-8 2-14 8-16 16Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M10 20c3-3 7-6 14-9"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}

export function StarsIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M16 6.5 17.4 12 22.5 13.2 17.4 14.5 16 20 14.6 14.5 9.5 13.2 14.6 12 16 6.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 18.5 24.2 21 26.8 21.7 24.2 22.4 23.5 25 22.8 22.4 20.2 21.7 22.8 21 23.5 18.5Z"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LotusIcon({ className = 'h-8 w-8' }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M16 24c-4-4-6.5-8-6.5-11.5C9.5 9 12.5 7 16 10c3.5-3 6.5-1 6.5 2.5C22.5 16 20 20 16 24Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M8 22c2.5-1 5.5-1.4 8-1.4S21.5 21 24 22"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
