import { valueStrip } from "../../data/content";
import styles from "./ValueStrip.module.css";

function Icon({ name }: { name: string }) {
  if (name === "spark") {
    return (
      <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true">
        <path d="M8 1.2l1.1 4.2H13.6L9.9 8.1l1.2 4.2L8 9.8 4.9 12.3 6.1 8.1 2.4 5.4h4.5z" />
      </svg>
    );
  }
  if (name === "heart") {
    return (
      <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true">
        <path d="M8 13.4S2.4 9.6 2.4 5.9A2.8 2.8 0 0 1 8 4.6a2.8 2.8 0 0 1 5.6 1.3c0 3.7-5.6 7.5-5.6 7.5z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className={styles.icon} aria-hidden="true">
      <path d="M4 12c3-1 5-3 6.5-6.5C8 7 6 9 4 12z" />
      <path d="M4 12c2-3 5-5 8-6" />
    </svg>
  );
}

export default function ValueStrip() {
  return (
    <section className={styles.strip} aria-label="Atuty">
      <ul className={styles.row}>
        {valueStrip.map((item) => (
          <li key={item.title} className={styles.item}>
            <h2 className={styles.title}>
              <Icon name={item.icon} />
              {item.title}
            </h2>
            <p className={styles.body}>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
