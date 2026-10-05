export const bookingLinks = {
  general: "https://booksy.com/pl-pl/",
  maja: "https://booksy.com/pl-pl/",
  ola: "https://booksy.com/pl-pl/",
  julia: "https://booksy.com/pl-pl/",
  instagram: "https://instagram.com/lunastudio.waw",
} as const;

export type StylistId = keyof Omit<
  typeof bookingLinks,
  "general" | "instagram"
>;

export function booksyProps(href: string = bookingLinks.general) {
  return {
    href,
    target: "_blank" as const,
    rel: "noopener noreferrer" as const,
  };
}
