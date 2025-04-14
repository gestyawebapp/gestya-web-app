import IntelligentControlSection from "@/components/home/IntelligentControlSection";
import HeroSection from "@/components/home/HeroSection";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <IntelligentControlSection />
    </main>
  );
}
