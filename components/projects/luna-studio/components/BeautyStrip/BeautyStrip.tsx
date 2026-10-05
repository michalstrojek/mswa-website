import { beautyStrip } from "../../data/content";
import { images } from "../../data/images";
import styles from "./BeautyStrip.module.css";

export default function BeautyStrip() {
  return (
    <section className={styles.strip} aria-label="Piękne włosy">
      <img
        className={styles.photo}
        src={images.beautyStrip}
        alt={beautyStrip.photoAlt}
        width={2000}
        height={900}
        loading="lazy"
      />
      <p className={styles.copy}>
        {beautyStrip.lines.map((line) => (
          <span key={line}>{line}</span>
        ))}
      </p>
    </section>
  );
}
