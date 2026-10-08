import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Cta } from "../Cta/Cta";
import { booking } from "../../config/booking";
import { withBase } from "../../lib/asset";
import { easeCut, cutTransition } from "../../lib/motion";
import styles from "./Hero.module.css";

const headline = ["Dobry", "wygląd.", "Lepszy dzień."];

export function Hero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, 72],
  );

  return (
    <section
      ref={sectionRef}
      className={styles.hero}
      aria-label="Atelier Barbershop"
    >
      <div className={styles.media}>
        <motion.div
          className={styles.wipe}
          initial={reduce ? false : { clipPath: "inset(50% 0 50% 0)" }}
          animate={{ clipPath: "inset(0% 0 0% 0)" }}
          transition={cutTransition(0.05, 1.15)}
        >
          <motion.img
            src={withBase("/images/hero.jpg")}
            alt="Wnętrze Atelier Barbershop w Warszawie — fotele, lustra i dzienne światło."
            className={styles.photo}
            width={1920}
            height={1080}
            decoding="async"
            fetchPriority="high"
            style={{ y: parallaxY }}
            initial={reduce ? false : { scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={cutTransition(0.15, 1.35)}
          />
        </motion.div>
        <motion.div
          className={styles.gradient}
          initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={cutTransition(0.55, 0.95)}
        />
      </div>

      <div className={styles.content}>
        <motion.div
          className={styles.copy}
          initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={cutTransition(0.65, 0.9)}
        >
          <motion.p
            className={styles.meta}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.05, ease: easeCut }}
          >
            Warszawa / Est. 2026
          </motion.p>

          <h1 className={styles.headline}>
            {headline.map((line, index) => (
              <span className={styles.lineMask} key={line}>
                <motion.span
                  className={styles.line}
                  initial={reduce ? false : { y: "110%", clipPath: "inset(100% 0 0 0)" }}
                  animate={{ y: "0%", clipPath: "inset(0% 0 0 0)" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.85 + index * 0.14,
                    ease: easeCut,
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className={styles.lead}
            initial={reduce ? false : { opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            transition={cutTransition(1.35, 0.7)}
          >
            Nowoczesny barbershop w sercu Warszawy.
            <br />
            Precyzyjne cięcia, świetna atmosfera
            <br />
            i ludzie, którzy cenią jakość.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 1.55, ease: easeCut }}
          >
            <Cta href={booking.main}>Umów wizytę</Cta>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.footer}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.45, ease: easeCut }}
        >
          <ol className={styles.pages} aria-hidden="true">
            <li className={styles.current}>
              01
              <span className={styles.pageRuleTrack}>
                <motion.span
                  className={styles.pageRuleFill}
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={cutTransition(1.5, 0.85)}
                />
              </span>
            </li>
            <li>02</li>
            <li>03</li>
          </ol>

          <p className={styles.aside}>
            Cięcie to więcej
            <br />
            niż fryzura.
            <span className={styles.asideRule} />
          </p>
        </motion.div>
      </div>
    </section>
  );
}
