type WaveVariant = 'hero-to-ivory' | 'ivory-over-photo'

type WaveDividerProps = {
  variant: WaveVariant
  className?: string
  position?: 'top' | 'bottom'
}

const PATHS: Record<
  WaveVariant,
  { d: string; fill: string; heightClass: string }
> = {
  'hero-to-ivory': {
    d: 'M0,108 C300,108 440,58 760,72 C1020,84 1120,112 1200,116 L1200,160 L0,160 Z',
    fill: 'var(--color-ivory)',
    heightClass: 'h-[44px] sm:h-[58px] lg:h-[72px]',
  },
  'ivory-over-photo': {
    d: 'M0,0 L1200,0 L1200,28 C960,14 780,40 540,26 C280,10 140,32 0,22 Z',
    fill: 'var(--color-ivory)',
    heightClass: 'h-[28px] sm:h-[38px] lg:h-[46px]',
  },
}

export function WaveDivider({
  variant,
  className = '',
  position = 'bottom',
}: WaveDividerProps) {
  const wave = PATHS[variant]
  const placement =
    position === 'top' ? 'top-0 bottom-auto' : 'bottom-0 top-auto'

  return (
    <div
      className={`pointer-events-none absolute inset-x-0 ${placement} ${wave.heightClass} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1200 160"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <path d={wave.d} fill={wave.fill} />
      </svg>
    </div>
  )
}
