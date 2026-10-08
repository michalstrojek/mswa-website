"use client";

import { booksyProps } from "../../config/booking";
import { services } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.section} id="uslugi" aria-label="Usługi">
      <div className={styles.layout}>
        <div className={styles.visual}>
          <img
            className={styles.photo}
            src={images.salonTools}
            alt="Narzędzia i kosmetyki na jasnym drewnie w Studio Barber."
          />
        </div>

        <div className={styles.content}>
          <div>
            <p className={styles.label}>{services.label}</p>
            <h2 className={styles.lead}>
              {services.lead.map((line) => (
                <span key={line} className={styles.line}>
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <ul className={styles.table}>
            {services.items.map((item) => (
              <li key={item.name} className={styles.row}>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.meta}>{item.duration}</span>
                <span className={styles.price}>{item.price}</span>
              </li>
            ))}
          </ul>

          <button className={styles.more} {...booksyProps()}>
            {services.more}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
