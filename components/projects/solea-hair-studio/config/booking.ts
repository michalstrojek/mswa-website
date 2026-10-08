export const BOOKING = {
  /** Empty until a real salon Booksy URL is available (demo notice via Button). */
  booksyUrl: "",
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
