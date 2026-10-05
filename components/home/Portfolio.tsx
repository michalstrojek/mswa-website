"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import gsap from "gsap";
import { Reveal } from "@/components/site/Reveal";
import { SectionLabel } from "@/components/site/SectionLabel";
import {
  getProjectHref,
  hasProjectLink,
  isExternalDemo,
  portfolioProjects,
  type Project,
} from "@/lib/projects";

/**
 * Desktop-only vertical offsets for equal-size tiles.
 * Creates an editorial scatter without changing tile dimensions or causing overlap.
 */
const desktopScatter = [
  "mt-0 lg:mt-0",
  "mt-4 lg:mt-10",
  "mt-0 lg:mt-4",
  "mt-5 lg:mt-8",
  "mt-0 lg:mt-2",
  "mt-4 lg:mt-12",
  "mt-0 lg:mt-6",
  "mt-5 lg:mt-11",
  "mt-0 lg:mt-1",
  "mt-4 lg:mt-9",
  "mt-0 lg:mt-3",
  "mt-5 lg:mt-7",
] as const;

/** Mobile page stagger — keeps the asymmetric 2-col look within each 2×2 page. */
const mobileScatter = [
  "mt-0",
  "mt-7",
  "mt-2",
  "mt-9",
] as const;

const MOBILE_PAGE_SIZE = 4;

function gridColumns() {
  if (typeof window === "undefined") return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 768) return 3;
  return 2;
}

function chunkProjects(projects: Project[], size: number) {
  const pages: Project[][] = [];
  for (let i = 0; i < projects.length; i += size) {
    pages.push(projects.slice(i, i + size));
  }
  return pages;
}

function ProjectTile({ project }: { project: Project }) {
  const href = getProjectHref(project);
  const linked = hasProjectLink(project);
  const external = isExternalDemo(project);

  const inner = (
    <>
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-elevated">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          className="object-cover transition-[transform,filter] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] group-hover:brightness-[1.04]"
          style={{ objectPosition: project.imagePosition }}
          sizes="(min-width: 1024px) 22vw, (min-width: 768px) 33vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/25 to-transparent opacity-80 transition-opacity duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-90" />
        <div className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
          <p className="text-[8px] tracking-[0.2em] text-accent uppercase sm:text-[9px] sm:tracking-[0.22em]">
            Projekt koncepcyjny
          </p>
          <h3 className="mt-1.5 font-serif text-[clamp(1.05rem,3.8vw,1.45rem)] leading-none transition-colors duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:text-text sm:mt-2">
            {project.name}
          </h3>
          <p className="mt-1 text-[9px] tracking-[0.16em] text-muted uppercase sm:mt-1.5 sm:text-[10px] sm:tracking-[0.18em]">
            {project.category}
          </p>
          {linked ? (
            <span className="mt-2.5 inline-flex translate-y-0.5 items-center gap-1.5 text-[11px] text-text/70 transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:text-text/90 sm:mt-3 sm:text-[12px] sm:text-text/0">
              Zobacz projekt
              <span aria-hidden>↗</span>
            </span>
          ) : (
            <span className="mt-2.5 block text-[11px] text-muted/80 sm:mt-3">
              Podgląd wkrótce
            </span>
          )}
        </div>
      </div>
    </>
  );

  const className = linked
    ? "group relative block w-full cursor-pointer overflow-hidden border border-line/70 bg-elevated"
    : "relative block w-full overflow-hidden border border-line/70 bg-elevated";

  if (!linked) {
    return <article className={className}>{inner}</article>;
  }

  if (external) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.name} — zobacz projekt`}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} — zobacz projekt`}
    >
      {inner}
    </Link>
  );
}

function useTileReveal(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const grid = containerRef.current;
    if (!grid) return;

    const tiles = Array.from(
      grid.querySelectorAll<HTMLElement>("[data-portfolio-tile]"),
    );
    if (!tiles.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      gsap.set(tiles, { opacity: 1, y: 0, clearProps: "transform" });
      return;
    }

    const cols = gridColumns();
    const phaseA: HTMLElement[] = [];
    const phaseB: HTMLElement[] = [];

    tiles.forEach((tile, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      if ((row + col) % 2 === 0) phaseA.push(tile);
      else phaseB.push(tile);
    });

    gsap.set(tiles, { opacity: 0, y: 28, force3D: true });

    let played = false;
    const play = () => {
      if (played) return;
      played = true;

      gsap
        .timeline({ defaults: { ease: "power3.out", force3D: true } })
        .to(phaseA, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.07,
        })
        .to(
          phaseB,
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.07,
          },
          "-=0.45",
        );
    };

    const alreadyVisible =
      grid.getBoundingClientRect().top < window.innerHeight * 0.88;

    if (alreadyVisible) {
      play();
      return () => {
        gsap.killTweensOf(tiles);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        play();
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(grid);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(tiles);
    };
  }, [containerRef]);
}

export function Portfolio() {
  const desktopGridRef = useRef<HTMLDivElement>(null);
  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const pages = useMemo(
    () => chunkProjects(portfolioProjects, MOBILE_PAGE_SIZE),
    [],
  );
  const pageCount = pages.length;

  useTileReveal(desktopGridRef);

  // Mobile: reveal tiles when the carousel enters view / page changes.
  useEffect(() => {
    const track = mobileTrackRef.current;
    if (!track) return;

    const tiles = Array.from(
      track.querySelectorAll<HTMLElement>(
        `[data-portfolio-page="${page}"] [data-portfolio-tile]`,
      ),
    );
    if (!tiles.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(tiles, { opacity: 1, y: 0 });
      return;
    }

    gsap.fromTo(
      tiles,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.06,
        ease: "power3.out",
        force3D: true,
      },
    );

    return () => {
      gsap.killTweensOf(tiles);
    };
  }, [page]);

  const goPrev = () => setPage((p) => Math.max(0, p - 1));
  const goNext = () => setPage((p) => Math.min(pageCount - 1, p + 1));

  return (
    <section id="portfolio" className="site-pad scroll-mt-24 md:px-10 lg:px-16">
      <div className="site-shell site-section-y border-t border-line md:pt-20 md:pb-20 lg:pt-24 lg:pb-24">
        <Reveal>
          <div className="max-w-2xl">
            <SectionLabel>Portfolio</SectionLabel>
            <h2 className="mt-5 font-serif text-[clamp(2.05rem,5.8vw,3.25rem)] leading-[1.12] font-normal">
              Każda firma ma inny charakter.
              <br />
              Strona też powinna.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted sm:mt-6">
              Każdy projekt dopasowujemy do charakteru firmy, branży i jej
              klientów. Zobacz, jak różne mogą być strony tworzone przez MSWA.
            </p>
          </div>
        </Reveal>

        {/* ─── MOBILE: 2×2 pages + arrows ─── */}
        <div className="mt-10 md:hidden">
          <div className="overflow-hidden">
            <div
              ref={mobileTrackRef}
              className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translate3d(-${page * 100}%, 0, 0)` }}
            >
              {pages.map((pageProjects, pageIndex) => (
                <div
                  key={pageIndex}
                  data-portfolio-page={pageIndex}
                  className="grid w-full shrink-0 grid-cols-2 gap-x-3 gap-y-3 px-0"
                  aria-hidden={pageIndex !== page}
                >
                  {pageProjects.map((project, index) => (
                    <div
                      key={project.id}
                      data-portfolio-tile
                      className={`w-full will-change-transform ${mobileScatter[index] ?? ""}`}
                    >
                      <ProjectTile project={project} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={goPrev}
              disabled={page === 0}
              aria-label="Poprzednie projekty"
              className="inline-flex h-11 w-11 items-center justify-center border border-line/80 text-text transition-colors duration-300 enabled:hover:border-text/50 enabled:hover:bg-text/[0.03] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <span aria-hidden className="text-lg leading-none">
                ←
              </span>
            </button>

            <div
              className="flex items-center gap-2"
              aria-label={`Strona ${page + 1} z ${pageCount}`}
            >
              {pages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setPage(i)}
                  aria-label={`Przejdź do strony ${i + 1}`}
                  aria-current={i === page ? "true" : undefined}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-6 bg-accent"
                      : "w-1.5 bg-text/25 hover:bg-text/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              disabled={page >= pageCount - 1}
              aria-label="Następne projekty"
              className="inline-flex h-11 w-11 items-center justify-center border border-line/80 text-text transition-colors duration-300 enabled:hover:border-text/50 enabled:hover:bg-text/[0.03] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <span aria-hidden className="text-lg leading-none">
                →
              </span>
            </button>
          </div>
        </div>

        {/* ─── md+: original full grid (unchanged) ─── */}
        <div
          ref={desktopGridRef}
          className="mt-16 hidden grid-cols-3 gap-5 md:grid lg:mx-auto lg:max-w-[1020px] lg:grid-cols-4 lg:gap-x-5 lg:gap-y-8 xl:max-w-[1100px] xl:gap-x-6 xl:gap-y-9"
        >
          {portfolioProjects.map((project, index) => (
            <div
              key={project.id}
              data-portfolio-tile
              className={`w-full will-change-transform ${desktopScatter[index] ?? ""}`}
            >
              <ProjectTile project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
