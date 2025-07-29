"use client";

import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const Alarmas = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/alarmas/gestya-alarmas.png"
            }
            width={218}
            height={100}
            alt=""
          />
          <h2 className={styles.title}>
            <span>GESTYA</span> Alarmas
          </h2>
          <h3 className={styles.subtitle}>Alarmas generadas por el sistema</h3>
          <p className={styles.text}>
            GESTYA cuenta con un módulo para visualizar todas las alarmas
            generadas del sistema y facilitar su gestión.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/alarmas/hero-xl.png"
            }
            width={1471}
            height={1374}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/alarmas/alertas-sm.png"
            }
            width={750}
            height={711}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Supervisá</span> las alertas de forma eficiente
          </h2>
          <p className={styles.text}>
            GESTYA Alarmas permite monitorear las alarmas generadas por el
            sistema y configurar notificaciones personalizadas para las más
            relevantes, diferenciando fácilmente entre las que requieren
            atención inmediata y las resueltas.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>Beneficios</h3>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Previsión de incidentes operativos.</span>
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
            <span>Trazabilidad de eventos y decisiones tomadas.</span>
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
            <span>Visualización de las alarmas desde la aplicación.</span>
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>Funciones destacadas</h3>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Notificaciones automáticas de eventos críticos.</span>
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
              Visualización de alarmas según la prioridad de atención.
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
            <span>Registro histórico de alarmas por vehículo.</span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default Alarmas;
