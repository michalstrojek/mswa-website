import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import { images } from "../../data/images";
import styles from "./Team.module.css";

const barbers = [
  {
    id: "kuba",
    name: "Kuba",
    specialty: "Fade / krótkie formy",
    cta: "Umów wizytę z Kubą",
    src: images.teamKuba,
    alt: "Kuba przy fotelu — fade i krótkie formy.",
    href: booking.barbers.kuba,
    className: "kuba" as const,
  },
  {
    id: "michal",
    name: "Michał",
    specialty: "Klasyczne cięcia / broda",
    cta: "Umów wizytę z Michałem",
    src: images.teamMichal,
    alt: "Michał przy stanowisku — klasyczne cięcia i broda.",
    href: booking.barbers.michal,
    className: "michal" as const,
  },
  {
    id: "oskar",
    name: "Oskar",
    specialty: "Tekstura / stylizacja",
    cta: "Umów wizytę z Oskarem",
    src: images.teamOskar,
    alt: "Oskar przy półce z produktami — tekstura i stylizacja.",
    href: booking.barbers.oskar,
    className: "oskar" as const,
  },
  {
    id: "mateusz",
    name: "Mateusz",
    specialty: "Fade / broda",
    cta: "Umów wizytę z Mateuszem",
    src: images.teamMateusz,
    alt: "Mateusz w salonie — fade i broda.",
    href: booking.barbers.mateusz,
    className: "mateusz" as const,
  },
];

export function Team() {
  return (
    <section className={styles.section} id="zespol">
      <div className={styles.intro}>
        <div>
          <p className={styles.kicker}>
            Zespół
            <span className={styles.kickerRule} />
          </p>
          <h2 className={styles.headline}>
            Ludzie,
            <br />
            do których się wraca.
          </h2>
        </div>
        <p className={styles.lead}>
          Każdy ma swój styl, doświadczenie i sposób pracy.
          <br />
          Znajdź barbera, który najlepiej pasuje do Ciebie.
        </p>
      </div>

      <div className={styles.grid}>
        {barbers.map((barber) => (
          <article
            key={barber.id}
            className={`${styles.person} ${styles[barber.className]}`}
          >
            <div className={styles.frame}>
              <img src={barber.src} alt={barber.alt} />
            </div>
            <div className={styles.meta}>
              <h3>{barber.name}</h3>
              <p>{barber.specialty}</p>
              <Cta href={barber.href} variant="text">
                {barber.cta}
              </Cta>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
