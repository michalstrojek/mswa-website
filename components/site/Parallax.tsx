"use client";

import { useEffect, useRef } from "react";

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  amount?: number;
};

export function Parallax({ children, className = "", amount = 22 }: ParallaxProps) {
  const frame = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shell = frame.current;
    const layer = inner.current;
    if (!shell || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frameId = 0;

    const update = () => {
      const rect = shell.getBoundingClientRect();
      const view = window.innerHeight;
      const progress = (view - rect.top) / (view + rect.height);
      const y = (progress - 0.5) * amount * 2;
      layer.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(1.05)`;
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [amount]);

  return (
    <div ref={frame} className={`overflow-hidden ${className.includes("absolute") ? "" : "relative"} ${className}`}>
      <div ref={inner} className="relative h-[115%] w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}
