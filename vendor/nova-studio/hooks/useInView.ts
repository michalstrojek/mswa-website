"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

type Options = {
  once?: boolean;
  /** 0–1: fraction of element visible before triggering */
  amount?: number;
  rootMargin?: string;
};

export function useInView<T extends Element = HTMLElement>(
  options: Options = {},
): [RefObject<T | null>, boolean] {
  const { once = true, amount = 0.2, rootMargin = "0px 0px -8% 0px" } = options;
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: amount, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [amount, once, rootMargin, visible]);

  return [ref, visible];
}
