"use client";

import { useEffect, useState } from "react";
import { BookingButton } from "@/components/ui";
import { nav } from "@/lib/site";

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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative sticky top-0 z-50 border-b border-line/70 bg-cream/95 backdrop-blur-md">
      <div className="flex min-w-0 items-center justify-between gap-2 px-4 py-3.5 sm:gap-3 sm:px-5 sm:py-4 lg:px-8 xl:px-12">
        <a href="#start" className="min-w-0 shrink leading-none">
          <span className="block text-[11px] font-semibold tracking-[0.2em] uppercase sm:text-[13px] sm:tracking-[0.28em]">
            Nova Studio
          </span>
          <span className="mt-1 block text-[7px] tracking-[0.2em] uppercase text-muted sm:text-[8px] sm:tracking-[0.28em]">
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

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3">
          <BookingButton className="!gap-2 !px-3 !py-2 !text-[9px] !tracking-[0.16em] sm:!gap-3 sm:!px-5 sm:!py-2.5 sm:!text-[10px] sm:!tracking-[0.22em]" />
          <button
            type="button"
            className="flex h-11 w-11 shrink-0 items-center justify-center min-[800px]:hidden"
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
          className="absolute inset-x-0 top-full z-50 max-h-[min(70vh,28rem)] overflow-y-auto border-b border-line bg-cream px-5 py-6 min-[800px]:hidden"
        >
          <nav className="flex flex-col gap-4" aria-label="Mobilne">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-1 text-sm tracking-[0.22em] uppercase"
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
