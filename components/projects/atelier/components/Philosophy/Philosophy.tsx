import { Cta } from "../Cta/Cta";
import { images } from "../../data/images";
import styles from "./Philosophy.module.css";

const frames = [
  {
    src: images.filozofia01,
    alt: "Nożyczki i grzebień na ciemnym blacie.",
    caption: "Precyzja w każdym detalu.",
  },
  {
    src: images.filozofia02,
    alt: "Ściana Atelier z wypukłym znakiem salonu.",
    caption: "Warszawa Est. 2026",
  },
  {
    src: images.filozofia03,
    alt: "Kosmetyki do pielęgnacji i zieleń we wnętrzu.",
    caption: "Lepsi ludzie. Lepsze dni.",
  },
] as const;

export function Philosophy() {
  return (
    <section className={styles.section}>
      <div className={styles.copy}>
        <p className={styles.kicker}>
          Nasza filozofia
          <span className={styles.kickerRule} />
        </p>
        <h2 className={styles.headline}>
          Więcej niż
          <br />
          barbershop.
        </h2>
        <p className={styles.lead}>
          Tworzymy miejsce, w którym rzemiosło spotyka się z atmosferą
          i ludźmi, którzy cenią detal. Spokojne tempo, precyzyjna praca
          i uwaga, której nie da się przyspieszyć.
        </p>
        <Cta href="#zespol" variant="ghost">
          Poznaj nas
        </Cta>
      </div>

      <div className={styles.strip}>
        {frames.map((frame) => (
          <figure className={styles.figure} key={frame.src}>
            <img src={frame.src} alt={frame.alt} />
            <figcaption>{frame.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
