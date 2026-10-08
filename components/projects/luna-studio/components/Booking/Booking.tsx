"use client";

import { booksyProps } from "../../config/booking";
import { booking, cta } from "../../data/content";
import styles from "./Booking.module.css";

export default function Booking() {
  return (
    <section className={styles.section} aria-label="Rezerwacja">
      <div className={styles.center}>
        <p className={styles.label}>{booking.label}</p>
        <h2 className={styles.headline}>{booking.headline}</h2>
        <p className={styles.copy}>{booking.copy}</p>
        <button className={styles.cta} {...booksyProps()}>
          {cta.bookingLabel}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </button>
        <p className={styles.note}>{cta.booksyNote}</p>
      </div>
    </section>
  );
}
