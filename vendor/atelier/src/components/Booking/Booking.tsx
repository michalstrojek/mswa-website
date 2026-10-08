import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import { RevealClip, RevealLine } from "../../lib/reveal";
import styles from "./Booking.module.css";

const lines = [
  ["Dobry", "dzień"],
  ["zaczyna", "się"],
  ["od", "dobrego", "cięcia."],
] as const;

export function Booking() {
  return (
    <section className={styles.section}>
      <h2 className={styles.headline}>
        {lines.map((line, lineIndex) => {
          const priorWords = lines
            .slice(0, lineIndex)
            .reduce((total, words) => total + words.length, 0);

          return (
            <span className={styles.lineMask} key={line.join("-")}>
              <span className={styles.line}>
                {line.map((word, wordIndex) => (
                  <RevealLine
                    key={word}
                    className={styles.word}
                    delay={0.08 + (priorWords + wordIndex) * 0.1}
                    duration={0.8}
                  >
                    {word}
                  </RevealLine>
                ))}
              </span>
            </span>
          );
        })}
      </h2>

      <RevealClip className={styles.action} delay={0.55} duration={0.75}>
        <p className={styles.kicker}>
          Rezerwacja
          <span className={styles.kickerRule} />
        </p>
        <p className={styles.lead}>
          Wybierz swojego barbera,
          <br />
          znajdź termin i zarezerwuj
          <br />
          wizytę przez Booksy.
        </p>
        <Cta href={booking.main} variant="solidDark" magnetic>
          Umów wizytę
        </Cta>
        <p className={styles.note}>Rezerwacja online / Booksy</p>
      </RevealClip>
    </section>
  );
}
