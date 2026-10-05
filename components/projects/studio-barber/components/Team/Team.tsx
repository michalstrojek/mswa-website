import { bookingLinks, booksyProps } from "../../config/booking";
import { team } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.section} id="zespol" aria-label="Zespół">
      <div className={styles.intro}>
        <p className={styles.label}>{team.label}</p>
        <div className={styles.introCopy}>
          <h2 className={styles.lead}>{team.lead}</h2>
          <p className={styles.aside}>{team.aside}</p>
        </div>
      </div>

      <ul className={styles.grid}>
        {team.people.map((person) => (
          <li key={person.name} className={styles.card}>
            <div className={styles.frame}>
              <img
                className={styles.photo}
                src={images[person.key]}
                alt={person.alt}
              />
            </div>
            <div className={styles.meta}>
              <p className={styles.name}>{person.name}</p>
              <p className={styles.focus}>{person.focus}</p>
              <a
                className={styles.link}
                {...booksyProps(bookingLinks[person.bookingId])}
              >
                {team.book}
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
