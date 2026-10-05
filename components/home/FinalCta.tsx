import { ContactForm } from "@/components/home/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { contactForm } from "@/lib/contact";
import { site } from "@/lib/site";

export function FinalCta() {
  return (
    <section id="kontakt" className="site-pad scroll-mt-24 md:px-10 lg:px-16">
      <div className="site-shell site-section-y border-t border-line md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-x-12 xl:gap-x-16">
          <div className="lg:col-span-5">
            <Reveal variant="up">
              <SectionLabel>Zacznijmy</SectionLabel>
              <h2 className="mt-5 max-w-[460px] font-serif text-[clamp(2.15rem,6vw,3.35rem)] leading-[1.12] font-normal sm:mt-6">
                Masz firmę.
                <br />
                Zróbmy jej dobrą stronę.
              </h2>
              <p className="mt-5 max-w-[400px] text-[15px] leading-relaxed text-muted sm:mt-6">
                Opowiedz nam krótko, czym się zajmujesz. Resztę możemy ustalić
                razem.
              </p>

              <ul className="mt-7 max-w-[400px] space-y-2.5 border-l border-accent/50 pl-4 sm:mt-8">
                {contactForm.reassurance.map((line) => (
                  <li
                    key={line}
                    className="text-[13px] leading-relaxed text-muted/90"
                  >
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-8 space-y-2 border-t border-line pt-7 text-[13px] text-muted sm:mt-10 sm:pt-8">
                <p>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-accent"
                  >
                    {site.email}
                  </a>
                </p>
                <p>
                  <a
                    href={site.instagram.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    Instagram {site.instagram.handle}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-6 lg:col-start-7">
            <Reveal delay="100ms" variant="up">
              <div className="border border-line bg-elevated/20 px-5 py-7 sm:px-7 sm:py-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
