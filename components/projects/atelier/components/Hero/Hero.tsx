import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import { images } from "../../data/images";
import styles from "./Hero.module.css";

const headline = ["Dobry", "wygląd.", "Lepszy dzień."];

export function Hero() {
  return (
    <section className={styles.hero} aria-label="Atelier Barbershop">
      <div className={styles.media}>
        <img
          src={images.hero}
          alt="Wnętrze Atelier Barbershop w Warszawie — fotele, lustra i dzienne światło."
          className={styles.photo}
          width={1920}
          height={1080}
          decoding="async"
          fetchPriority="high"
        />
        <div className={styles.gradient} />
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <p className={styles.meta}>Warszawa / Est. 2026</p>

          <h1 className={styles.headline}>
            {headline.map((line) => (
              <span className={styles.lineMask} key={line}>
                <span className={styles.line} style={{ display: "block" }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className={styles.lead}>
            Nowoczesny barbershop w sercu Warszawy.
            <br />
            Precyzyjne cięcia, świetna atmosfera
            <br />
            i ludzie, którzy cenią jakość.
          </p>

          <div>
            <Cta href={booking.main}>Umów wizytę</Cta>
          </div>
        </div>

        <div className={styles.footer}>
          <ol className={styles.pages} aria-hidden="true">
            <li className={styles.current}>
              01 <span className={styles.pageRule} />
            </li>
            <li>02</li>
            <li>03</li>
          </ol>

          <p className={styles.aside}>
            Cięcie to więcej
            <br />
            niż fryzura.
            <span className={styles.asideRule} />
          </p>
        </div>
      </div>
    </section>
  );
}
