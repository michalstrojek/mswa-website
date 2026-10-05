import { contact } from "../lib/site";

export function Footer() {
  return (
    <footer id="kontakt" className="border-t border-line px-5 py-10 sm:px-8 lg:px-10 lg:py-12 xl:px-12">
      <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:items-start lg:gap-8">
        <div>
          <p className="text-[13px] font-semibold tracking-[0.28em] uppercase">
            Nova Studio
          </p>
          <p className="mt-1.5 text-[8px] tracking-[0.28em] uppercase text-muted">
            Hair / Color / Style
          </p>
        </div>

        <div className="text-[12px] leading-[1.7] text-muted">
          <p>{contact.address}</p>
          <p>{contact.city}</p>
        </div>

        <div className="text-[12px] leading-[1.7]">
          <a href={contact.phoneHref} className="block hover:opacity-60">
            {contact.phone}
          </a>
          <a href={`mailto:${contact.email}`} className="block text-muted hover:opacity-60">
            {contact.email}
          </a>
        </div>

        <div className="text-[12px] leading-[1.7] text-muted">
          {contact.hours.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end lg:gap-6">
          <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-[11px] tracking-[0.16em] uppercase lg:justify-end">
            {contact.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="text-[9px] leading-[1.55] tracking-[0.28em] uppercase text-muted lg:text-right">
            Good hair
            <br />
            brighter days
          </p>
        </div>
      </div>
    </footer>
  );
}
