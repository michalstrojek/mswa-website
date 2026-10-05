"use client";

import gsap from "gsap";
import {
  useLayoutEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

type CutRevealProps = {
  children: ReactNode;
  className?: string;
  /** Direction the cut travels from (content emerges toward the opposite side). */
  from?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  style?: CSSProperties;
};

function initialClip(from: NonNullable<CutRevealProps["from"]>) {
  switch (from) {
    case "left":
      return "inset(0 100% 0 0)";
    case "right":
      return "inset(0 0 0 100%)";
    case "top":
      return "inset(0 0 100% 0)";
    case "bottom":
      return "inset(100% 0 0 0)";
  }
}

export function CutReveal({
  children,
  className,
  from = "right",
  delay = 0,
  duration = 1.05,
  style,
}: CutRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el, { clipPath: "inset(0 0 0 0)" });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: initialClip(from) },
        {
          clipPath: "inset(0 0 0 0)",
          duration,
          delay,
          ease: "power3.inOut",
        },
      );
    }, el);

    return () => ctx.revert();
  }, [from, delay, duration]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ clipPath: initialClip(from), ...style }}
    >
      {children}
    </div>
  );
}
