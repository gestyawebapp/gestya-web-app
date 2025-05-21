import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const Planificacion = () => {
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
            <span>GESTYA</span> Planify
          </h2>
          <h3 className={styles.subtitle}>Solución para optimizar rutas</h3>
          <p className={styles.text}>
            GESTYA Planify ayuda a organizar, planificar y coordinar las tareas
            de logística, garantizando el cumplimiento de las entregas y la
            continuidad operativa.
          </p>
          <button className={"button-primary"}>Descargar PDF</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/planificacion/hero-xl.png"
            }
            width={684}
            height={706}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/planificacion/entregas-xl.png"
            }
            width={658}
            height={431}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Asegurá <span>el cumplimiento de las entregas</span>
          </h2>
          <p className={styles.text}>
            GESTYA Planify está diseñada para gestionar los envíos de manera
            organizada a través de una comunicación eficiente durante todo el
            proceso. Podés controlar el avance en tiempo real de la flota y
            evaluar con datos los trayectos más rentables.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>
            GESTYA Planify mejora la logística de los envíos
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
              Trazá hojas de ruta, definí horarios, controlá el avance de las
              entregas y detectá desvíos
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
              Mejorá la distribución de los destinos, la asignación de tareas y
              el control del cumplimiento
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
            <span>Recibí comentarios del conductor durante el proceso</span>
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
              Horarios, asignación de tareas específicas y recorridos para cada
              integrante del equipo
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
              Importación de ruteos desde otros sistemas para optimizar los
              recorridos directamente desde la plataforma
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
              El conductor puede informar avances en tiempo real desde la
              aplicación
            </span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default Planificacion;
