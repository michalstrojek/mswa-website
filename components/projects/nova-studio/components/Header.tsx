"use client";

import { useEffect, useState } from "react";
import { BookingButton } from "./ui";
import { nav } from "../lib/site";

const DESKTOP_MIN = 800;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);

    const onResize = () => {
      if (window.innerWidth >= DESKTOP_MIN) close();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header className="relative sticky top-0 z-50 border-b border-line/70 bg-cream/95 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-5 py-4 lg:px-8 xl:px-12">
        <a href="#start" className="shrink-0 leading-none">
          <span className="block text-[13px] font-semibold tracking-[0.28em] uppercase">
            Nova Studio
          </span>
          <span className="mt-1 block text-[8px] tracking-[0.28em] uppercase text-muted">
            Hair / Color / Style
          </span>
        </a>

        <nav
          className="hidden items-center gap-5 min-[800px]:flex xl:gap-7"
          aria-label="Główne"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-[10px] tracking-[0.22em] uppercase text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <BookingButton className="hidden shrink-0 min-[420px]:inline-flex" />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center min-[800px]:hidden"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-full bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-full bg-ink transition ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`absolute left-0 h-px w-full bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full z-50 border-b border-line bg-cream px-5 py-6 min-[800px]:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobilne">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.22em] uppercase"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
