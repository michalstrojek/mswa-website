"use client";

import { useState } from "react";
import { booksyProps } from "../../config/booking";
import { brand, cta, nav } from "../../data/content";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a className={styles.brand} href="#">
          <span className={styles.name}>{brand.name}</span>
          <span className={styles.tagline}>{brand.tagline}</span>
        </a>

        <nav className={styles.nav} aria-label="Główne">
          {nav.map((item) => (
            <a key={item.label} className={styles.navLink} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <span className={styles.lang} aria-label="Język">
            {brand.lang}
          </span>
          <button className={styles.cta} {...booksyProps()}>
            {cta.label}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </button>
          <button
            className={styles.menuBtn}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      {open ? (
        <div className={styles.mobile} id="mobile-nav">
          {nav.map((item) => (
            <a
              key={item.label}
              className={styles.mobileLink}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button
            className={styles.mobileCta}
            {...booksyProps(() => setOpen(false))}
          >
            {cta.label}
            <span aria-hidden="true"> →</span>
          </button>
        </div>
      ) : null}
    </header>
  );
}
