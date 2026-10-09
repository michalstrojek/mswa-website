/**
 * Homepage device mockups — full-page layout screenshots (not hero crop photos).
 */

export type MockupDevice = "desktop" | "tablet" | "mobile";

export type SiteMockup = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  device: MockupDevice;
};

/**
 * Hero geometric fan — 5 equal desktop browser cards.
 * Pivot at bottom center; Soléa on top.
 */
export const heroMockups = {
  solea: {
    id: "solea",
    name: "SOLÉA",
    image: "/images/mockups/solea-desktop-hero.jpg",
    imageAlt: "SOLÉA — widok strony internetowej salonu fryzjerskiego",
    device: "desktop",
  },
  atelier: {
    id: "atelier",
    name: "ATELIER",
    image: "/images/mockups/atelier-desktop-hero.jpg",
    imageAlt: "ATELIER — widok strony internetowej barbershopu",
    device: "desktop",
  },
  lucente: {
    id: "lucente",
    name: "LUCENTE",
    image: "/images/mockups/lucente-desktop-hero.jpg",
    imageAlt: "LUCENTE — widok strony internetowej restauracji",
    device: "desktop",
  },
  detailer: {
    id: "detailer",
    name: "CarSpa Detailing",
    image: "/images/mockups/detailer-desktop-hero.jpg",
    imageAlt: "CarSpa Detailing — widok strony internetowej",
    device: "desktop",
  },
  velora: {
    id: "velora",
    name: "VELORA",
    image: "/images/mockups/velora-desktop-hero.jpg",
    imageAlt: "VELORA — widok strony internetowej restauracji",
    device: "desktop",
  },
  aura: {
    id: "aura",
    name: "AURA Beauty",
    image: "/images/mockups/aura-tablet.jpg",
    imageAlt: "AURA Beauty — widok strony na tablecie",
    device: "tablet",
  },
  elektryk: {
    id: "elektryk",
    name: "Elektro-Max",
    image: "/images/mockups/elektryk-mobile.jpg",
    imageAlt: "Elektro-Max — widok strony na telefonie",
    device: "mobile",
  },
} as const satisfies Record<string, SiteMockup>;

/** Showcase / MSWA section — projects not used in hero */
export const showcaseMockups = {
  nova: {
    id: "nova",
    name: "NOVA STUDIO",
    image: "/images/mockups/nova-desktop.jpg",
    imageAlt: "NOVA STUDIO — widok strony internetowej salonu",
    device: "desktop",
  },
  cutline: {
    id: "cutline",
    name: "CUTLINE",
    image: "/images/mockups/cutline-desktop.jpg",
    imageAlt: "CUTLINE — widok strony internetowej barbershopu",
    device: "desktop",
  },
  elektryk: {
    id: "elektryk",
    name: "Elektro-Max",
    image: "/images/mockups/elektryk-desktop.jpg",
    imageAlt: "Elektro-Max — widok strony internetowej elektryka",
    device: "desktop",
  },
  masaz: {
    id: "masaz",
    name: "Dotyk Równowagi",
    image: "/images/mockups/masaz-tablet.jpg",
    imageAlt: "Dotyk Równowagi — widok strony na tablecie",
    device: "tablet",
  },
  budowlaniec: {
    id: "budowlaniec",
    name: "Dal-Mar Bud",
    image: "/images/mockups/budowlaniec-mobile.jpg",
    imageAlt: "Dal-Mar Bud — widok strony na telefonie",
    device: "mobile",
  },
} as const satisfies Record<string, SiteMockup>;
