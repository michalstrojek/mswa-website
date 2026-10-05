import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import styles from "./Booking.module.css";

export function Booking() {
  return (
    <section className={styles.section}>
      <h2 className={styles.headline}>
        Dobry dzień
        <br />
        zaczyna się
        <br />
        od dobrego cięcia.
      </h2>

      <div className={styles.action}>
        <p className={styles.kicker}>
          Rezerwacja
          <span className={styles.kickerRule} />
        </p>
        <p className={styles.lead}>
          Wybierz swojego barbera,
          <br />
          znajdź termin i zarezerwuj
          <br />
          wizytę przez Booksy.
        </p>
        <Cta href={booking.main} variant="solidDark">
          Umów wizytę
        </Cta>
        <p className={styles.note}>Rezerwacja online / Booksy</p>
      </div>
    </section>
  );
}
