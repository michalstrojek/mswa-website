"use client";

import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { useInView } from "@/hooks/useInView";

type LineRevealProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  delay?: number;
  duration?: number;
  as?: ElementType;
  show?: boolean;
  amount?: number;
};

/** Overflow-masked line reveal for editorial typography */
export function LineReveal({
  children,
  className = "",
  innerClassName = "",
  delay = 0,
  duration = 900,
  as = "div",
  show,
  amount = 0.25,
}: LineRevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ amount });
  const visible = show ?? inView;

  return createElement(
    as,
    {
      ref,
      className: `line-mask ${className}`.trim(),
    },
    createElement(
      "span",
      {
        className: `line-mask-inner${visible ? " is-visible" : ""} ${innerClassName}`.trim(),
        style: {
          transitionDelay: `${delay}ms`,
          transitionDuration: `${duration}ms`,
        } as CSSProperties,
      },
      children,
    ),
  );
}
