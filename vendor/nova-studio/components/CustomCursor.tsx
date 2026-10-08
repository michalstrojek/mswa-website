"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type CursorState = {
  x: number;
  y: number;
  visible: boolean;
  label: string;
};

export function CustomCursor() {
  const reduced = usePrefersReducedMotion();
  const [cursor, setCursor] = useState<CursorState>({
    x: 0,
    y: 0,
    visible: false,
    label: "→",
  });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (reduced) return;

    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches && window.innerWidth >= 1024);
    sync();
    mq.addEventListener("change", sync);
    window.addEventListener("resize", sync);
    return () => {
      mq.removeEventListener("change", sync);
      window.removeEventListener("resize", sync);
    };
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest?.(
        "[data-cursor]",
      ) as HTMLElement | null;
      setCursor({
        x: e.clientX,
        y: e.clientY,
        visible: Boolean(target),
        label: target?.dataset.cursor || "→",
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className="nova-cursor pointer-events-none fixed left-0 top-0 z-[100] hidden lg:block"
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)`,
      }}
    >
      <div
        className={`flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ink/20 bg-cream/85 text-[9px] tracking-[0.2em] text-ink uppercase backdrop-blur-sm transition-[opacity,transform] duration-200 ${
          cursor.visible ? "scale-100 opacity-100" : "scale-75 opacity-0"
        }`}
      >
        {cursor.label}
      </div>
    </div>
  );
}
