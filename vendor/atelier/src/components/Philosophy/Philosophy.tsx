import { Cta } from "../Cta/Cta";
import { withBase } from "../../lib/asset";
import {
  RevealClip,
  RevealDraw,
  RevealFade,
  RevealLine,
  RevealShutter,
} from "../../lib/reveal";
import styles from "./Philosophy.module.css";

const frames = [
  {
    src: withBase("/images/filozofia-01.jpg"),
    alt: "Nożyczki i grzebień na ciemnym blacie.",
    caption: "Precyzja w każdym detalu.",
  },
  {
    src: withBase("/images/filozofia-02.jpg"),
    alt: "Ściana Atelier z wypukłym znakiem salonu.",
    caption: "Warszawa Est. 2026",
  },
  {
    src: withBase("/images/filozofia-03.jpg"),
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
          <RevealDraw className={styles.kickerRule} />
        </p>

        <h2 className={styles.headline}>
          <span className={styles.lineMask}>
            <RevealLine className={styles.line} delay={0.2}>
              Więcej niż
            </RevealLine>
          </span>
          <span className={styles.lineMask}>
            <RevealLine className={styles.line} delay={0.32}>
              barbershop.
            </RevealLine>
          </span>
        </h2>

        <RevealClip as="p" className={styles.lead} delay={0.4}>
          Tworzymy miejsce, w którym rzemiosło spotyka się z atmosferą
          i ludźmi, którzy cenią detal. Spokojne tempo, precyzyjna praca
          i uwaga, której nie da się przyspieszyć.
        </RevealClip>

        <RevealFade delay={0.55}>
          <Cta href="#zespol" variant="ghost">
            Poznaj nas
          </Cta>
        </RevealFade>
      </div>

      <div className={styles.strip}>
        {frames.map((frame, index) => (
          <figure className={styles.figure} key={frame.src}>
            <RevealShutter
              className={styles.shutter}
              delay={0.12 + index * 0.14}
            >
              <img src={frame.src} alt={frame.alt} />
            </RevealShutter>
            <RevealFade
              as="figcaption"
              delay={0.45 + index * 0.12}
              duration={0.65}
              y="100%"
            >
              {frame.caption}
            </RevealFade>
          </figure>
        ))}
      </div>
    </section>
  );
}
