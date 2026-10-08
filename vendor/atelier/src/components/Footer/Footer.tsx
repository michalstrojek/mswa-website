import { Cta } from "../Cta/Cta";
import { booking, contact } from "../../config/booking";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.main}>
        <div className={styles.left}>
          <a href="#top" className={styles.logo}>
            <span>Atelier</span>
            <span>Barbershop</span>
          </a>

          <div className={styles.columns}>
            <div>
              <p className={styles.label}>Adres</p>
              <address>
                {contact.address.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </address>
            </div>

            <div>
              <p className={styles.label}>Kontakt</p>
              <p>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                  {contact.phone}
                </a>
                <br />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <div className={styles.social}>
                <Cta href={booking.instagram} variant="text">
                  Instagram
                </Cta>
                <Cta href={booking.main} variant="text">
                  Booksy
                </Cta>
              </div>
            </div>

            <div>
              <p className={styles.label}>Godziny</p>
              <div className={styles.hours}>
                <p>
                  <span>Pn–Pt</span>
                  10:00–20:00
                </p>
                <p>
                  <span>Sobota</span>
                  10:00–18:00
                </p>
                <p>
                  <span>Niedziela</span>
                  Zamknięte
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.mark} aria-hidden="true">
            Atelier
          </p>
          <div className={styles.reserve}>
            <p className={styles.reserveLabel}>Rezerwacja</p>
            <p className={styles.reserveCopy}>
              Wybierz swojego barbera
              <br />
              i znajdź dogodny termin.
            </p>
            <Cta href={booking.main} variant="text">
              Booksy
            </Cta>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2026 Atelier Barbershop</p>
        <p>Warszawa</p>
        <a href="#kontakt">Polityka prywatności</a>
      </div>
    </footer>
  );
}
