"use client";

import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const HorasDeMarcha = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>GESTYA</span> Horas de marcha y Motor estacionado
          </h2>
          <h3 className={styles.subtitle}>
            Medición precisa del rendimiento por vehículo
          </h3>
          <p className={styles.text}>
            GESTYA permite acceder a datos clave sobre el estado del motor,
            diferenciando entre las horas de marcha con el vehículo en
            movimiento o detenido.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/horas-de-marcha/hero-sm.png"
            }
            width={750}
            height={654}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/horas-de-marcha/informacion-xl.png"
            }
            width={1471}
            height={1836}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Supervisá</span> las alertas de forma eficiente
          </h2>
          <p className={styles.text}>
            GESTYA Alarmas permite monitorear alertas generadas por el sistema y
            configurar notificaciones personalizadas para las más relevantes,
            diferenciando fácilmente entre las que requieren atención inmediata
            y las resueltas.
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
            <span>Comprobación de uso ineficiente del combustible.</span>
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
            <span>Control sobre tiempo prolongado en ralentí.</span>
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
            <span>Información para mantenimiento preventivo.</span>
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
            <span>Ahorro de costos al detectar ineficiencias.</span>
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
            <span>Comprensión del uso de cada vehículo.</span>
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
            <span>
              Medición del consumo promedio por vehículo en relación al uso
              real.
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
            <span>
              Proyección del consumo estimado según los parámetros operativos.
            </span>
          </div>
        </div>
      </section>
      <section className={styles.questions}>
        <div className={styles.questionsWrapper}>
          <div>
            <h3 className={styles.questionTitle}>
              ¿Por qué evitar el ralentí prolongado?
            </h3>
            <p className={styles.questionText}>
              El ralenti es cuando el motor permanece encendido sin que el
              vehículo se desplace, por ejemplo, al esperar con el motor en
              marcha. Este hábito genera consecuencias importantes en el
              mantenimiento de la flota y el consumo de combustible.{" "}
            </p>
          </div>
          <div>
            <h3 className={styles.questionTitle}>
              Principales problemas del motor en ralentí
            </h3>
            <ul className={styles.questionList}>
              <li>Aumento innecesario del consumo de combustible.</li>
              <li>Desgaste prematuro del motor y sus componentes.</li>
              <li>Tiempo del vehículo improductivo.</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.questionTitle}>
              ¿Cómo GESTYA ayuda a detectar el ralentí?
            </h3>
            <p className={styles.questionText}>
              El ralenti es común en situciones como la espera durante cargas o
              cuando un vehículo permanece detenido en el tráfico. GESTYA
              permite entender dónde y cuándo suceden estas situciaciones para
              corregirlas y ahorrar combustible. Esta información es útil para
              capacitar a los conductores y tomar medidas concretas para reducir
              las ineficiencias.
            </p>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default HorasDeMarcha;
