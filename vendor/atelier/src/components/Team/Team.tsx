import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";
import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import { withBase } from "../../lib/asset";
import {
  RevealClip,
  RevealDraw,
  RevealFade,
  RevealLine,
  RevealShutter,
} from "../../lib/reveal";
import styles from "./Team.module.css";

const barbers = [
  {
    id: "kuba",
    name: "Kuba",
    specialty: "Fade / krótkie formy",
    cta: "Umów wizytę z Kubą",
    src: withBase("/images/team-kuba.jpg"),
    alt: "Kuba przy fotelu — fade i krótkie formy.",
    href: booking.barbers.kuba,
    className: "kuba",
    parallax: [-28, 18] as const,
  },
  {
    id: "michal",
    name: "Michał",
    specialty: "Klasyczne cięcia / broda",
    cta: "Umów wizytę z Michałem",
    src: withBase("/images/team-michal.jpg"),
    alt: "Michał przy stanowisku — klasyczne cięcia i broda.",
    href: booking.barbers.michal,
    className: "michal",
    parallax: [22, -16] as const,
  },
  {
    id: "oskar",
    name: "Oskar",
    specialty: "Tekstura / stylizacja",
    cta: "Umów wizytę z Oskarem",
    src: withBase("/images/team-oskar.jpg"),
    alt: "Oskar przy półce z produktami — tekstura i stylizacja.",
    href: booking.barbers.oskar,
    className: "oskar",
    parallax: [-18, 24] as const,
  },
  {
    id: "mateusz",
    name: "Mateusz",
    specialty: "Fade / broda",
    cta: "Umów wizytę z Mateuszem",
    src: withBase("/images/team-mateusz.jpg"),
    alt: "Mateusz w salonie — fade i broda.",
    href: booking.barbers.mateusz,
    className: "mateusz",
    parallax: [16, -22] as const,
  },
] as const;

function BarberCard({
  barber,
  index,
  progress,
  reduce,
}: {
  barber: (typeof barbers)[number];
  index: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const y = useTransform(
    progress,
    [0, 1],
    reduce ? [0, 0] : [...barber.parallax],
  );

  return (
    <motion.article
      className={`${styles.person} ${styles[barber.className]}`}
      style={{ y }}
    >
      <RevealShutter
        className={styles.frame}
        delay={index * 0.06}
        duration={1}
        hiddenClip="inset(12% 0 12% 0)"
      >
        <img src={barber.src} alt={barber.alt} />
        <span className={styles.frameBorder} aria-hidden="true" />
      </RevealShutter>

      <div className={styles.meta}>
        <span className={styles.metaMask}>
          <RevealLine as="h3" delay={0.15 + index * 0.05} duration={0.7}>
            {barber.name}
          </RevealLine>
        </span>
        <span className={styles.metaMask}>
          <RevealLine as="p" delay={0.22 + index * 0.05} duration={0.7}>
            {barber.specialty}
          </RevealLine>
        </span>
        <RevealFade delay={0.35 + index * 0.05} duration={0.5}>
          <Cta href={barber.href} variant="text">
            {barber.cta}
          </Cta>
        </RevealFade>
      </div>
    </motion.article>
  );
}

export function Team() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section className={styles.section} id="zespol" ref={sectionRef}>
      <div className={styles.intro}>
        <div>
          <p className={styles.kicker}>
            Zespół
            <RevealDraw className={styles.kickerRule} />
          </p>
          <h2 className={styles.headline}>
            <span className={styles.lineMask}>
              <RevealLine className={styles.line} delay={0.12}>
                Ludzie,
              </RevealLine>
            </span>
            <span className={styles.lineMask}>
              <RevealLine className={styles.line} delay={0.24}>
                do których się wraca.
              </RevealLine>
            </span>
          </h2>
        </div>
        <RevealClip as="p" className={styles.lead} delay={0.28} duration={0.7}>
          Każdy ma swój styl, doświadczenie i sposób pracy.
          <br />
          Znajdź barbera, który najlepiej pasuje do Ciebie.
        </RevealClip>
      </div>

      <div className={styles.grid}>
        {barbers.map((barber, index) => (
          <BarberCard
            key={barber.id}
            barber={barber}
            index={index}
            progress={scrollYProgress}
            reduce={reduce}
          />
        ))}
      </div>
    </section>
  );
}
