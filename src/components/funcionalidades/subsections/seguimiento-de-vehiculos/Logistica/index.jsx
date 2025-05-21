import PricingSection from "@/components/home/PricingSection";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";

const Logistica = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: heroDesktop },
  } = getImageProps({
    ...common,
    width: 1471,
    height: 1518,
    quality: 80,
    src: "/images/funcionalidades/seguimiento-de-vehiculos/logistica/hero-xl.png",
  });
  const {
    props: { srcSet: heroMobile, ...heroRest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1040,
    quality: 80,
    src: "/images/funcionalidades/seguimiento-de-vehiculos/logistica/hero-sm.png",
  });

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/logistica/gestya.png"
            }
            width={217}
            height={100}
            alt=""
          />
          <h2 className={styles.title}>
            <span>GESTYA</span> Logística
          </h2>
          <h3 className={styles.subtitle}>Gestión integral de flotas</h3>
          <p className={styles.text}>
            Conjunto de funcionalidades que permiten un conocimiento preciso de
            la ubicación, estado y traslados de la flota.
          </p>
          <button className={"button-primary"}>Descargar PDF</button>
        </div>
        <picture className={styles.heroImageWrapper}>
          <source media="(max-width: 991px)" srcSet={heroMobile} />
          <source media="(min-width: 992px)" srcSet={heroDesktop} />
          <img {...heroRest} alt={heroRest.alt} />
        </picture>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/logistica/gestion-sm.png"
            }
            width={750}
            height={1160}
            alt=""
          ></Image>
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Gestión inteligente y centralizada</span> de tu flota
          </h2>
          <p className={styles.text}>
            GESTYA es una herramienta que ofrece múltiples soluciones de
            logística que podés administrar desde una única plataforma,
            integrando ubicación, recorridos, estado y rendimiento.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>Trazabilidad en un solo reporte</h3>
          <p className={styles.text}>
            Con GESTYA, centralizá toda la información sobre ubicación en un
            solo reporte. Consultá los trayectos realizados y los viajes diarios
            de cada vehículo. Visualizá los viajes e identificá desvíos, tiempos
            de detención y distintos patrones de movimiento para tomar
            decisiones eficientes. Programá alertas para eventos destacados.
            Beneficios:
          </p>
          <p className={styles.text}>Beneficios:</p>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Registros históricos de recorridos por unidad</span>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Visualización de viajes y trayectos diarios</span>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Gráficos y mapas interactivos</span>
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>
            Control del estado y ubicación de la flota
          </h3>
          <p className={styles.text}>
            Con GESTYA Estado de la Flota, conseguí visibilidad de las
            operaciones de cada vehículo y su posición exacta. Con opciones de
            visualización de mapas en distintos formatos como calles, híbrido y
            satélite integrada a Google Maps, podés supervisar y anticiparte a
            desvíos o imprevistos.
          </p>
          <p className={styles.text}>Beneficios:</p>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Información actualizada en tiempo real</span>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Ubicación de la última posición registrada</span>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Visualización de los trayectos en mapas</span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default Logistica;
