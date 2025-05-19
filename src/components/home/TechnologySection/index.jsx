import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const TechnologySection = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1489,
    height: 537,
    quality: 80,
    src: "/images/home/tecnologia-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 364,
    height: 522,
    quality: 80,
    src: "/images/home/tecnologia-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>
            <span>Tecnología</span> al servicio de tu negocio y tu flota
          </h2>
          <p>
            Consultá la información de tu flota desde la{" "}
            <span>aplicación móvil exclusiva.</span> Accedé a datos clave como
            ubicación, estado de los vehículos, consumo de combustible y más.
          </p>
          <Link href="#pricingSection" className="button-secondary">
            Más información
          </Link>
        </div>
        <picture className={styles.imageWrapper}>
          <source media="(max-width: 991px)" srcSet={mobile} />
          <source media="(min-width: 992px)" srcSet={desktop} />
          <img {...rest} alt={rest.alt} />
        </picture>
      </div>
    </section>
  );
};

export default TechnologySection;
