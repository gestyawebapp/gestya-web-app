import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const HeroSection = () => {
  const common = {
    alt: "Vehículos representando una logística de transporte eficiente",
    sizes:
      "(max-width: 374px) 100vw, (max-width: 575px) 375px, (max-width: 1399px) 100vw, 1400px",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1440,
    height: 875,
    quality: 80,
    src: "/images/home/hero-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 400,
    height: 400,
    quality: 80,
    src: "/images/home/hero-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <h1>
          Solución para <span>monitorear</span> flotas, optimizar la logística y
          reducir costos
        </h1>
        <Link href="/contacto" className="button-primary">
          Solicitar más información
        </Link>
      </div>
      <picture className={styles.imageWrapper}>
        <source media="(max-width: 575px)" srcSet={mobile} />
        <source media="(min-width: 576px)" srcSet={desktop} />
        <img {...rest} alt={rest.alt} />
      </picture>
    </section>
  );
};

export default HeroSection;
