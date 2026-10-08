import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";
import { useRef, type MouseEvent, type RefObject } from "react";
import {
  isDemoExternalBookingUrl,
  notifyDemoBooking,
} from "../../lib/demo-booking";
import styles from "./Cta.module.css";

type CtaProps = {
  href: string;
  children: string;
  variant?: "solid" | "ghost" | "solidDark" | "text";
  magnetic?: boolean;
  onClick?: () => void;
};

function isExternal(href: string) {
  return href.startsWith("http");
}

export function Cta({
  href,
  children,
  variant = "solid",
  magnetic = false,
  onClick,
}: CtaProps) {
  const demoBooking = isDemoExternalBookingUrl(href);
  const external = !demoBooking && isExternal(href);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });

  const onMove = (
    event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    if (!magnetic || reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.22);
    y.set(offsetY * 0.28);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const className = `${styles.cta} ${styles[variant]}`;
  const motionStyle =
    magnetic && !reduce ? { x: springX, y: springY } : undefined;

  const body = (
    <>
      <span className={styles.ink} aria-hidden="true" />
      <span className={styles.label}>{children}</span>
      <span className={styles.arrow} aria-hidden="true">
        <svg viewBox="0 0 18 10" fill="none" aria-hidden="true">
          <path
            d="M0 5h16M12.5 1.5 17 5l-4.5 3.5"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </span>
    </>
  );

  if (demoBooking) {
    return (
      <motion.button
        ref={ref as RefObject<HTMLButtonElement | null>}
        type="button"
        className={className}
        title="Demonstracyjna rezerwacja"
        aria-haspopup="dialog"
        onClick={() => {
          onClick?.();
          notifyDemoBooking();
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={motionStyle}
      >
        {body}
      </motion.button>
    );
  }

  return (
    <motion.a
      ref={ref as RefObject<HTMLAnchorElement | null>}
      href={href}
      className={className}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={motionStyle}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {body}
    </motion.a>
  );
}
