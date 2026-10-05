import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import styles from "./Services.module.css";

const services = [
  { name: "Strzyżenie męskie", duration: "45 min", price: "110 PLN" },
  { name: "Strzyżenie + broda", duration: "75 min", price: "160 PLN" },
  { name: "Broda", duration: "30 min", price: "70 PLN" },
  { name: "Golenie brzytwą", duration: "40 min", price: "90 PLN" },
  { name: "Buzz cut", duration: "30 min", price: "80 PLN" },
] as const;

export function Services() {
  return (
    <section className={styles.section} id="uslugi">
      <div className={styles.copy}>
        <p className={styles.kicker}>
          Usługi
          <span className={styles.kickerRule} />
        </p>
        <h2 className={styles.headline}>
          Bez zbędnych
          <br />
          kombinacji.
        </h2>
        <p className={styles.lead}>
          Dobre cięcie, jasna cena i czas,
          <br />
          który rezerwujesz tylko dla siebie.
        </p>
      </div>

      <div className={styles.list}>
        {services.map((service) => (
          <a
            key={service.name}
            className={styles.row}
            href={booking.main}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.info}>
              <span className={styles.name}>{service.name}</span>
              <span className={styles.duration}>{service.duration}</span>
            </span>
            <span className={styles.end}>
              <span className={styles.price}>{service.price}</span>
              <span className={styles.arrow} aria-hidden="true">
                <svg viewBox="0 0 18 10" fill="none">
                  <path
                    d="M0 5h16M12.5 1.5 17 5l-4.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </svg>
              </span>
            </span>
          </a>
        ))}
        <div className={styles.more}>
          <Cta href={booking.main} variant="ghost">
            Pełna oferta
          </Cta>
        </div>
      </div>
    </section>
  );
}
