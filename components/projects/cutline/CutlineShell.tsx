"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";

function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/projekty/cutline") return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const id = hash.replace("#", "");
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    };

    const frame = window.requestAnimationFrame(scrollToHash);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [pathname]);

  return null;
}

type CutlineShellProps = {
  children: ReactNode;
  className?: string;
};

export function CutlineShell({ children, className = "" }: CutlineShellProps) {
  return (
    <div
      className={["cutline-root min-h-svh overflow-x-hidden bg-cream text-navy", className]
        .filter(Boolean)
        .join(" ")}
    >
      <ScrollToHash />
      <Header />
      <div id="tresc">{children}</div>
      <Footer />
    </div>
  );
}
