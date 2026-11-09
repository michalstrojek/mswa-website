import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/components/projects/studio-barber/styles/tokens.css";
import "@/components/projects/studio-barber/styles/reset.css";
import "@/components/projects/studio-barber/styles/global.css";

const cormorant = localFont({
  src: [
    {
      path: "../../../fonts/cormorant-garamond/CormorantGaramond[wght].ttf",
      weight: "400 600",
      style: "normal",
    },
  ],
  variable: "--font-sb-serif",
  display: "swap",
  adjustFontFallback: false,
});

const outfit = localFont({
  src: "../../../fonts/outfit/Outfit[wght].ttf",
  weight: "400 600",
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
