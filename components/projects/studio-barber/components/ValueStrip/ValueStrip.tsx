import { valueStrip } from "../../data/content";
import styles from "./ValueStrip.module.css";

export default function ValueStrip() {
  return (
    <section className={styles.strip} aria-label="Dlaczego my">
      <ul className={styles.row}>
        {valueStrip.map((item) => (
          <li key={item.n} className={styles.item}>
            <span className={styles.n}>{item.n}</span>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.body}>{item.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
