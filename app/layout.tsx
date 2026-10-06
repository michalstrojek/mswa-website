import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import { HideDevIndicatorOnMobile } from "@/components/site/HideDevIndicatorOnMobile";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png?v=4", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-icon.png?v=4", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: site.title,
    description: site.description,
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className={`${outfit.variable} ${playfair.variable}`}>
      <body className="min-h-screen overflow-x-clip bg-bg font-sans text-text antialiased">
        <a
          href="#tresc"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-bg focus:px-4 focus:py-2"
        >
          Przejdź do treści
        </a>
        <HideDevIndicatorOnMobile />
        {children}
      </body>
    </html>
  );
}
