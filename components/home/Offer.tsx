import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { SiteLink } from "@/components/site/SiteLink";
import {
  careOffer,
  hostingOffer,
  subscriptionNotes,
  websiteOffer,
} from "@/lib/pricing";

const subscriptionPlans = [hostingOffer, careOffer] as const;

export function Offer() {
  return (
    <section id="oferta" className="site-pad scroll-mt-24 md:px-10 lg:px-16">
      <div className="site-shell site-section-y border-t border-line md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <Reveal>
          <SectionLabel>Oferta</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.05rem,5.5vw,3.15rem)] leading-[1.12] font-normal">
            {websiteOffer.headline}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6">
            {websiteOffer.lead}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 sm:gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-16 lg:pt-16">
          <Reveal className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
              {websiteOffer.label}
            </p>

            <p className="mt-4 font-serif text-[clamp(3.6rem,14vw,5.5rem)] leading-none tracking-[-0.02em]">
              {websiteOffer.price}
            </p>
            <p className="mt-2 text-[12px] tracking-[0.08em] text-muted/70">
              {websiteOffer.priceNote}
            </p>
            <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-muted sm:mt-8">
              {websiteOffer.extendedNote}
            </p>
            <div className="mt-7 sm:mt-8">
              <Button href={websiteOffer.ctaHref}>
                {websiteOffer.ctaLabel}
                <span className="arrow-shift" aria-hidden>
                  →
                </span>
              </Button>
            </div>
            <div className="mt-4">
              <SiteLink
                href={websiteOffer.pricingHref}
                className="group inline-flex items-center gap-2 text-[11px] tracking-[0.16em] text-muted uppercase transition-colors duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-accent"
              >
                {websiteOffer.pricingLinkLabel}
                <span className="arrow-shift" aria-hidden>
                  →
                </span>
              </SiteLink>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {websiteOffer.included.map((item, index) => (
                <Reveal key={item} delay={`${index * 55}ms`}>
                  <li className="flex items-start gap-4 py-3.5 text-[15px] leading-relaxed text-text/90">
                    <span
                      className="mt-2 h-px w-4 shrink-0 bg-accent"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <p className="mt-5 max-w-md text-[12px] leading-relaxed text-muted/70">
              {websiteOffer.domainNote}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-10 md:mt-16 md:pt-12">
          <Reveal>
            <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
              {subscriptionNotes.sectionLabel}
            </p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted">
              {subscriptionNotes.sectionLead}
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2">
            {subscriptionPlans.map((plan, planIndex) => (
              <Reveal key={plan.label} delay={`${planIndex * 70}ms`}>
                <div className="flex h-full flex-col border border-line bg-elevated/30 px-5 py-6 sm:px-6">
                  <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
                    {plan.label}
                  </p>
                  <p className="mt-4 font-serif text-[2.15rem] leading-none text-text/90 md:text-[1.95rem]">
                    {plan.price}
                    <span className="ml-2 text-[0.8rem] tracking-[0.08em] text-muted">
                      {plan.priceSuffix}
                    </span>
                  </p>
                  <p className="mt-4 text-[14px] leading-relaxed text-muted">
                    {plan.lead}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-line pt-5">
                    {plan.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-[13px] leading-relaxed text-text/90"
                      >
                        <span
                          className="mt-2 h-px w-3 shrink-0 bg-accent"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[12px] leading-relaxed text-muted/70">
                    {plan.excludedNote}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-5 text-[12px] tracking-[0.08em] text-muted/70">
            {subscriptionNotes.optionalNote}
          </p>
        </div>
      </div>
    </section>
  );
}
