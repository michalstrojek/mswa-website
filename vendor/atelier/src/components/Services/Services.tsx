import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import {
  isDemoExternalBookingUrl,
  notifyDemoBooking,
} from "../../lib/demo-booking";
import {
  RevealClip,
  RevealDraw,
  RevealFade,
  RevealLine,
} from "../../lib/reveal";
import styles from "./Services.module.css";

const services = [
  { name: "Strzyżenie męskie", duration: "45 min", price: "110 PLN" },
  { name: "Strzyżenie + broda", duration: "75 min", price: "160 PLN" },
  { name: "Broda", duration: "30 min", price: "70 PLN" },
  { name: "Golenie brzytwą", duration: "40 min", price: "90 PLN" },
  { name: "Buzz cut", duration: "30 min", price: "80 PLN" },
] as const;

export function Services() {
  const demoBooking = isDemoExternalBookingUrl(booking.main);

  return (
    <section className={styles.section} id="uslugi">
      <div className={styles.copy}>
        <p className={styles.kicker}>
          Usługi
          <RevealDraw className={styles.kickerRule} />
        </p>
        <h2 className={styles.headline}>
          <span className={styles.lineMask}>
            <RevealLine className={styles.line} delay={0.12}>
              Bez zbędnych
            </RevealLine>
          </span>
          <span className={styles.lineMask}>
            <RevealLine className={styles.line} delay={0.24}>
              kombinacji.
            </RevealLine>
          </span>
        </h2>
        <RevealClip as="p" className={styles.lead} delay={0.3} duration={0.7}>
          Dobre cięcie, jasna cena i czas,
          <br />
          który rezerwujesz tylko dla siebie.
        </RevealClip>
      </div>

      <div className={styles.list}>
        {services.map((service, index) => {
          const body = (
            <>
              <RevealDraw
                className={styles.divider}
                delay={index * 0.08}
                duration={0.75}
              />
              <RevealFade
                as="span"
                className={styles.info}
                delay={0.45 + index * 0.08}
                duration={0.5}
                y={8}
              >
                <span className={styles.name}>{service.name}</span>
                <span className={styles.duration}>{service.duration}</span>
              </RevealFade>
              <RevealFade
                as="span"
                className={styles.end}
                delay={0.52 + index * 0.08}
                duration={0.5}
                y={8}
              >
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
              </RevealFade>
            </>
          );

          if (demoBooking) {
            return (
              <button
                key={service.name}
                type="button"
                className={styles.row}
                title="Demonstracyjna rezerwacja"
                aria-haspopup="dialog"
                onClick={notifyDemoBooking}
              >
                {body}
              </button>
            );
          }

          return (
            <a
              key={service.name}
              className={styles.row}
              href={booking.main}
              target="_blank"
              rel="noopener noreferrer"
            >
              {body}
            </a>
          );
        })}
        <RevealFade className={styles.more} delay={0.35}>
          <Cta href={booking.main} variant="ghost">
            Pełna oferta
          </Cta>
        </RevealFade>
      </div>
    </section>
  );
}
