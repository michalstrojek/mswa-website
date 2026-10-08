import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { withBase } from "../../lib/asset";
import {
  RevealClip,
  RevealLine,
  RevealShutter,
} from "../../lib/reveal";
import styles from "./Atmosfera.module.css";

export function Atmosfera() {
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(
    () =>
      typeof window === "undefined" ||
      window.matchMedia("(min-width: 900px)").matches,
  );
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const media = window.matchMedia("(min-width: 900px)");
    const sync = () => setDesktop(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const active = !reduce && desktop;

  const leftX = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.75],
    active ? [-36, 18, -12] : [0, 0, 0],
  );
  const rightX = useTransform(
    scrollYProgress,
    [0.15, 0.45, 0.75],
    active ? [36, -18, 12] : [0, 0, 0],
  );

  return (
    <section className={styles.section} aria-label="Atmosfera" ref={sectionRef}>
      <div className={styles.row}>
        <motion.figure className={styles.figure} style={{ x: leftX }}>
          <RevealShutter className={styles.shutter}>
            <img
              src={withBase("/images/atmosfera-hands.jpg")}
              alt="Detal pracy — nożyczki i faktura włosów."
            />
          </RevealShutter>
        </motion.figure>

        <div className={styles.quote}>
          <h2>
            <span className={styles.lineMask}>
              <RevealLine className={styles.line}>Detal</RevealLine>
            </span>
            <span className={styles.lineMask}>
              <RevealLine className={styles.line} delay={0.12}>
                robi różnicę.
              </RevealLine>
            </span>
          </h2>
          <RevealClip as="p" delay={0.22} duration={0.7}>
            Precyzja nie zaczyna się przy pierwszym cięciu.
            <br />
            Zaczyna się od uwagi.
          </RevealClip>
        </div>

        <motion.figure
          className={`${styles.figure} ${styles.right}`}
          style={{ x: rightX }}
        >
          <RevealShutter className={styles.shutter} delay={0.12}>
            <img
              src={withBase("/images/atmosfera-materials.jpg")}
              alt="Kosmetyki, lustro i materiały wnętrza Atelier."
            />
          </RevealShutter>
        </motion.figure>
      </div>
    </section>
  );
}
