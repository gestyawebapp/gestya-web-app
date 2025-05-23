import PricingSection from "@/components/home/PricingSection";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";

const Planificacion = () => {
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
    src: "/images/funcionalidades/seguimiento-de-vehiculos/planificacion/hero-xl.png",
  });
  const {
    props: { srcSet: heroMobile, ...heroRest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1158,
    quality: 80,
    src: "/images/funcionalidades/seguimiento-de-vehiculos/planificacion/hero-sm.png",
  });
  const {
    props: { srcSet: controlDesktop },
  } = getImageProps({
    ...common,
    width: 1471,
    height: 964,
    quality: 80,
    src: "/images/funcionalidades/seguimiento-de-vehiculos/planificacion/entregas-xl.png",
  });
  const {
    props: { srcSet: controlMobile, ...controlRest },
  } = getImageProps({
    ...common,
    width: 750,
    height: 1101,
    quality: 80,
    src: "/images/funcionalidades/seguimiento-de-vehiculos/planificacion/entregas-sm.png",
  });

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/planificacion/gestya-planificacion.png"
            }
            width={218}
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
        </div>
        <picture className={styles.heroImageWrapper}>
          <source media="(max-width: 991px)" srcSet={heroMobile} />
          <source media="(min-width: 992px)" srcSet={heroDesktop} />
          <img {...heroRest} alt={heroRest.alt} />
        </picture>
      </section>
      <section className={styles.section}>
        <picture className={styles.controlImageWrapper}>
          <source media="(max-width: 991px)" srcSet={controlMobile} />
          <source media="(min-width: 992px)" srcSet={controlDesktop} />
          <img {...controlRest} alt={controlRest.alt} />
        </picture>
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
