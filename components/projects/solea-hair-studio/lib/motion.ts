/** Shared motion tokens — kept for API parity; reveals are static in MSWA. */

export const easeOutSoft = [0.22, 1, 0.36, 1] as const;

export const REVEAL = {
  duration: 0.74,
  y: 22,
  yMobile: 14,
  stagger: 0.09,
} as const;

export const HOVER = {
  imageScale: 1.02,
  imageDuration: 0.55,
} as const;
