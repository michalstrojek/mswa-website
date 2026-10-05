"use client";

import { useEffect, useRef } from "react";

export type RevealVariant = "up" | "left" | "right" | "image" | "fade";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: string;
  variant?: RevealVariant;
};

export function Reveal({
  children,
  className = "",
  delay,
  variant = "up",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight * 0.92;
    if (alreadyVisible) {
      el.classList.add("reveal-in");
      return;
    }

    el.classList.add("reveal-out");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.classList.remove("reveal-out");
        el.classList.add("reveal-in");
        observer.disconnect();
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={variant}
      className={className}
      style={delay ? { transitionDelay: delay } : undefined}
    >
      {children}
    </div>
  );
}
