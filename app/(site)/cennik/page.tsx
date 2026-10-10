import type { Metadata } from "next";
import { Button } from "@/components/site/Button";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import { pricingPage } from "@/lib/pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Cennik — ${site.name}`,
  description:
    "Jasny cennik stron internetowych MSWA. Strona firmowa 1 500 zł oraz opcjonalne MSWA Hosting i MSWA Care.",
};

export default function PricingPage() {
  const { hero, website, extensions, subscriptions } = pricingPage;

  return (
    <article>
      {/* Hero */}
      <section className="site-pad pt-36 pb-16 md:px-10 md:pt-44 md:pb-20 lg:px-16 lg:pt-48 lg:pb-24">
        <div className="site-shell max-w-3xl">
          <Reveal>
            <SectionLabel>{hero.eyebrow}</SectionLabel>
            <h1 className="mt-5 font-serif text-[clamp(2.4rem,7vw,3.75rem)] leading-[1.08] font-normal">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-[17px]">
              {hero.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Strona firmowa */}
      <section className="site-pad border-t border-line md:px-10 lg:px-16">
        <div className="site-shell site-section-y md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionLabel>{website.eyebrow}</SectionLabel>
              <p className="mt-6 font-serif text-[clamp(2.4rem,8vw,3.6rem)] leading-none tracking-[-0.02em]">
                {website.price}
              </p>
              <p className="mt-3 text-[12px] tracking-[0.08em] text-muted/70">
                {website.priceNote}
              </p>
              <p className="mt-7 max-w-sm text-[15px] leading-relaxed text-muted">
                {website.lead}
              </p>
            </Reveal>

            <div className="lg:col-span-7">
              <ul className="divide-y divide-line border-y border-line">
                {website.included.map((item, index) => (
                  <Reveal key={item} delay={`${Math.min(index, 12) * 40}ms`}>
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
                {website.domainNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rozszerzenia */}
      <section className="site-pad border-t border-line md:px-10 lg:px-16">
        <div className="site-shell site-section-y md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
          <Reveal>
            <SectionLabel>{extensions.eyebrow}</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.05rem,5.5vw,3.15rem)] leading-[1.12] font-normal">
              {extensions.title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              {extensions.lead}
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-0 border-t border-line sm:mt-12 md:mt-14 md:grid-cols-2 md:gap-x-10 lg:gap-x-16">
            {extensions.items.map((item, index) => (
              <Reveal key={item.name} delay={`${(index % 6) * 35}ms`}>
                <li className="flex items-baseline justify-between gap-4 border-b border-line py-4 text-[15px] leading-snug">
                  <span className="min-w-0 flex-1 text-text/90">{item.name}</span>
                  <span className="shrink-0 whitespace-nowrap text-[13px] tracking-[0.04em] text-accent">
                    {item.price}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <p className="mt-8 max-w-2xl text-[13px] leading-relaxed text-muted/70 md:mt-10">
            {extensions.scopeNote}
          </p>
          <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-muted">
            {extensions.footnote}
          </p>
          <p className="mt-3 max-w-2xl text-[12px] leading-relaxed text-muted/70">
            {extensions.externalFeesNote}
          </p>
        </div>
      </section>

      {/* Abonamenty */}
      <section className="site-pad border-t border-line md:px-10 lg:px-16">
        <div className="site-shell site-section-y md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
          <Reveal>
            <SectionLabel>{subscriptions.eyebrow}</SectionLabel>
            <h2 className="mt-5 max-w-2xl font-serif text-[clamp(2.05rem,5.5vw,3.15rem)] leading-[1.12] font-normal">
              {subscriptions.title}
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
              {subscriptions.lead}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-6 lg:gap-8">
            {subscriptions.plans.map((plan, planIndex) => (
              <Reveal key={plan.name} delay={`${planIndex * 70}ms`}>
                <div className="flex h-full flex-col border border-line px-5 py-7 sm:px-6 md:py-8">
                  <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
                    {plan.name}
                  </p>
                  <p className="mt-5 font-serif text-[clamp(2.15rem,6vw,2.75rem)] leading-none text-text/90">
                    {plan.price}
                    <span className="ml-2 text-[0.85rem] tracking-[0.08em] text-muted">
                      {plan.priceSuffix}
                    </span>
                  </p>
                  <p className="mt-5 text-[15px] leading-relaxed text-muted">
                    {plan.lead}
                  </p>
                  <ul className="mt-6 flex-1 divide-y divide-line border-y border-line">
                    {plan.included.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-4 py-3.5 text-[15px] leading-relaxed text-text/90"
                      >
                        <span
                          className="mt-2 h-px w-4 shrink-0 bg-accent"
                          aria-hidden
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[12px] leading-relaxed text-muted/70">
                    {plan.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 max-w-2xl space-y-2 md:mt-10">
            {subscriptions.sharedNotes.map((note) => (
              <li
                key={note}
                className="text-[13px] leading-relaxed text-muted/80"
              >
                {note}
              </li>
            ))}
          </ul>

          <div className="mt-8 md:mt-10">
            <Button href={subscriptions.ctaHref}>
              {subscriptions.ctaLabel}
              <span className="arrow-shift" aria-hidden>
                →
              </span>
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}
