import { notifyDemoBooking } from "@/lib/demo-booking";

/** Empty = demo notice (no invented Booksy profile). */
export const BOOKSY_URL = "";

export const INSTAGRAM_URL = "https://www.instagram.com/";

export const bookingLinks = {
  general: BOOKSY_URL,
  kuba: BOOKSY_URL,
  michal: BOOKSY_URL,
  oskar: BOOKSY_URL,
} as const;

export type BarberBookingId = keyof Omit<typeof bookingLinks, "general">;

export function externalLinkProps(href: string) {
  return {
    href,
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  };
}

/** Props for demo booking `<button>` CTAs. */
export function booksyProps(onAfterClick?: () => void) {
  return {
    type: "button" as const,
    title: "Demonstracyjna rezerwacja",
    "aria-haspopup": "dialog" as const,
    onClick: () => {
      onAfterClick?.();
      notifyDemoBooking();
    },
  };
}

export function instagramProps() {
  return externalLinkProps(INSTAGRAM_URL);
}
