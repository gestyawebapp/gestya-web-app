import CompleteIntegrationSection from "@/components/home/CompleteIntegrationSection";
import IntelligentControlSection from "@/components/home/IntelligentControlSection";
import CommercializationSection from "@/components/home/CommercializationSection";
import FunctionalitiesSection from "@/components/home/FunctionalitiesSection";
import MonitoringSection from "@/components/home/MonitoringSection";
import TechnologySection from "@/components/home/TechnologySection";
import InnovationSection from "@/components/home/InnovationSection";
import LocationsSection from "@/components/home/LocationsSection";
import SupportSection from "@/components/home/SupportSection";
import PricingSection from "@/components/home/PricingSection";
import HeroSection from "@/components/home/HeroSection";
import FAQSection from "@/components/home/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntelligentControlSection />
      <FunctionalitiesSection />
      <CompleteIntegrationSection />
      <TechnologySection />
      <MonitoringSection />
      <CommercializationSection />
      <LocationsSection />
      <InnovationSection />
      <SupportSection />
      <FAQSection />
      <PricingSection />
    </>
  );
}
