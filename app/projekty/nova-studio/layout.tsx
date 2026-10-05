import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Inter,
  Oswald,
} from "next/font/google";
import "@/components/projects/nova-studio/nova-studio.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nova-sans",
  display: "swap",
  adjustFontFallback: false,
});

const oswald = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nova-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nova-serif",
  style: ["italic"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-nova-script",
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "NOVA STUDIO — Więcej niż fryzura",
  description:
    "Kolor. Charakter. Ty. Salon fryzjerski NOVA STUDIO w Warszawie — cięcie, koloryzacja, pielęgnacja i stylizacja.",
};

export default function NovaStudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${inter.variable} ${oswald.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      {children}
    </div>
  );
}
