"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import { site } from "../content/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

type BlackLabelShellProps = {
  children: ReactNode;
  className?: string;
};

export function BlackLabelShell({
  children,
  className = "",
}: BlackLabelShellProps) {
  const pathname = usePathname();
  const isHome = pathname === site.homeHref;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={["black-label-root page-shell", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Header />
      <div
        id="tresc"
        className={isHome ? undefined : "pt-[var(--nav-height)]"}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
}
