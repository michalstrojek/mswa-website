import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/components/projects/luna-studio/styles/tokens.css";
import "@/components/projects/luna-studio/styles/reset.css";
import "@/components/projects/luna-studio/styles/global.css";

const cormorant = localFont({
  src: [
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond[wght].ttf",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond-Italic[wght].ttf",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-luna-serif",
  display: "swap",
  // Match Google Fonts CSS used by standalone (no size-adjusted fallback metrics)
  adjustFontFallback: false,
});

const manrope = localFont({
  src: "../../../fonts/manrope/Manrope[wght].ttf",
  weight: "400 600",
  variable: "--font-luna-sans",
  display: "swap",
  adjustFontFallback: false,
});

const greatVibes = localFont({
  src: "../../../fonts/great-vibes/GreatVibes-Regular.ttf",
  weight: "400",
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
