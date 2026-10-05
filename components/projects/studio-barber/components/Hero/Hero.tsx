import { booksyProps } from "../../config/booking";
import { cta, hero } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Wstęp">
      <img
        className={styles.photo}
        src={images.heroSalon}
        alt="Jasny salon Studio Barber: wysokie okna, czarne fotele, jasny kamień i drewno."
        fetchPriority="high"
      />
      <div className={styles.veil} aria-hidden="true" />

      <div className={styles.panel}>
        <div className={styles.sheet}>
          <p className={styles.eyebrow}>{hero.eyebrow}</p>

          <h1 className={styles.headline}>
            {hero.headline.map((line) => (
              <span key={line} className={styles.line}>
                {line}
              </span>
            ))}
          </h1>

          <p className={styles.support}>{hero.support}</p>

          <div className={styles.actions}>
            <a className={styles.primary} {...booksyProps()}>
              {cta.heroLabel}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </a>
            <a className={styles.secondary} href="#salon">
              {cta.secondary}
            </a>
          </div>

          <ul className={styles.points}>
            {hero.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
