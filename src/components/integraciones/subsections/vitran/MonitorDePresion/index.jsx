"use client";

import PricingSection from "@/components/home/PricingSection";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";

const MonitorDePresion = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: heroDesktop },
  } = getImageProps({
    ...common,
    width: 1667,
    height: 1667,
    quality: 80,
    src: "/images/integraciones/vitran/eco-drive/hero-xl.png",
  });
  const {
    props: { srcSet: heroMobile, ...heroRest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1200,
    quality: 80,
    src: "/images/integraciones/vitran/eco-drive/hero-sm.png",
  });

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={"/images/home/logo-vitran.png"}
            width={158}
            height={73}
            alt=""
          />
          <h2 className={styles.title}>
            <span>Monitor</span> de Presión de Neumáticos
          </h2>
          <h3 className={styles.subtitle}>
            Eventos de Alta/Baja Presión y de Alta Temperatura
          </h3>
          <p className={styles.text}>
            VITRAN Monitor de Presión de Neumáticos{" "}
            <span>muestra la presión y temperatura de los neumáticos</span> en
            una pantalla a color.
          </p>
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
            src={"/images/integraciones/vitran/eco-drive/monitoreo.png"}
            width={419}
            height={419}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Revisá a distancia</span> la información de VITRAN
          </h2>
          <h3 className={styles.subtitle}>Integración completa con GESTYA</h3>
          <p className={styles.text}>
            <span>
              Sistema de monitoreo inalámbrico diseñado para mejorar la
              seguridad y eficiencia en la conducción.
            </span>{" "}
            Utiliza sensores ubicados en cada neumático que transmiten datos en
            tiempo real a la unidad receptora instalada en el vehículo. Cuenta
            con alarmas que se activan ante cualquier variación anormal de la
            presión.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>
            Beneficios de integrar GESTYA con Monitor de Presión de Neumáticos
            VITRAN
          </h3>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>
              Acceso a la información que aparece en el monitor dentro del
              habitáculo
            </span>
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
            <span>Alertas de sobrepresión o exceso de temperatura </span>
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
            <span>
              Detección temprana de anomalías o pinchaduras que puedan dañar el
              neumático
            </span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default MonitorDePresion;
