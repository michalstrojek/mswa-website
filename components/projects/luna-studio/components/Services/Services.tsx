import { services } from "../../data/content";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section className={styles.section} id="uslugi" aria-label="Usługi">
      <div className={styles.intro}>
        <p className={styles.label}>{services.label}</p>
        <h2 className={styles.headline}>
          {services.headline.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h2>
        <p className={styles.aside}>{services.aside}</p>
      </div>

      <ul className={styles.list}>
        {services.items.map((item) => (
          <li
            key={item.name}
            className={styles.row}
            id={"id" in item ? item.id : undefined}
          >
            <span className={styles.num}>{item.num}</span>
            <div className={styles.copy}>
              <h3 className={styles.name}>{item.name}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
            <span className={styles.arrow} aria-hidden="true">
              →
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
