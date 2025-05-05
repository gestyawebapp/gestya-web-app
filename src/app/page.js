import CompleteIntegrationSection from "@/components/home/CompleteIntegrationSection";
import IntelligentControlSection from "@/components/home/IntelligentControlSection";
import CommercializationSection from "@/components/home/CommercializationSection";
import FunctionalitiesSection from "@/components/home/FunctionalitiesSection";
import MonitoringSection from "@/components/home/MonitoringSection";
import TechnologySection from "@/components/home/TechnologySection";
import LocationsSection from "@/components/home/LocationsSection";
import SupportSection from "@/components/home/SupportSection";
import PricingSection from "@/components/home/PricingSection";
import HeroSection from "@/components/home/HeroSection";
import FAQSection from "@/components/home/FAQSection";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <IntelligentControlSection />
      <FunctionalitiesSection />
      <CompleteIntegrationSection />
      <TechnologySection />
      <MonitoringSection />
      <CommercializationSection />
      <LocationsSection />
      <SupportSection />
      <FAQSection />
      <PricingSection />
    </main>
  );
}
