"use client";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import {
  isDemoExternalBookingUrl,
  notifyDemoBooking,
} from "@/lib/demo-booking";
import { site } from "../content/site";

type BookLinkProps = {
  className?: string;
  children?: ReactNode;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "type" | "children"
>;

/** CTA „Umów wizytę” — real Booksy when configured, otherwise demo notice. */
export function BookLink({
  className,
  children = site.bookLabel,
  onClick,
  ...props
}: BookLinkProps) {
  if (isDemoExternalBookingUrl(site.booksyUrl)) {
    return (
      <button
        type="button"
        className={className}
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

  return (
    <a
      href={site.booksyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </a>
  );
}
