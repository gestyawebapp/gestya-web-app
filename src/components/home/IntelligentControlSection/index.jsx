import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import CardsContainer from "./CardsContainer";

const IntelligentControlSection = () => {
  const common = {
    alt: "Vehículo junto a un celular mostrando el control inteligente GESTYA",
    sizes: "(max-width: 374px) 100vw, (max-width: 1199px) 735px, 800px",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 908,
    height: 553,
    quality: 80,
    src: "/images/home/control-inteligente-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 757,
    height: 957,
    quality: 80,
    src: "/images/home/control-inteligente-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <h2>
            <span>Gestioná y administrá</span> tu flota con el control
            inteligente GESTYA
          </h2>
          <p>
            Conocé los beneficios de la{" "}
            <span>herramienta de seguimiento satelital</span> líder del mercado
            para monitorear flotas en tiempo real. Con soporte 24/7 en Atención
            al Cliente y Servicios Oficiales en todo el país.
          </p>
          <Link href="/cotiza" className="button-primary">
            Quiero instalar GESTYA en mi flota
          </Link>
        </div>
        <picture className={styles.imageWrapper}>
          <source media="(max-width: 767px)" srcSet={mobile} />
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img {...rest} alt={rest.alt} />
        </picture>
      </div>
      <CardsContainer />
    </section>
  );
};

export default IntelligentControlSection;
