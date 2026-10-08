"use client";

import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useInView } from "@/hooks/useInView";

export type RevealVariant =
  | "up"
  | "up-sm"
  | "left"
  | "right"
  | "scale"
  | "clip-x"
  | "clip-y"
  | "clip-portrait"
  | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  as?: ElementType;
  /** Force visible (e.g. hero mount) */
  show?: boolean;
  amount?: number;
  style?: CSSProperties;
};

const CLIP_VARIANTS = new Set(["clip-x", "clip-y", "clip-portrait"]);

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  duration,
  as = "div",
  show,
  amount = 0.2,
  style,
}: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ amount });
  const visible = show ?? inView;
  const isClip = CLIP_VARIANTS.has(variant);

  const motionStyle: CSSProperties = {
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
    ...(duration ? { transitionDuration: `${duration}ms` } : {}),
    ...style,
  };

  // Clip variants: observe an unclipped wrapper so IntersectionObserver
  // still fires; apply clip-path on an inner layer.
  if (isClip) {
    return createElement(
      as,
      {
        ref,
        className: className || undefined,
      },
      createElement(
        "div",
        {
          className: `reveal reveal-${variant}${visible ? " is-visible" : ""}`,
          style: motionStyle,
        },
        children,
      ),
    );
  }

  return createElement(
    as,
    {
      ref,
      className: `reveal reveal-${variant}${visible ? " is-visible" : ""} ${className}`.trim(),
      style: motionStyle,
    },
    children,
  );
}
