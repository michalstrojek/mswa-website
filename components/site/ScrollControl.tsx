"use client";

import { useEffect } from "react";

/**
 * Keeps the homepage hero on screen after refresh / HMR.
 * - Disables browser scroll restoration
 * - On reload: always start at top (clears leftover #hashes from in-page nav)
 * - On first open with a hash (e.g. shared /#kontakt): jump there instantly, no smooth scroll
 */
export function ScrollControl() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    const hash = window.location.hash.replace(/^#/, "");
    const nav = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming | undefined;
    const isReload = nav?.type === "reload";

    if (isReload || !hash) {
      if (hash) {
        history.replaceState(
          null,
          "",
          `${window.location.pathname}${window.location.search}`,
        );
      }
      window.scrollTo(0, 0);
    } else {
      const target = document.getElementById(hash);
      if (target) {
        target.scrollIntoView({ behavior: "auto", block: "start" });
      }
    }

    const timer = window.setTimeout(() => {
      root.style.scrollBehavior = previous;
    }, 120);

    return () => {
      window.clearTimeout(timer);
      root.style.scrollBehavior = previous;
    };
  }, []);

  return null;
}
