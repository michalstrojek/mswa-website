export const BOOKSY_URL = "https://booksy.com/en-pl/";

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

export function booksyProps(href: string = bookingLinks.general) {
  return externalLinkProps(href);
}

export function instagramProps() {
  return externalLinkProps(INSTAGRAM_URL);
}
