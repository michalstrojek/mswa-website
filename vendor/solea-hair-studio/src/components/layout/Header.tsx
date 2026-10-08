import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { bookingUrl } from '@/config/booking'
import { NAV, SITE } from '@/config/site'
import { MobileNav } from '@/components/layout/MobileNav'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-[450ms] ease-out ${
          scrolled
            ? 'border-b border-taupe-deep/10 bg-ivory/80 shadow-[0_1px_0_rgb(58_47_42_/_0.04)] backdrop-blur-md'
            : 'border-b border-transparent bg-transparent shadow-none backdrop-blur-0'
        }`}
      >
        <div className="mx-auto grid h-[4.5rem] max-w-[1440px] grid-cols-[1fr_auto] items-center px-6 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-10">
          <a href="#start" className="justify-self-start">
            <span
              className={`font-display text-[1.35rem] leading-none tracking-[0.28em] uppercase transition-colors duration-[450ms] ease-out ${
                scrolled ? 'text-ink' : 'text-ivory'
              }`}
            >
              {SITE.name}
            </span>
            <span
              className={`mt-1 block text-[9px] tracking-[0.38em] uppercase transition-colors duration-[450ms] ease-out ${
                scrolled ? 'text-ink-soft' : 'text-ivory/70'
              }`}
            >
              Hair Studio
            </span>
          </a>

          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Główne"
          >
            {NAV.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`nav-link relative text-[11px] tracking-[0.18em] uppercase transition-colors duration-[450ms] ease-out ${
                  scrolled
                    ? 'text-ink-soft hover:text-ink'
                    : 'text-ivory/80 hover:text-ivory'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden justify-self-end lg:block">
            <Button href={bookingUrl()} external variant={scrolled ? 'primary' : 'light'}>
              Umów wizytę →
            </Button>
          </div>

          <button
            type="button"
            className={`justify-self-end p-2 transition-colors duration-[450ms] ease-out lg:hidden ${
              scrolled ? 'text-ink' : 'text-ivory'
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-7 flex-col gap-1.5">
              <span className="block h-px w-full bg-current" />
              <span className="block h-px w-5 self-end bg-current" />
            </span>
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  )
}
