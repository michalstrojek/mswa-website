import { booksyProps, instagramProps } from "../../config/booking";
import { booking, cta } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Booking.module.css";

export default function Booking() {
  return (
    <section className={styles.section} aria-label="Rezerwacja">
      <div className={styles.bg} aria-hidden="true">
        <img src={images.salonChair} alt="" />
      </div>

      <div className={styles.inner}>
        <h2 className={styles.heading}>{booking.heading}</h2>
        <p className={styles.text}>{booking.copy}</p>
        <a className={styles.cta} {...booksyProps()}>
          {cta.heroLabel}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </a>

        <ul className={styles.meta}>
          {booking.meta.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              {item.value}
            </li>
          ))}
          <li>
            <span>Online</span>
            <a {...booksyProps()}>Booksy</a>
            {" · "}
            <a {...instagramProps()}>Instagram</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
