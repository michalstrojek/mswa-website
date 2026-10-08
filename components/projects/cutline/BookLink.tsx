"use client";

import type { ReactNode } from "react";
import {
  isDemoExternalBookingUrl,
  notifyDemoBooking,
} from "@/lib/demo-booking";
import { getBooksyUrl, type BarberId } from "./content/site";

type BookLinkProps = {
  children: ReactNode;
  className?: string;
  barberId?: BarberId;
  onClick?: () => void;
};

/** Booking CTA — real Booksy when configured, otherwise demo notice. */
export function BookLink({
  children,
  className = "",
  barberId,
  onClick,
}: BookLinkProps) {
  const href = getBooksyUrl(barberId);

  if (isDemoExternalBookingUrl(href)) {
    return (
      <button
        type="button"
        className={className}
        title="Demonstracyjna rezerwacja"
        aria-haspopup="dialog"
        onClick={() => {
          onClick?.();
          notifyDemoBooking();
        }}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
