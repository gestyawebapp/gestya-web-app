import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const MonitoringSection = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1378,
    height: 589,
    quality: 80,
    src: "/images/home/monitoreo-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 363,
    height: 558,
    quality: 80,
    src: "/images/home/monitoreo-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>
          Monitoreá <span>todo tipo de vehículos</span> con GESTYA
        </h2>
        <p>
          <span>Seguimiento satelital</span> de vehículos asegurado para todo
          tipo de flotas. Desde autos particulares hasta vehículos agrícolas,
          utilitarios, viales y camiones.
        </p>
      </div>
      <picture className={styles.imageWrapper}>
        <source media="(max-width: 991px)" srcSet={mobile} />
        <source media="(min-width: 992px)" srcSet={desktop} />
        <img {...rest} alt={rest.alt} />
      </picture>
      <Link href="" className="button-secondary">
        Cotizar GESTYA para mi flota
      </Link>
    </section>
  );
};

export default MonitoringSection;
