import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/components/projects/nova-studio/nova-studio.css";

const inter = localFont({
  src: "../../../fonts/inter/Inter[opsz,wght].ttf",
  weight: "100 900",
  variable: "--font-nova-sans",
  display: "swap",
  adjustFontFallback: false,
});

const oswald = localFont({
  src: "../../../fonts/oswald/Oswald[wght].ttf",
  weight: "400 700",
  variable: "--font-nova-display",
  display: "swap",
  adjustFontFallback: false,
});

const cormorant = localFont({
  src: [
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond-Italic[wght].ttf",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-nova-serif",
  display: "swap",
  adjustFontFallback: false,
});

const greatVibes = localFont({
  src: "../../../fonts/great-vibes/GreatVibes-Regular.ttf",
  weight: "400",
  variable: "--font-nova-script",
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
