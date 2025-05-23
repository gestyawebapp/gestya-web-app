import ConstructionSection from "@/components/soluciones/ConstructionSection";
import TransportSection from "@/components/soluciones/TransportSection";
import LogisticsSection from "@/components/soluciones/LogisticsSection";
import ServicesSection from "@/components/soluciones/ServicesSection";
import HeroSection from "@/components/soluciones/HeroSection";
import PricingSection from "@/components/home/PricingSection";
import OilSection from "@/components/soluciones/OilSection";

import styles from "./styles.module.css";

const SolucionesPage = () => {
  return (
    <>
      <HeroSection />
      <LogisticsSection />
      <ConstructionSection />
      <ServicesSection />
      <TransportSection />
      <OilSection />
      <PricingSection />
    </>
  );
};

export default SolucionesPage;
