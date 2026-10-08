"use client";

import { booksyProps, instagramProps } from "../../config/booking";
import { footer } from "../../data/content";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.top}>
        <div className={styles.brand}>
          <p className={styles.name}>{footer.brand.name}</p>
          <p className={styles.tagline}>{footer.brand.tagline}</p>
          <div className={styles.links}>
            {footer.links.map((link) => {
              if ("booksy" in link) {
                return (
                  <button
                    key={link.label}
                    className={styles.link}
                    {...booksyProps()}
                  >
                    {link.label}
                  </button>
                );
              }

              if ("social" in link && link.social === "instagram") {
                return (
                  <a
                    key={link.label}
                    className={styles.link}
                    {...instagramProps()}
                  >
                    {link.label}
                  </a>
                );
              }

              return null;
            })}
          </div>
        </div>

        {footer.columns.map((column) => (
          <div key={column.title} className={styles.column}>
            <h2 className={styles.title}>{column.title}</h2>
            {column.lines.map((line) => (
              <p key={line} className={styles.line}>
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>

      <div className={styles.strip}>
        <span>{footer.brand.name}</span>
        <span>WARSAW / EST. 2026</span>
      </div>
    </footer>
  );
}
