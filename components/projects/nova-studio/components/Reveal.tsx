import {
  createElement,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type RevealVariant =
  | "up"
  | "up-sm"
  | "left"
  | "right"
  | "scale"
  | "clip-x"
  | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  as?: ElementType;
  show?: boolean;
  amount?: number;
  style?: CSSProperties;
};

/** Static pass-through — entrance motion deferred to a later polish pass. */
export function Reveal({
  children,
  className = "",
  as = "div",
  style,
}: RevealProps) {
  return createElement(as, { className: className || undefined, style }, children);
}
