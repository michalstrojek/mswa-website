import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/components/projects/solea-hair-studio/solea-hair-studio.css";

const outfit = localFont({
  src: "../../../fonts/outfit/Outfit[wght].ttf",
  weight: "300 600",
  variable: "--font-solea-sans",
  display: "swap",
  adjustFontFallback: false,
});

const cormorant = localFont({
  src: [
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond[wght].ttf",
      weight: "400 700",
      style: "normal",
    },
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond-Italic[wght].ttf",
      weight: "400 700",
      style: "italic",
    },
  ],
  variable: "--font-solea-display",
  display: "swap",
  adjustFontFallback: false,
});

const greatVibes = localFont({
  src: "../../../fonts/great-vibes/GreatVibes-Regular.ttf",
  weight: "400",
  variable: "--font-solea-script",
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
