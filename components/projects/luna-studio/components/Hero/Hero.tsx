import { booksyProps } from "../../config/booking";
import { cta, hero } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="start" aria-label="Wstęp">
      <div className={styles.media}>
        <img
          className={styles.photo}
          src={images.heroBeauty}
          alt={hero.photoAlt}
          width={1800}
          height={2400}
          fetchPriority="high"
        />
      </div>

      <div className={styles.panel}>
        <p className={styles.label}>{hero.label}</p>
        <h1 className={styles.headline}>
          {hero.headline.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h1>
        <p className={styles.support}>
          {hero.support.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </p>
        <div className={styles.actions}>
          <a className={styles.cta} {...booksyProps()}>
            {cta.heroLabel}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
          <a className={styles.secondary} href="#uslugi">
            {cta.secondary}
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
