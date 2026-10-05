import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Outfit,
} from "next/font/google";
import "@/components/projects/solea-hair-studio/solea-hair-studio.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-solea-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-solea-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  adjustFontFallback: false,
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-solea-script",
  weight: "400",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "SOLÉA Hair Studio",
  description:
    "SOLÉA Hair Studio — kolor, cięcie i pielęgnacja w harmonii z Twoim stylem życia. Premium salon fryzjerski dla kobiet.",
  icons: {
    icon: "/projects/solea-hair-studio/favicon.svg",
  },
};

export default function SoleaHairStudioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${outfit.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      {children}
    </div>
  );
}
