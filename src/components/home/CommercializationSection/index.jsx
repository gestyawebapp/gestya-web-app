import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const CommercializationSection = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 812,
    height: 455,
    quality: 80,
    src: "/images/home/comercializa-gestya-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 363,
    height: 558,
    quality: 80,
    src: "/images/home/comercializa-gestya-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h2>
            <span>Comercializá GESTYA</span> y convertí tu negocio en Servicio
            Oficial COLVEN
          </h2>
          <p>
            Formá parte de la <span>red de Servicios Oficiales COLVEN</span> que
            comercializan GESTYA. Ofrecé a tus clientes una solución confiable
            para optimizar sus operaciones y eficiencia.
          </p>
          <Link href="" className="button-primary">
            Quiero ser Servicio Oficial COLVEN
          </Link>
        </div>
        <picture className={styles.imageWrapper}>
          <source media="(max-width: 767px)" srcSet={mobile} />
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img {...rest} alt={rest.alt} />
        </picture>
      </div>
    </section>
  );
};

export default CommercializationSection;
