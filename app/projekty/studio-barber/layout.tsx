import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "@/components/projects/studio-barber/styles/tokens.css";
import "@/components/projects/studio-barber/styles/reset.css";
import "@/components/projects/studio-barber/styles/global.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  // Match standalone Google Fonts URL: upright 400/500/600 only (no italic)
  weight: ["400", "500", "600"],
  style: ["normal"],
  variable: "--font-sb-serif",
  display: "swap",
  adjustFontFallback: false,
});

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-sb-sans",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Studio Barber — Warsaw",
  description:
    "Dobre cięcie. Dobry serwis. Jasne zasady. Wracasz, bo działa.",
};

export default function StudioBarberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${cormorant.variable} ${outfit.variable}`}>{children}</div>
  );
}
