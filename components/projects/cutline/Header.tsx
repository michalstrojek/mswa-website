"use client";

import { useEffect, useState } from "react";
import { site } from "./content/site";
import { BookLink } from "./BookLink";
import { CutlineLink } from "./CutlineLink";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300",
        scrolled || menuOpen
          ? "site-header site-header-scrolled bg-navy/94 backdrop-blur-md border-b border-chrome/20"
          : "site-header bg-linear-to-b from-navy/70 via-navy/35 to-transparent border-b border-transparent",
      ].join(" ")}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 md:h-[4.75rem] md:px-8">
        <CutlineLink
          to="/"
          className="font-display text-[1.55rem] font-semibold tracking-[0.06em] text-ivory md:text-[1.7rem]"
          onClick={closeMenu}
        >
          {site.name}
        </CutlineLink>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Główne">
          <CutlineLink
            to="/#oferta-preview"
            className="nav-link font-condensed text-[0.95rem] tracking-[0.18em] uppercase"
          >
            Oferta
          </CutlineLink>
          <CutlineLink
            to="/#atmosfera"
            className="nav-link font-condensed text-[0.95rem] tracking-[0.18em] uppercase"
          >
            Galeria
          </CutlineLink>
        </nav>

        <div className="hidden md:block">
          <BookLink className="btn-book btn-book-light">
            Umów wizytę
            <span className="btn-book-arrow" aria-hidden="true">
              →
            </span>
          </BookLink>
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center text-ivory md:hidden"
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Menu</span>
          <span
            className={[
              "absolute h-[1.5px] w-6 bg-current transition-transform duration-300",
              menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-[1.5px] w-6 bg-current transition-opacity duration-200",
              menuOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />
          <span
            className={[
              "absolute h-[1.5px] w-6 bg-current transition-transform duration-300",
              menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5",
            ].join(" ")}
          />
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-chrome/10 bg-navy md:hidden">
          <nav
            className="flex min-h-[calc(100svh-4.25rem)] flex-col gap-1 px-5 py-8"
            aria-label="Mobilne"
          >
            <CutlineLink
              to="/#oferta-preview"
              className="font-condensed py-4 text-2xl tracking-[0.16em] text-ivory uppercase"
              onClick={closeMenu}
            >
              Oferta
            </CutlineLink>
            <CutlineLink
              to="/#atmosfera"
              className="font-condensed py-4 text-2xl tracking-[0.16em] text-ivory uppercase"
              onClick={closeMenu}
            >
              Galeria
            </CutlineLink>
            <CutlineLink
              to="/#kontakt"
              className="font-condensed py-4 text-2xl tracking-[0.16em] text-ivory uppercase"
              onClick={closeMenu}
            >
              Kontakt
            </CutlineLink>
            <BookLink
              className="btn-book btn-book-light mt-8 w-full"
              onClick={closeMenu}
            >
              Umów wizytę
              <span className="btn-book-arrow" aria-hidden="true">
                →
              </span>
            </BookLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
