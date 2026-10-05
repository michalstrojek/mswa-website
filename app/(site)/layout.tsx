import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { ScrollControl } from "@/components/site/ScrollControl";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ScrollControl />
      <Header />
      <main id="tresc" className="relative z-0">
        {children}
      </main>
      <Footer />
    </>
  );
}
