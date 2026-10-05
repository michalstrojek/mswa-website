export const BOOKING = {
  booksyUrl: "https://booksy.com/pl-pl/",
  stylists: {
    maja: null,
    natalia: null,
    julia: null,
    lena: null,
    zosia: null,
  } as Record<string, string | null>,
};

export function bookingUrl(opts?: { stylist?: string }) {
  const deep = opts?.stylist ? BOOKING.stylists[opts.stylist] : null;
  return deep || BOOKING.booksyUrl;
}
