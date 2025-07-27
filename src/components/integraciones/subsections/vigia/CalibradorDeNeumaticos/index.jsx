"use client";

import PricingSection from "@/components/home/PricingSection";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";

const CalibradorDeNeumaticos = () => {
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
    src: "/images/integraciones/vigia/calibrador-de-neumaticos/hero-xl.png",
  });
  const {
    props: { srcSet: heroMobile, ...heroRest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1114,
    quality: 80,
    src: "/images/integraciones/vigia/calibrador-de-neumaticos/hero-sm.png",
  });

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={"/images/home/logo-vigia.png"}
            width={159}
            height={73}
            alt=""
          />
          <h2 className={styles.title}>
            <span>Calibrador</span> Electrónico de Neumáticos
          </h2>
          <h3 className={styles.subtitle}>Presión correcta según la carga</h3>
          <p className={styles.text}>
            <span>
              GESTYA permite revisar la información del Calibrador Electrónico
              de Neumáticos VIGIA
            </span>{" "}
            y asegurar la presión predeterminada de los neumáticos de camiones,
            remolques, semirremolques y autobuses.
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
            src={
              "/images/integraciones/vigia/calibrador-de-neumaticos/calibrador.png"
            }
            width={419}
            height={419}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Integración <span>Completa</span>
          </h2>
          <h3 className={styles.subtitle}>
            Las unidades equipadas con VIGIA pueden integrar fácilmente GESTYA
          </h3>
          <p className={styles.text}>
            <span>
              Ambas herramientas están diseñadas para complementarse y brindar
              una solución integral.
            </span>{" "}
            Con GESTYA, podés acceder en tiempo real y desde cualquier
            dispositivo a la misma información del panel de control en la
            cabina, permitiendo alertar al conductor de manera inmediata.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.cardsTitle}>
          ¿Cómo funciona el Calibrador de Neumáticos VIGIA?
        </h2>
        <p className={styles.cardsText}>
          Ante cualquier disminución en la presión, incluso en caso de un
          pinchazo, el dispositivo avisa al conductor mediante una alarma y
          activa de forma automática el proceso de inflado, protegiendo los
          neumáticos.
        </p>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>
            Beneficios de integrar GESTYA con Calibrador de Neumáticos VIGIA
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
              Supervisá el estado del calibrador y respondé rápido ante
              imprevistos
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
            <span>Reducí gastos en mantenimiento y reparaciones</span>
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
              Controlá si la presión de los neumáticos disminuye y evitá
              accidentes
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
            <span>Evitá un acelerado desgaste de los neumáticos </span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default CalibradorDeNeumaticos;
