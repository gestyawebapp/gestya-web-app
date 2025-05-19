import ProductsSection from "@/components/colven/ProductsSection";
import QualitySection from "@/components/colven/QualitySection";
import PricingSection from "@/components/home/PricingSection";
import WorldSection from "@/components/colven/WorldSection";
import HeroSection from "@/components/colven/HeroSection";
import styles from "./styles.module.css";

const ColvenPage = () => {
  return (
    <main className="main">
      <HeroSection />
      <ProductsSection />
      <WorldSection />
      <QualitySection />
      <PricingSection />
    </main>
  );
};

export default ColvenPage;
