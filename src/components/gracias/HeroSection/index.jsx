import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const HeroSection = () => {
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
      <div className={styles.header}>
        <h1 className={styles.title}>¡Gracias por contactarte con GESTYA!</h1>
        <p className={styles.text}>Pronto nos comunicaremos con vos</p>
      </div>
      <picture className={styles.imageWrapper}>
        <source media="(max-width: 991px)" srcSet={mobile} />
        <source media="(min-width: 992px)" srcSet={desktop} />
        <img {...rest} alt={rest.alt} />
      </picture>
      <Link className="button-primary" href="/">
        Volver al Home
      </Link>
    </section>
  );
};

export default HeroSection;
