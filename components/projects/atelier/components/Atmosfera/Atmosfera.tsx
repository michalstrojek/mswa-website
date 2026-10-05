import { images } from "../../data/images";
import styles from "./Atmosfera.module.css";

export function Atmosfera() {
  return (
    <section className={styles.section} aria-label="Atmosfera">
      <div className={styles.row}>
        <figure className={styles.figure}>
          <img
            src={images.atmosferaHands}
            alt="Detal pracy — nożyczki i faktura włosów."
          />
        </figure>

        <div className={styles.quote}>
          <h2>
            Detal
            <br />
            robi różnicę.
          </h2>
          <p>
            Precyzja nie zaczyna się przy pierwszym cięciu.
            <br />
            Zaczyna się od uwagi.
          </p>
        </div>

        <figure className={`${styles.figure} ${styles.right}`}>
          <img
            src={images.atmosferaMaterials}
            alt="Kosmetyki, lustro i materiały wnętrza Atelier."
          />
        </figure>
      </div>
    </section>
  );
}
