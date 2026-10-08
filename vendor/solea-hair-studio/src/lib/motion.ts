/** SOLÉA editorial motion — luxury fashion / beauty campaign language */

export const easeOutSoft = [0.22, 1, 0.36, 1] as const
export const easeEditorial = [0.16, 1, 0.3, 1] as const

export const REVEAL = {
  duration: 0.74,
  y: 12,
  yMobile: 10,
  stagger: 0.09,
} as const

export const HOVER = {
  imageScale: 1.035,
  imageDuration: 0.55,
} as const

export type MaskDirection = 'left' | 'right' | 'up' | 'down'

export const MASK_CLIP: Record<
  MaskDirection,
  { hidden: string; visible: string }
> = {
  left: {
    hidden: 'inset(0 100% 0 0)',
    visible: 'inset(0 0% 0 0)',
  },
  right: {
    hidden: 'inset(0 0 0 100%)',
    visible: 'inset(0 0% 0 0%)',
  },
  up: {
    hidden: 'inset(100% 0 0 0)',
    visible: 'inset(0% 0 0 0)',
  },
  down: {
    hidden: 'inset(0 0 100% 0)',
    visible: 'inset(0 0 0% 0)',
  },
}
