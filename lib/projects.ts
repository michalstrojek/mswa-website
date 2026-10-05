export type Project = {
  id: string;
  slug: string;
  name: string;
  category: string;
  /** Short line for older surfaces */
  direction: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  /** Internal demo / detail route — empty when unavailable */
  href: string;
  /** External live demo URL — empty until available */
  demoUrl: string;
  kind: "demo";
  /** Homepage editorial grid span */
  span: "1x1" | "2x2" | "2x1";
};

function project(
  partial: Omit<Project, "kind" | "direction" | "description"> & {
    direction?: string;
    description?: string;
  },
): Project {
  return {
    kind: "demo",
    direction: partial.direction ?? "",
    description: partial.description ?? "Projekt koncepcyjny MSWA.",
    ...partial,
  };
}

/**
 * Homepage portfolio — 12 conceptual projects in display order.
 * AirKlim is intentionally excluded.
 */
export const portfolioProjects: Project[] = [
  project({
    id: "solea",
    slug: "solea",
    name: "SOLÉA",
    category: "Salon fryzjerski",
    image: "/images/solea.jpg",
    imageAlt: "SOLÉA — ciepły, elegancki kierunek beauty",
    imagePosition: "50% 28%",
    href: "/projekty/solea-hair-studio",
    demoUrl: "",
    span: "2x2",
  }),
  project({
    id: "nova-studio",
    slug: "nova-studio",
    name: "NOVA STUDIO",
    category: "Salon fryzjerski",
    image: "/images/nova-studio.jpg",
    imageAlt: "NOVA STUDIO — nowoczesny, editorial beauty",
    imagePosition: "50% 18%",
    href: "/projekty/nova-studio",
    demoUrl: "",
    span: "1x1",
  }),
  project({
    id: "atelier",
    slug: "atelier",
    name: "ATELIER",
    category: "Barbershop",
    image: "/images/atelier.jpg",
    imageAlt: "ATELIER BARBERSHOP — elegancki, precyzyjny kierunek",
    imagePosition: "55% 45%",
    href: "/projekty/atelier",
    demoUrl: "",
    span: "1x1",
  }),
  project({
    id: "cutline",
    slug: "cutline",
    name: "CUTLINE",
    category: "Barbershop",
    image: "/images/cutline.jpg",
    imageAlt: "CUTLINE — ciemny, klasyczny barbershop",
    imagePosition: "50% 32%",
    href: "/projekty/cutline",
    demoUrl: "",
    span: "2x1",
  }),
  project({
    id: "detailer",
    slug: "detailer",
    name: "CarSpa Detailing",
    category: "Auto detailing",
    image: "/images/detailer.jpg",
    imageAlt: "CarSpa Detailing — ciemny, automotive kierunek",
    imagePosition: "55% 40%",
    href: "",
    demoUrl: "/demos/detailer",
    span: "1x1",
  }),
  project({
    id: "masaz",
    slug: "masaz",
    name: "Dotyk Równowagi",
    category: "Studio masażu",
    image: "/images/masaz.png",
    imageAlt: "Dotyk Równowagi — spokojny, naturalny kierunek",
    imagePosition: "50% 35%",
    href: "",
    demoUrl: "/demos/masaz",
    span: "1x1",
  }),
  project({
    id: "kosmetyczka-paznokcie",
    slug: "kosmetyczka-paznokcie",
    name: "NÉRA Nails",
    category: "Studio paznokci",
    image: "/images/kosmetyczka-paznokcie.jpg",
    imageAlt: "NÉRA Nails — refined beauty",
    imagePosition: "50% 40%",
    href: "",
    demoUrl: "/demos/paznokcie",
    span: "1x1",
  }),
  project({
    id: "kosmetyczka",
    slug: "kosmetyczka",
    name: "AURA Beauty",
    category: "Salon kosmetyczny",
    image: "/images/kosmetyczka.jpg",
    imageAlt: "AURA Beauty — miękki, premium look",
    imagePosition: "50% 30%",
    href: "",
    demoUrl: "/demos/kosmetyczka",
    span: "2x2",
  }),
  project({
    id: "restauracja-elegancka",
    slug: "restauracja-elegancka",
    name: "VELORA",
    category: "Restauracja elegancka",
    image: "/images/restauracja-elegancka.jpg",
    imageAlt: "VELORA — dark hospitality",
    imagePosition: "50% 40%",
    href: "",
    demoUrl: "/demos/restauracja-elegancka",
    span: "1x1",
  }),
  project({
    id: "restauracja-wloska",
    slug: "restauracja-wloska",
    name: "LUCENTE",
    category: "Kuchnia włoska",
    image: "/images/restauracja-wloska.jpg",
    imageAlt: "LUCENTE — ciepły, food-led kierunek",
    imagePosition: "50% 45%",
    href: "",
    demoUrl: "/demos/restauracja-wloska",
    span: "1x1",
  }),
  project({
    id: "budowlaniec",
    slug: "budowlaniec",
    name: "Dal-Mar Bud",
    category: "Remonty i wykończenia",
    image: "/images/budowlaniec.jpg",
    imageAlt: "Dal-Mar Bud — industrialny kierunek",
    imagePosition: "50% 35%",
    href: "",
    demoUrl: "/demos/budowlaniec",
    span: "1x1",
  }),
  project({
    id: "elektryk",
    slug: "elektryk",
    name: "Elektro-Max",
    category: "Usługi elektryczne",
    image: "/images/elektryk.jpg",
    imageAlt: "Elektro-Max — techniczny kierunek",
    imagePosition: "45% 40%",
    href: "",
    demoUrl: "/demos/elektryk",
    span: "2x1",
  }),
];

/** Existing live demo routes still available outside the homepage grid. */
const additionalDemos: Project[] = [
  project({
    id: "black-label",
    slug: "black-label",
    name: "BLACK LABEL",
    category: "Barbershop",
    image: "/images/black-label.jpg",
    imageAlt: "BLACK LABEL — elegancki, ciemny charakter",
    imagePosition: "50% 40%",
    href: "/projekty/black-label",
    demoUrl: "",
    span: "1x1",
  }),
  project({
    id: "the-barber",
    slug: "the-barber",
    name: "THE BARBER",
    category: "Barbershop",
    image: "/images/the-barber.jpg",
    imageAlt: "THE BARBER — mocna typografia i kontrast",
    imagePosition: "50% 45%",
    href: "/projekty/the-barber",
    demoUrl: "",
    span: "1x1",
  }),
  project({
    id: "studio-barber",
    slug: "studio-barber",
    name: "STUDIO BARBER",
    category: "Barbershop",
    image: "/images/studio-barber.jpg",
    imageAlt: "STUDIO BARBER — jasna, nowoczesna przestrzeń",
    imagePosition: "50% 40%",
    href: "/projekty/studio-barber",
    demoUrl: "",
    span: "1x1",
  }),
  project({
    id: "luna-studio",
    slug: "luna-studio",
    name: "LUNA STUDIO",
    category: "Salon fryzjerski",
    image: "/images/luna-studio.jpg",
    imageAlt: "LUNA STUDIO — jasny beauty editorial",
    imagePosition: "50% 40%",
    href: "/projekty/luna-studio",
    demoUrl: "",
    span: "1x1",
  }),
];

/** All known projects (portfolio + remaining demos). */
export const projects: Project[] = [...portfolioProjects, ...additionalDemos];

/** @deprecated Use portfolioProjects */
export const featuredProjects = portfolioProjects;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectHref(project: Project) {
  return project.demoUrl || project.href;
}

export function hasProjectLink(project: Project) {
  return Boolean(getProjectHref(project));
}

export function isExternalDemo(project: Project) {
  return Boolean(project.demoUrl);
}

export const projectSlugs = projects
  .filter((project) => project.href.startsWith("/projekty/"))
  .map((project) => project.slug);
