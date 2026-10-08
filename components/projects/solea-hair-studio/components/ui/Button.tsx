"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";
import {
  isDemoExternalBookingUrl,
  notifyDemoBooking,
} from "@/lib/demo-booking";

type Variant = "primary" | "light" | "ghost" | "text";

type ButtonProps = {
  href?: string;
  variant?: Variant;
  external?: boolean;
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const styles: Record<Variant, string> = {
  primary:
    "group/btn inline-flex items-center justify-center gap-2 rounded-full bg-taupe-deep px-6 py-3 text-[11px] font-medium tracking-[0.18em] text-ivory uppercase transition-[background,letter-spacing,gap,transform] duration-500 ease-out hover:bg-taupe hover:tracking-[0.22em] hover:gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory",
  light:
    "group/btn inline-flex items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3 text-[11px] font-medium tracking-[0.18em] text-taupe-deep uppercase transition-[background,letter-spacing,gap] duration-500 ease-out hover:bg-cream hover:tracking-[0.22em] hover:gap-3.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ivory",
  ghost:
    "group/btn inline-flex items-center justify-center gap-2 rounded-full border border-current/30 bg-transparent px-6 py-3 text-[11px] font-medium tracking-[0.16em] uppercase transition-[gap,border-color,background] duration-500 ease-out hover:gap-3.5 hover:border-current/70 hover:bg-current/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
  text: "group/btn relative inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase transition-[gap,letter-spacing,color] duration-500 ease-out hover:gap-3.5 hover:tracking-[0.22em] after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 after:ease-out hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current",
};

export function Button({
  href,
  variant = "primary",
  external,
  children,
  className = "",
  onClick,
  ...props
}: ButtonProps) {
  const cls = `${styles[variant]} ${className}`.trim();

  if (href && isDemoExternalBookingUrl(href)) {
    return (
      <button
        type="button"
        className={cls}
        title="Demonstracyjna rezerwacja"
        aria-haspopup="dialog"
        onClick={(event) => {
          onClick?.(event);
          notifyDemoBooking();
        }}
        {...props}
      >
        {children}
      </button>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
