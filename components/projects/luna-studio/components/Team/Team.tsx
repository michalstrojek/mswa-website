"use client";

import { booksyProps } from "../../config/booking";
import { team } from "../../data/content";
import { images } from "../../data/images";
import styles from "./Team.module.css";

export default function Team() {
  return (
    <section className={styles.section} id="zespol" aria-label="Zespół">
      <div className={styles.intro}>
        <p className={styles.label}>{team.label}</p>
        <h2 className={styles.headline}>
          {team.headline.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.aside}>{team.aside}</p>
      </div>

      <ul className={styles.grid}>
        {team.people.map((person) => (
          <li key={person.name} className={styles.card}>
            <div className={styles.frame}>
              <img
                className={styles.photo}
                src={images[person.imageKey]}
                alt={person.alt}
                width={900}
                height={900}
                loading="lazy"
              />
            </div>
            <p className={styles.name}>{person.name}</p>
            <p className={styles.focus}>{person.focus}</p>
            <button className={styles.link} {...booksyProps()}>
              {team.book}
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
