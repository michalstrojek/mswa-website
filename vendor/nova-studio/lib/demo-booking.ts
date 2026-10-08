/** Demo portfolio booking CTAs for MSWA static NOVA. */

export const DEMO_BOOKING_MESSAGE =
  "To demonstracyjna rezerwacja. W prawdziwym projekcie ten przycisk prowadziłby do systemu rezerwacji salonu (np. Booksy).";

export function isDemoExternalBookingUrl(
  url: string | null | undefined,
): boolean {
  if (url == null) return true;
  const trimmed = url.trim();
  if (!trimmed || trimmed === "#") return true;
  if (/placeholder/i.test(trimmed)) return true;

  try {
    const host = new URL(trimmed).hostname.replace(/^www\./, "").toLowerCase();
    return host === "booksy.com";
  } catch {
    return false;
  }
}

let toastTimer: ReturnType<typeof setTimeout> | undefined;

export function notifyDemoBooking() {
  if (typeof document === "undefined") return;

  const existing = document.getElementById("mswa-demo-booking-toast");
  const el =
    existing ??
    (() => {
      const node = document.createElement("div");
      node.id = "mswa-demo-booking-toast";
      node.setAttribute("role", "status");
      node.setAttribute("aria-live", "polite");
      Object.assign(node.style, {
        position: "fixed",
        left: "50%",
        bottom: "1.5rem",
        transform: "translateX(-50%)",
        zIndex: "2147483646",
        maxWidth: "min(24rem, calc(100vw - 2rem))",
        padding: "0.85rem 1.1rem",
        background: "rgba(17, 17, 17, 0.94)",
        color: "#f4f4f4",
        fontFamily: "system-ui, -apple-system, sans-serif",
        fontSize: "13px",
        lineHeight: "1.45",
        borderRadius: "10px",
        boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
        pointerEvents: "none",
      });
      document.body.appendChild(node);
      return node;
    })();

  el.textContent = DEMO_BOOKING_MESSAGE;
  el.style.display = "block";
  el.style.opacity = "1";

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.style.display = "none";
  }, 4800);
}
