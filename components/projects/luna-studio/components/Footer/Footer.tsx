"use client";

import { bookingLinks, booksyProps } from "../../config/booking";
import { footer } from "../../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.name}>{footer.brand.name}</p>
          <p className={styles.tagline}>{footer.brand.tagline}</p>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title} className={styles.column}>
            {column.lines.map((line) => (
              <p key={line} className={styles.line}>
                {line}
              </p>
            ))}
          </div>
        ))}

        <div className={styles.social}>
          {footer.links.map((link) =>
            link.kind === "booksy" ? (
              <button
                key={link.label}
                className={styles.link}
                {...booksyProps()}
              >
                {link.label}
              </button>
            ) : (
              <a
                key={link.label}
                className={styles.link}
                href={bookingLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
}
