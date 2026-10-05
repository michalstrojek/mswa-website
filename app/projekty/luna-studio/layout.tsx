import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Manrope,
} from "next/font/google";
import "@/components/projects/luna-studio/styles/tokens.css";
import "@/components/projects/luna-studio/styles/reset.css";
import "@/components/projects/luna-studio/styles/global.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-luna-serif",
  display: "swap",
  // Match Google Fonts CSS used by standalone (no size-adjusted fallback metrics)
  adjustFontFallback: false,
});

const manrope = Manrope({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-luna-sans",
  display: "swap",
  adjustFontFallback: false,
});

const greatVibes = Great_Vibes({
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
  variable: "--font-luna-script",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "LUNA STUDIO — Hair / Color / Care — Warszawa",
  description:
    "Precyzyjne cięcie, nowoczesna koloryzacja i spokojna atmosfera. Nowoczesny salon fryzjerski w Warszawie.",
};

export default function LunaStudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${cormorant.variable} ${manrope.variable} ${greatVibes.variable}`}
    >
      {children}
    </div>
  );
}
