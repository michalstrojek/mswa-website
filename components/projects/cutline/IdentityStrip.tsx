import { site } from './content/site'

export function IdentityStrip() {
  return (
    <section
      aria-label="Charakter CUTLINE"
      className="border-b border-walnut/15 bg-ivory"
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-0 gap-y-2.5 px-5 py-4 md:justify-between md:px-8 md:py-5">
        {site.identityStrip.map((item, index) => (
          <div key={item} className="flex items-center">
            {index > 0 ? (
              <span
                className="mx-3 hidden h-3 w-px bg-walnut/20 sm:mx-4 sm:block md:mx-0 md:hidden"
                aria-hidden="true"
              />
            ) : null}
            <p className="font-condensed text-[0.78rem] tracking-[0.2em] text-walnut/75 uppercase md:text-[0.85rem] md:tracking-[0.22em]">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
