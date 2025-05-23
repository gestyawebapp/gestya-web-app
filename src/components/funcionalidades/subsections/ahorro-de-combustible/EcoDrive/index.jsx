import PricingSection from "@/components/home/PricingSection";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";

const EcoDrive = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: heroDesktop },
  } = getImageProps({
    ...common,
    width: 1646,
    height: 1173,
    quality: 80,
    src: "/images/funcionalidades/ahorro-de-combustible/eco-drive/hero-xl.png",
  });
  const {
    props: { srcSet: heroMobile, ...heroRest },
  } = getImageProps({
    ...common,
    width: 757,
    height: 849,
    quality: 80,
    src: "/images/funcionalidades/ahorro-de-combustible/eco-drive/hero-sm.png",
  });

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={
              "/images/funcionalidades/ahorro-de-combustible/eco-drive/gestya-eco-drive.png"
            }
            width={207}
            height={95}
            alt=""
          />
          <h2 className={styles.title}>
            <span>GESTYA</span> Eco Drive
          </h2>
          <h3 className={styles.subtitle}>Conducción eficiente de flotas</h3>
          <p className={styles.text}>
            Desarrollado para optimizar el mantenimiento y consumo de
            combustible a través de una conducción eficiente.
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
        <h2 className={styles.cardsTitle}>
          Administrá desde el portal Eco Drive información por flota o unidad
        </h2>
        <div className={styles.containerWrapper}>
          <div className={styles.container}>
            <h3 className={styles.subtitle}>Estado de la Flota</h3>
            <div className={styles.item}>
              <Image
                src={
                  "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
                }
                width={32}
                height={32}
                alt=""
              />
              <span>Última posición de los vehículos</span>
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
              <span>Velocidad de circulación</span>
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
              <span>Duración de aceleraciones bruscas</span>
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
              <span>Cantidad de frenadas brucas</span>
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
              <span>Tiempo del motor en marcha en ralenti</span>
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
              <span>Excesos de torque, RPM y velocidad</span>
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
              <span>Consumo promedio en L/100 KM</span>
            </div>
          </div>
          <div className={styles.container}>
            <h3 className={styles.subtitle}>Reporte de la Flota</h3>
            <div className={styles.item}>
              <Image
                src={
                  "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
                }
                width={32}
                height={32}
                alt=""
              />
              <span>Análisis por flota o vehículo</span>
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
              <span>Tiempo del vehículo detenido</span>
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
              <span>Horas del motor en marcha</span>
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
              <span>Tiempo del vehículo en movimiento</span>
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
              <span>Distancia recorrida en kilómetros</span>
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
              <span>Consumo de combustible</span>
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
              <span>Datos del estado de la flota</span>
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
                Informes automáticos con posibilidad de exportar en un archivo
                excel
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
                Opción para cargar el valor del combustible y controlar el gasto
                por vehículo
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
                Carga de tickets de combustible para incorporarlas al reporte
                histórico de la flota
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
                Asignación de consumo ideal por cada vehículo para compararlo
                con el realizado
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
                Rango de velocidad para conocer el tiempo de circulación en
                periodos preestablecidos
              </span>
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default EcoDrive;
