import CardsContainer from "./CardsContainer";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const CompleteIntegrationSection = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 632,
    height: 592,
    quality: 80,
    src: "/images/home/integracion-completa-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 357,
    height: 590,
    quality: 80,
    src: "/images/home/integracion-completa-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <h2>
            <span>Integración completa</span> con VIGIA y VITRAN
          </h2>
          <p>
            <span>
              Si tenés instalado VIGIA y VITRAN en tu flota, podés integrarlas
              con GESTYA.
            </span>{" "}
            Monitoreá en tiempo real el estado del motor, la presión de los
            neumáticos y su temperatura. Optimizá el mantenimiento preventivo,
            reducí costos operativos y mejorá la seguridad en cada trayecto.
          </p>
        </div>
        <picture className={styles.imageWrapper}>
          <source media="(max-width: 991px)" srcSet={mobile} />
          <source media="(min-width: 992px)" srcSet={desktop} />
          <img {...rest} alt={rest.alt} />
        </picture>
      </div>
      <CardsContainer />
      <Link href="" className="button-primary">
        Ir a integraciones
      </Link>
    </section>
  );
};

export default CompleteIntegrationSection;
