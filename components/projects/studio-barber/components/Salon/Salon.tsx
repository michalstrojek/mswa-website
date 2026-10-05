import { salon } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Salon.module.css";

export default function Salon() {
  return (
    <section className={styles.section} id="salon" aria-label="Nasz salon">
      <div className={styles.intro}>
        <p className={styles.label}>{salon.label}</p>
        <h2 className={styles.copy}>
          {salon.copy.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h2>
      </div>

      <div className={styles.collage}>
        <figure className={styles.main}>
          <img
            src={images.salonArchitecture}
            alt="Jasna architektura salonu Studio Barber: wysokie okna, kamień, drewno i czarne fotele."
          />
        </figure>
        <figure className={styles.sideA}>
          <img
            src={images.salonChair}
            alt="Czarny fotel i lustro w dziennym świetle Studio Barber."
          />
        </figure>
        <figure className={styles.sideB}>
          <img
            src={images.heroSalon}
            alt="Stanowiska barberskie w dziennym świetle."
          />
        </figure>
      </div>
    </section>
  );
}
