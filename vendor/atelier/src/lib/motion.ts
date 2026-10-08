import type { Transition, Variants } from "framer-motion";

/** Razor / shutter cinematic easing — decisive but controlled */
export const easeCut = [0.76, 0, 0.24, 1] as const;
export const easeOut = [0.22, 1, 0.36, 1] as const;
export const easeInk = [0.65, 0, 0.35, 1] as const;

export const cutTransition = (
  delay = 0,
  duration = 0.9,
): Transition => ({
  duration,
  delay,
  ease: easeCut,
});

export const fadeTransition = (delay: number): Transition => ({
  duration: 0.7,
  delay,
  ease: easeOut,
});

/** Early, reliable in-view — survives fast scrolling */
export const inView = {
  once: true,
  amount: 0.01,
  margin: "24% 0px 24% 0px",
} as const;

export const inViewEarly = {
  once: true,
  amount: 0.01,
  margin: "28% 0px 28% 0px",
} as const;

/** Vertical shutter open (center → edges via clip) */
export const shutterVertical: Variants = {
  hidden: { clipPath: "inset(50% 0 50% 0)" },
  visible: {
    clipPath: "inset(0% 0 0% 0)",
    transition: { duration: 1.05, ease: easeCut },
  },
};

/** Horizontal cut reveal (left panel) */
export const cutFromLeft: Variants = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.95, ease: easeCut },
  },
};

/** Line draw L→R */
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.75, ease: easeCut },
  },
};

/** Text rise through mask */
export const textRise: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.85, ease: easeCut },
  },
};
