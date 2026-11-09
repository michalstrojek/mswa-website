import type { Metadata } from "next";
import localFont from "next/font/local";
import { HideDevIndicatorOnMobile } from "@/components/site/HideDevIndicatorOnMobile";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = localFont({
  src: "../fonts/outfit/Outfit[wght].ttf",
  weight: "100 900",
  variable: "--font-outfit",
  display: "swap",
});

const playfair = localFont({
  src: [
    {
      path: "../fonts/playfair-display/PlayfairDisplay[wght].ttf",
      weight: "400 600",
      style: "normal",
    },
    {
      path: "../fonts/playfair-display/PlayfairDisplay-Italic[wght].ttf",
      weight: "400 600",
      style: "italic",
    },
  ],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mswa.pl"),
  title: site.title,
  description: site.description,
  icons: {
    // v2 filenames bust Safari/Cloudflare favicon cache; sourced from public/brand/mswa-mark.jpg
    icon: [
      { url: "/favicon-mswa-v2.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-mswa-v2-48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-v2.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: [{ url: "/favicon-mswa-v2.png", type: "image/png" }],
    apple: [
      { url: "/apple-touch-icon-v2.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: site.title,
    description: site.description,
    url: "https://mswa.pl",
    siteName: site.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "/og-mswa.png",
        width: 1200,
        height: 630,
        alt: "MSWA — Strony internetowe dla firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-mswa.png"],
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
