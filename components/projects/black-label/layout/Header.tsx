"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../content/site";
import { BookLink } from "../brand/BookLink";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();
  const isHome = pathname === site.homeHref;

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        isHome ? "bg-transparent" : "bg-ink/95 backdrop-blur-[2px]"
      }`}
    >
      <div className="container-editorial grid h-[var(--nav-height)] grid-cols-[1fr_auto_1fr] items-center">
        <div className="flex items-center justify-self-start gap-4 sm:gap-5">
          {!isHome ? (
            <Link
              href={site.homeHref}
              className="nav-close"
              aria-label="Wróć na stronę główną"
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden>×</span>
            </Link>
          ) : null}

          <Link
            href={site.homeHref}
            className="font-display text-[1.05rem] font-medium leading-none tracking-[0.18em] text-ivory sm:text-[1.15rem]"
            aria-label="BLACK LABEL — strona główna"
          >
            BLACK LABEL
          </Link>
        </div>

        <nav
          className="hidden items-center justify-self-center gap-8 md:flex"
          aria-label="Główne"
        >
          {[
            { to: site.ofertaHref, label: "Oferta" },
            { to: site.galeriaHref, label: "Galeria" },
            { to: site.kontaktHref, label: "Kontakt" },
          ].map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                href={item.to}
                className={`meta-label transition-colors duration-300 hover:text-brass-soft ${
                  isActive ? "text-brass" : "text-ivory-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-5 sm:gap-6">
          <BookLink className="meta-label group relative hidden text-ivory sm:inline-flex">
            <span>{site.bookLabel}</span>
            <span
              aria-hidden
              className="absolute -bottom-1 left-0 h-px w-full origin-left bg-brass transition-transform duration-500 ease-[var(--ease-cut)] group-hover:scale-x-110"
            />
          </BookLink>

          <button
            type="button"
            className="meta-label text-ivory md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Zamknij" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`fixed inset-0 z-40 bg-ink transition-opacity duration-500 ease-[var(--ease-cut)] md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="container-editorial flex h-full flex-col pt-[calc(var(--nav-height)+2.5rem)] pb-12">
          {!isHome ? (
            <Link
              href={site.homeHref}
              className="nav-close mb-10 self-start"
              aria-label="Wróć na stronę główną"
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden>×</span>
            </Link>
          ) : null}

          <nav className="flex flex-1 flex-col gap-7" aria-label="Mobilne">
            <Link
              href={site.homeHref}
              className="font-display text-[clamp(2.25rem,11vw,3.75rem)] font-medium leading-none tracking-[-0.02em] text-ivory"
              onClick={() => setMenuOpen(false)}
            >
              Start
            </Link>
            <Link
              href={site.ofertaHref}
              className="font-display text-[clamp(2.25rem,11vw,3.75rem)] font-medium leading-none tracking-[-0.02em] text-ivory"
              onClick={() => setMenuOpen(false)}
            >
              Oferta
            </Link>
            <Link
              href={site.galeriaHref}
              className="font-display text-[clamp(2.25rem,11vw,3.75rem)] font-medium leading-none tracking-[-0.02em] text-ivory"
              onClick={() => setMenuOpen(false)}
            >
              Galeria
            </Link>
            <Link
              href={site.kontaktHref}
              className="font-display text-[clamp(2.25rem,11vw,3.75rem)] font-medium leading-none tracking-[-0.02em] text-ivory"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
          <BookLink
            className="meta-label text-brass"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
}
