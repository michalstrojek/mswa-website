import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Metamorphoses } from "./components/Metamorphoses";
import { Salon } from "./components/Salon";
import { Services } from "./components/Services";
import { Team } from "./components/Team";

export function NovaStudioPage({ className = "" }: { className?: string }) {
  return (
    <div className={["nova-root", className].filter(Boolean).join(" ")}>
      <Header />
      <main id="tresc">
        <Hero />
        <Services />
        <Metamorphoses />
        <Salon />
        <Team />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
