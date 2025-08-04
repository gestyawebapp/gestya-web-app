"use client";

import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const Scoring = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/scoring/gestya-scoring.png"
            }
            width={207}
            height={100}
            alt=""
          />
          <h2 className={styles.title}>
            <span>GESTYA</span> Scoring
          </h2>
          <h3 className={styles.subtitle}>Conducción segura de la Flota</h3>
          <p className={styles.text}>
            GESTYA Scoring reune información sobre los hábitos de conducción
            para tomar decisiones en base a datos y prevenir riesgos.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/scoring/hero-xl.png"
            }
            width={1471}
            height={1327}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/scoring/riesgo-sm.png"
            }
            width={750}
            height={811}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Evaluá el riesgo</span> y tomá decisiones estrategicas
          </h2>
          <p className={styles.text}>
            GESTYA Scoring permite evaluar y calificar el comportamiento de
            conductores. Otorga puntajes que ayudan a prevenir riesgos, mejorar
            el control operativo y facilitar la toma de decisiones.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>Scoring para conductores</h3>
          <p className={styles.text}>
            GESTYA Scoring procesa y clasifica información acerca de la conducta
            de manejo y devuelve un punteja de cada uno de los conductores.{" "}
          </p>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Identificá patrones de comportamiento en la conducción.</span>
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
              Gestioná con información de planes de prevención de accidentes de
              tránsito.
            </span>
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>3 Niveles de infracciones</h3>
          <p className={styles.text}>
            Las infracciones no están referidas a multas de tránsito, son
            parámetros de no cumplimiento preestablecidos. El objetivo de esta
            información es mejorar la seguridad vial y ahorrar combustible con
            datos para educar en procesos más eficientes a los conductores.
          </p>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <span>Nivel 1: Infracciones de exceso de velocidad.</span>
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
              Nivel 2: Infracciones de aceleración, frenadas, aceleración en
              curvas y desconexión del sistema.
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
              Nivel 3: Infracciones de ralentí, manejo nocturno, manejo continuo
              y descanso incompleto.
            </span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default Scoring;
