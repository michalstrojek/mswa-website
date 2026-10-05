"use client";

import { useEffect, useState } from "react";
import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import styles from "./Navigation.module.css";

const links = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#zespol", label: "Zespół" },
  { href: "#salon", label: "Salon" },
  { href: "#galeria", label: "Galeria" },
  { href: "#kontakt", label: "Kontakt" },
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <a href="#top" className={styles.logo} onClick={close}>
        <span>Atelier</span>
        <span>Barbershop</span>
      </a>

      <nav className={styles.desktopNav} aria-label="Główne">
        {links.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.actions}>
        <Cta href={booking.main}>Umów wizytę</Cta>
        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Zamknij" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className={styles.overlay} id="mobile-nav">
          <nav className={styles.overlayNav} aria-label="Mobilne">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.link} ${styles.overlayLink}`}
                onClick={close}
              >
                {link.label}
              </a>
            ))}
            <Cta href={booking.main} onClick={close}>
              Umów wizytę
            </Cta>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
