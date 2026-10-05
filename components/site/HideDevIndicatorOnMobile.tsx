"use client";

import { useEffect } from "react";

const STYLE_ID = "mswa-hide-next-dev-mobile";

/**
 * Hides the Next.js Dev Tools floating indicator on small viewports
 * so it cannot cover site content during mobile QA. Desktop unchanged.
 */
export function HideDevIndicatorOnMobile() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;

    const sync = () => {
      const hide = window.matchMedia("(max-width: 768px)").matches;

      document.querySelectorAll("nextjs-portal").forEach((portal) => {
        const root = portal.shadowRoot;
        if (!root) return;

        let style = root.getElementById(STYLE_ID) as HTMLStyleElement | null;
        if (!style) {
          style = document.createElement("style");
          style.id = STYLE_ID;
          root.appendChild(style);
        }

        style.textContent = hide
          ? `
              div:has(> button[aria-label="Open Next.js Dev Tools"]),
              button[aria-label="Open Next.js Dev Tools"] {
                display: none !important;
              }
            `
          : "";
      });
    };

    sync();

    const mq = window.matchMedia("(max-width: 768px)");
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { childList: true, subtree: true });

    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
      observer.disconnect();
    };
  }, []);

  return null;
}
