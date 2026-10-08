import { Hero } from "./components/Hero/Hero";
import { Navigation } from "./components/Navigation/Navigation";
import { Philosophy } from "./components/Philosophy/Philosophy";
import { Team } from "./components/Team/Team";
import { Services } from "./components/Services/Services";
import { Salon } from "./components/Salon/Salon";
import { Atmosfera } from "./components/Atmosfera/Atmosfera";
import { Booking } from "./components/Booking/Booking";
import { Footer } from "./components/Footer/Footer";
import styles from "./App.module.css";

export default function App() {
  return (
    <main id="top">
      <div className={styles.stage}>
        <Navigation />
        <Hero />
      </div>
      {/* Homepage continuation — keep this order */}
      <Philosophy />
      <Team />
      <Services />
      <Salon />
      <Atmosfera />
      <Booking />
      <Footer />
    </main>
  );
}
