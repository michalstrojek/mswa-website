import { withBase } from "../../lib/asset";
import {
  RevealClip,
  RevealDraw,
  RevealLine,
  RevealShutter,
} from "../../lib/reveal";
import styles from "./Salon.module.css";

export function Salon() {
  return (
    <section className={styles.section} id="salon">
      <div className={styles.intro}>
        <p className={styles.kicker}>
          Nasz salon
          <RevealDraw className={styles.kickerRule} />
        </p>
        <h2 className={styles.headline}>
          <span className={styles.lineMask}>
            <RevealLine className={styles.line} delay={0.12}>
              Przestrzeń,
            </RevealLine>
          </span>
          <span className={styles.lineMask}>
            <RevealLine className={styles.line} delay={0.24}>
              która ma znaczenie.
            </RevealLine>
          </span>
        </h2>
      </div>

      <figure className={styles.hero} id="galeria">
        <RevealShutter
          className={styles.frame}
          duration={1.2}
          hiddenClip="inset(46% 0 46% 0)"
        >
          <img
            src={withBase("/images/salon-wide.jpg")}
            alt="Wnętrze Atelier — fotele, lustra, beton i dzienne światło."
          />
        </RevealShutter>
      </figure>

      <RevealClip className={styles.meta} delay={0.35} duration={0.75}>
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
      </RevealClip>
    </section>
  );
}
