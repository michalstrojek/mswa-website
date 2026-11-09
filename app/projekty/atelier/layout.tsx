import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/components/projects/atelier/styles/tokens.css";
import "@/components/projects/atelier/styles/reset.css";
import "@/components/projects/atelier/styles/global.css";

const cormorant = localFont({
  src: [
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond[wght].ttf",
      weight: "300 500",
      style: "normal",
    },
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond-Italic[wght].ttf",
      weight: "300 500",
      style: "italic",
    },
  ],
  variable: "--font-atelier-serif",
  display: "swap",
  adjustFontFallback: false,
});

const outfit = localFont({
  src: "../../../fonts/outfit/Outfit[wght].ttf",
  weight: "300 500",
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
