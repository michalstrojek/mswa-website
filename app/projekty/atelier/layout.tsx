import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "@/components/projects/atelier/styles/tokens.css";
import "@/components/projects/atelier/styles/reset.css";
import "@/components/projects/atelier/styles/global.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  // Match standalone: 300/400/500 + italic 300/400
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-atelier-serif",
  display: "swap",
  adjustFontFallback: false,
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  variable: "--font-atelier-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "ATELIER Barbershop — Warszawa",
  description: "ATELIER Barbershop — nowoczesny barbershop w sercu Warszawy.",
};

export default function AtelierLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${cormorant.variable} ${outfit.variable}`}>{children}</div>
  );
}
