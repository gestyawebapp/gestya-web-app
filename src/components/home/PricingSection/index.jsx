import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const PricingSection = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1025,
    height: 530,
    quality: 80,
    src: "/images/home/cotizar-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 757,
    height: 600,
    quality: 80,
    src: "/images/home/cotizar-sm.png",
  });

  return (
    <section className={styles.section} id="pricingSection">
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>Cotizá la instalación de GESTYA</span> en tu flota
        </h2>
        <p className={styles.text}>
          <span>Empezá a optimizar tu flota</span> con la herramienta líder en
          seguimiento satelital de flotas y gestión de datos remotos de
          Argentina.
        </p>
        <Link href="/cotiza" className="button-primary">
          COTIZÁ AHORA
        </Link>
      </div>
      <picture className={styles.imageWrapper}>
        <source media="(max-width: 1199px)" srcSet={mobile} />
        <source media="(min-width: 1200px)" srcSet={desktop} />
        <img {...rest} alt={rest.alt} />
      </picture>
    </section>
  );
};

export default PricingSection;
