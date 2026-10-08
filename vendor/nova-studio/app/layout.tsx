import type { Metadata } from "next";
import { Cormorant_Garamond, Great_Vibes, Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const display = Oswald({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-serif",
  style: ["italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const script = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "NOVA STUDIO — Więcej niż fryzura",
  description:
    "Kolor. Charakter. Ty. Salon fryzjerski NOVA STUDIO w Warszawie — cięcie, koloryzacja, pielęgnacja i stylizacja.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${display.variable} ${serif.variable} ${script.variable}`}
    >
      <body className="bg-cream text-ink antialiased">{children}</body>
    </html>
  );
}
