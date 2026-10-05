import { Button } from "../ui/Button";
import { bookingUrl } from "../../config/booking";
import { NAV, SITE } from "../../config/site";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <div
      id="mobile-nav"
      className={`fixed inset-0 z-[60] bg-ivory transition-transform duration-500 lg:hidden ${
        open ? "translate-x-0" : "pointer-events-none translate-x-full"
      }`}
      aria-hidden={!open}
    >
      <div className="flex h-full flex-col px-6 py-6">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl tracking-[0.28em] text-ink uppercase">
            {SITE.name}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[11px] tracking-[0.2em] text-ink uppercase"
            aria-label="Zamknij menu"
          >
            Zamknij
          </button>
        </div>

        <nav className="mt-16 flex flex-col gap-6" aria-label="Mobilne">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={onClose}
              className="font-display text-4xl text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-auto pb-8">
          <Button href={bookingUrl()} external className="w-full">
            Umów wizytę →
          </Button>
        </div>
      </div>
    </div>
  );
}
