"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { heroImage } from "../content/gallery";
import { site } from "../content/site";
import { BookLink } from "../brand/BookLink";
import { CutReveal } from "../motion/CutReveal";

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const media = mediaRef.current;
    if (!section || !media) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (reduced) return;
          gsap.set(media, { y: self.progress * -28 });
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-split bg-ink text-ivory"
      aria-label="BLACK LABEL"
    >
      <div className="hero-split__copy">
        <p className="meta-label">
          {site.established}
          <span className="mx-2 text-brass" aria-hidden>
            ·
          </span>
          {site.location}
        </p>

        <h1 className="hero-split__title">
          <span>BLACK</span>
          <span>LABEL</span>
        </h1>

        <p className="hero-split__tag">{site.tagline}</p>
        <p className="hero-split__lead">{site.heroLead}</p>

        <div className="hero-split__actions">
          <BookLink className="editorial-link" />
          <a href="#o-nas" className="editorial-link editorial-link--quiet">
            Poznaj salon
          </a>
        </div>
      </div>

      <div className="hero-split__media">
        <CutReveal from="left" delay={0.12} className="h-full w-full">
          <div ref={mediaRef} className="hero-split__frame">
            <img
              src={heroImage}
              alt="Rytuał BLACK LABEL — precyzja, światło, rzemiosło"
              width={1800}
              height={1200}
              fetchPriority="high"
              className="hero-split__image"
            />
          </div>
        </CutReveal>
      </div>
    </section>
  );
}
