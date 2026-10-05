"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/site/Button";
import { SiteLink } from "@/components/site/SiteLink";
import { site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[80] isolate transition-[background-color,backdrop-filter] duration-500 ${
          scrolled || open ? "bg-bg/97 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="site-pad flex items-center justify-between py-4 md:px-10 lg:px-16">
          <SiteLink href="/" className="leading-none" onClick={() => setOpen(false)}>
            <span className="block font-serif text-[22px] tracking-[0.18em]">
              {site.name}
            </span>
            <span className="mt-1 block text-[9px] tracking-[0.32em] text-muted uppercase">
              {site.tagline}
            </span>
          </SiteLink>

          <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Główne">
            {site.nav.map((item) => (
              <SiteLink
                key={item.href}
                href={item.href}
                className="text-[11px] tracking-[0.04em] text-muted transition-colors duration-500 hover:text-text xl:text-[12px]"
              >
                {item.label}
              </SiteLink>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/#kontakt" variant="outline">
              Porozmawiajmy
            </Button>
          </div>

          <button
            type="button"
            className="relative h-10 w-10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobilne"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={`absolute left-2 h-px w-6 bg-text transition-transform duration-500 ${
                open ? "top-5 rotate-45" : "top-3.5"
              }`}
            />
            <span
              className={`absolute left-2 h-px w-6 bg-text transition-transform duration-500 ${
                open ? "top-5 -rotate-45" : "top-6"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="menu-mobilne"
        className={`fixed inset-0 z-[70] bg-bg transition-opacity duration-500 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav
          className="site-pad mx-auto flex h-full w-full max-w-[430px] flex-col justify-center overflow-y-auto pt-24 pb-12 sm:max-w-[520px]"
          aria-label="Mobilne"
        >
          {site.nav.map((item) => (
            <SiteLink
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-serif text-[clamp(1.95rem,8vw,2.35rem)] font-normal"
            >
              {item.label}
            </SiteLink>
          ))}
          <div className="mt-10">
            <Button href="/#kontakt" onClick={() => setOpen(false)}>
              Porozmawiajmy
              <span className="arrow-shift" aria-hidden>
                →
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
