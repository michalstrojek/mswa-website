import { cta, salon } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Salon.module.css";

export default function Salon() {
  return (
    <section className={styles.section} id="salon" aria-label="Nasz salon">
      <div className={styles.visual}>
        <img
          className={styles.photo}
          src={images.salonInterior}
          alt={salon.photoAlt}
          width={1600}
          height={1200}
          loading="lazy"
        />
      </div>

      <div className={styles.copy}>
        <p className={styles.label}>{salon.label}</p>
        <h2 className={styles.headline}>
          {salon.headline.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.text}>{salon.copy}</p>
        <p className={styles.aside}>{salon.aside}</p>
        <a className={styles.link} href="#kontakt">
          {cta.salonLabel}
          <span className={styles.arrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
