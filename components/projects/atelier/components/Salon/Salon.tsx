import { images } from "../../data/images";
import styles from "./Salon.module.css";

export function Salon() {
  return (
    <section className={styles.section} id="salon">
      <div className={styles.intro}>
        <p className={styles.kicker}>
          Nasz salon
          <span className={styles.kickerRule} />
        </p>
        <h2 className={styles.headline}>
          Przestrzeń,
          <br />
          która ma znaczenie.
        </h2>
      </div>

      <figure className={styles.hero} id="galeria">
        <div className={styles.frame}>
          <img
            src={images.salonWide}
            alt="Wnętrze Atelier — fotele, lustra, beton i dzienne światło."
          />
        </div>
      </figure>

      <div className={styles.meta}>
        <div className={styles.labels}>
          <p>
            Warszawa
            <br />
            Mokotów
          </p>
          <p className={styles.index}>01 / Wnętrze</p>
        </div>
        <p className={styles.copy}>
          Projektujemy nie tylko fryzury.
          <br />
          Liczy się też światło, przestrzeń
          <br />
          i atmosfera, w której dobrze się czujesz.
        </p>
      </div>
    </section>
  );
}
