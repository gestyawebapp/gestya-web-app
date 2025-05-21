import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const Gestion = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>GESTYA</span> Mantenimiento y Vencimientos
          </h2>
          <h3 className={styles.subtitle}>
            Gestión preventiva del estado de la flota
          </h3>
          <p className={styles.text}>
            GESTYA permite verificar el mantenimiento, las reparaciones y
            vencimientos de documentos clave.
          </p>
          <button className={"button-primary"}>Descargar PDF</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/gestion/hero-xl.png"
            }
            width={682}
            height={672}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/gestion/control-xl.png"
            }
            width={648}
            height={669}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Realizá el control</span> del mantenimiento a tiempo
          </h2>
          <h3 className={styles.subtitle}>
            Las unidades equipadas con VIGIA pueden integrar fácilmente GESTYA
          </h3>
          <p className={styles.text}>
            GESTYA permite verificar el mantenimiento de cada vehículo según
            fecha, kilómetros u horas de marcha. Solución para optimizar el
            tiempo de reparaciones y garantizar la seguridad.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>Mantenimiento programado</h3>
          <p className={styles.text}>
            Con GESTYA, mantené la agenda actualizada. Recibí alertas
            automáticas para programar mantenimientos, prevenir fallas que
            afecten la logística y extender la vida útil de los vehículos.
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
            <span>Control que evita reparaciones imprevistas</span>
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
            <span>Menor tiempo de los vehículos fuera de servicio</span>
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
              Mayor vida útil de la flota y mejor amortización de la inversión
            </span>
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>Control de documentos por vencer</h3>
          <p className={styles.text}>
            Con GESTYA, configurá alertas previas para cada vencimiento, llevá
            el control sobre la renovación de seguros, licencias, verificaciones
            técnicas y otros documentos obligatorios.
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
            <span>Reduce la posibilidad de costos extras por multas </span>
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
            <span>Orden administrativo para las tareas diarias</span>
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
            <span>Cumplimiento normativo asegurado</span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default Gestion;
