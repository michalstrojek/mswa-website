import {
  motion,
  useInView,
  useReducedMotion,
  type TargetAndTransition,
  type Transition,
} from "framer-motion";
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { easeCut } from "./motion";

/** Generous once-trigger — fires before entry and survives fast scroll */
export const revealViewport = {
  once: true,
  amount: 0.01,
  margin: "24% 0px 24% 0px",
} as const;

function hasEnteredOrPassed(el: Element) {
  const rect = el.getBoundingClientRect();
  const slack = window.innerHeight * 0.3;
  return rect.top < window.innerHeight + slack;
}

/**
 * One-shot reveal gate. Once true, never reverts — so fast scroll / leave /
 * refresh mid-page cannot leave content stuck in a hidden initial state.
 */
export function useReveal(settleMs = 1100) {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const [revealed, setRevealed] = useState(() => !!reduce);
  const [settled, setSettled] = useState(() => !!reduce);

  const inView = useInView(ref, revealViewport);

  useLayoutEffect(() => {
    if (reduce) {
      setRevealed(true);
      setSettled(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    if (hasEnteredOrPassed(el)) setRevealed(true);
  }, [reduce]);

  useEffect(() => {
    if (reduce || inView) setRevealed(true);
  }, [inView, reduce]);

  useEffect(() => {
    if (revealed || reduce) return;

    const check = () => {
      const el = ref.current;
      if (el && hasEnteredOrPassed(el)) setRevealed(true);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [revealed, reduce]);

  useEffect(() => {
    if (!revealed) return;
    if (reduce) {
      setSettled(true);
      return;
    }
    const id = window.setTimeout(() => setSettled(true), settleMs);
    return () => window.clearTimeout(id);
  }, [revealed, reduce, settleMs]);

  const revealedRef = useRef(revealed);
  revealedRef.current = revealed;

  return {
    ref,
    revealed: revealed || !!reduce,
    settled: settled || !!reduce,
    reduce: !!reduce,
    markSettled: () => setSettled(true),
    isRevealed: () => revealedRef.current || !!reduce,
  };
}

type RevealBaseProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  hidden: TargetAndTransition;
  visible: TargetAndTransition;
  settledStyle?: CSSProperties;
  as?: "span" | "div" | "p" | "h3" | "figcaption";
};

const motionTags = {
  span: motion.span,
  div: motion.div,
  p: motion.p,
  h3: motion.h3,
  figcaption: motion.figcaption,
} as const;

/** Controlled reveal — animate target stays visible after one-shot trigger */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.85,
  hidden,
  visible,
  settledStyle = { opacity: 1, transform: "none", clipPath: "none" },
  as = "span",
}: RevealBaseProps) {
  const settleMs = Math.round((duration + delay) * 1000) + 120;
  const { ref, revealed, settled, reduce, markSettled, isRevealed } =
    useReveal(settleMs);
  const Tag = motionTags[as];

  const transition: Transition = {
    duration: reduce ? 0 : duration,
    delay: reduce || settled ? 0 : delay,
    ease: easeCut,
  };

  return (
    <Tag
      ref={ref as never}
      className={className}
      data-reveal-settled={settled ? "true" : undefined}
      initial={reduce ? false : hidden}
      animate={revealed ? visible : hidden}
      transition={transition}
      style={settled ? settledStyle : undefined}
      onAnimationComplete={() => {
        if (isRevealed()) markSettled();
      }}
    >
      {children}
    </Tag>
  );
}

/** Editorial text rise through overflow mask */
export function RevealLine({
  children,
  className,
  delay = 0,
  duration = 0.85,
  as = "span",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "span" | "h3" | "p";
}) {
  return (
    <Reveal
      as={as}
      className={className}
      delay={delay}
      duration={duration}
      hidden={{ y: "110%" }}
      visible={{ y: "0%" }}
      settledStyle={{ transform: "none", opacity: 1 }}
    >
      {children}
    </Reveal>
  );
}

/** Clip wipe for body copy / blocks */
export function RevealClip({
  children,
  className,
  delay = 0,
  duration = 0.75,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "p" | "span";
}) {
  return (
    <Reveal
      as={as}
      className={className}
      delay={delay}
      duration={duration}
      hidden={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      visible={{ opacity: 1, clipPath: "inset(0% 0 0% 0)" }}
      settledStyle={{ opacity: 1, clipPath: "none", transform: "none" }}
    >
      {children}
    </Reveal>
  );
}

/** Soft opacity entrance */
export function RevealFade({
  children,
  className,
  delay = 0,
  duration = 0.55,
  as = "div",
  y = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  as?: "div" | "span" | "p" | "figcaption";
  y?: number | string;
}) {
  return (
    <Reveal
      as={as}
      className={className}
      delay={delay}
      duration={duration}
      hidden={{ opacity: 0, y }}
      visible={{ opacity: 1, y: 0 }}
      settledStyle={{ opacity: 1, transform: "none" }}
    >
      {children}
    </Reveal>
  );
}

/** Horizontal line draw */
export function RevealDraw({
  className,
  delay = 0,
  duration = 0.7,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <Reveal
      as="span"
      className={className}
      delay={delay}
      duration={duration}
      hidden={{ scaleX: 0 }}
      visible={{ scaleX: 1 }}
      settledStyle={{ transform: "none" }}
    >
      {null}
    </Reveal>
  );
}

/** Vertical shutter / letterbox clip for media */
export function RevealShutter({
  children,
  className,
  delay = 0,
  duration = 1.05,
  hiddenClip = "inset(50% 0 50% 0)",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  hiddenClip?: string;
}) {
  return (
    <Reveal
      as="div"
      className={className}
      delay={delay}
      duration={duration}
      hidden={{ clipPath: hiddenClip }}
      visible={{ clipPath: "inset(0% 0 0% 0)" }}
      settledStyle={{ clipPath: "none", transform: "none", opacity: 1 }}
    >
      {children}
    </Reveal>
  );
}
