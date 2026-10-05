import { Navigation } from "./components/Navigation/Navigation";
import { Hero } from "./components/Hero/Hero";
import { Philosophy } from "./components/Philosophy/Philosophy";
import { Team } from "./components/Team/Team";
import { Services } from "./components/Services/Services";
import { Salon } from "./components/Salon/Salon";
import { Atmosfera } from "./components/Atmosfera/Atmosfera";
import { Booking } from "./components/Booking/Booking";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";

type AtelierPageProps = {
  className?: string;
};

export function AtelierPage({ className = "" }: AtelierPageProps) {
  return (
    <div className={["atelier-root", className].filter(Boolean).join(" ")}>
      <main id="top">
        <div className={styles.stage}>
          <Navigation />
          <Hero />
        </div>
        <Philosophy />
        <Team />
        <Services />
        <Salon />
        <Atmosfera />
        <Booking />
        <Footer />
      </main>
    </div>
  );
}
