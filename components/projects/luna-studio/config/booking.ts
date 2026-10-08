import { notifyDemoBooking } from "@/lib/demo-booking";

export const bookingLinks = {
  /** Empty = demo notice (no invented Booksy profile). */
  general: "",
  maja: "",
  ola: "",
  julia: "",
  instagram: "https://instagram.com/lunastudio.waw",
} as const;

export type StylistId = keyof Omit<
  typeof bookingLinks,
  "general" | "instagram"
>;

/** Props for demo booking `<button>` CTAs (same look as former Booksy links). */
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
