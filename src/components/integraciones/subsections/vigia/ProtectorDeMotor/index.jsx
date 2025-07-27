"use client";

import PricingSection from "@/components/home/PricingSection";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";

const ProtectorDeMotor = () => {
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
    src: "/images/integraciones/vigia/protector-de-motor/hero-xl.png",
  });
  const {
    props: { srcSet: heroMobile, ...heroRest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1097,
    quality: 80,
    src: "/images/integraciones/vigia/protector-de-motor/hero-sm.png",
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
            <span>Protector</span> Automático de Motor
          </h2>
          <h3 className={styles.subtitle}>
            Eventos de baja presión de aceite o alta temperatura
          </h3>
          <p className={styles.text}>
            VIGIA Protector Automático de Motor es un{" "}
            <span>
              sistema de prevención que supervisa en tiempo real la presión de
              aceite y la temperatura del motor
            </span>{" "}
            para detectar fallas a tiempo y detener la marcha.
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
            src={"/images/integraciones/vigia/protector-de-motor/monitor.png"}
            width={566}
            height={546}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Controlá a distancia</span> si hay fallas en el motor
          </h2>
          <h3 className={styles.subtitle}>Integración completa con GESTYA</h3>
          <p className={styles.text}>
            Diseñado especialmente para vehículos pesados y de uso intensivo,
            ayuda a prevenir fallas mecánicas graves, prolonga la vida útil del
            motor y reduce los costos de mantenimiento y reparación. Su
            confiable tecnología es una aliada clave para el trabajo seguro en
            ruta.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.cardsTitle}>
          ¿Cómo funciona el Protector Automático de Motor VIGIA?
        </h2>
        <p className={styles.cardsText}>
          Ante cualquier anomalía, como una caída brusca en la presión o un
          aumento excesivo de temperatura, el dispositivo actúa de manera
          automática, apagando el motor para evitar daños mayores.
        </p>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>
            Beneficios de integrar GESTYA con Protector Automático de Motor
            VIGIA
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
            <span>Supervisión en tiempo real del motor durante cada viaje</span>
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
            <span>Alertas automáticas ante fallas críticas</span>
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
            <span>Protección ante daños por sobrecalentamiento</span>
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
            <span>Ahorro de costos por reparaciones imprevistas</span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default ProtectorDeMotor;
