import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const CargasDeCombustible = () => {
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
            <span>GESTYA</span> Cargas de combustible
          </h2>
          <h3 className={styles.subtitle}>
            Visualización de datos sobre cargas
          </h3>
          <p className={styles.text}>
            GESTYA es la solución para gestionar y verificar con precisión las
            cargas de combustible de empresas que cuentan con un sistema de
            abono de combustible mediante crédito.
          </p>
          <button className={"button-primary"}>Descargar PDF</button>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/ahorro-de-combustible/carga-de-combustible/hero-sm.png"
            }
            width={750}
            height={780}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/ahorro-de-combustible/carga-de-combustible/rendimiento-sm.png"
            }
            width={750}
            height={733}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span> Controlá</span> el rendimiento de las cargas de combustible
          </h2>
          <p className={styles.text}>
            GESTYA Cargas de Combustible permite importar y verificar los
            registros de carga para asegurar su autenticidad y confirmar que se
            realizaron en estaciones de servicio válidas. Garantizá una
            administración precisa, eficiente y sin errores.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.cardsTitle}>
          Carga de planillas y visualización de datos de cargas
        </h2>
        <p className={styles.cardsText}>
          Conocé desde la plataforma los importes de combustible, el consumo de
          los vehículos en diferentes periodos y generá reportes automáticos.
        </p>
        <div className={styles.container}>
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
              Adjuntá documentación propia sobre las cargas para integrarlas al
              reporte
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
              Compará los datos de las cargas con los kilómetros recorridos por
              cada vehículo
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
              Visualizá de manera simple los datos de las cargas, importes de
              combustible y consumo
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
              Compará el consumo estimado en un período determinado de 30 días
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
              Verificá precios en diferentes estaciones de servicios y su
              evolución en gráficos
            </span>
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
            <span>Desvío entre consumo promedio y estimado</span>
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
            <span>Resumen de actividad por conductor y vehículo</span>
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
            <span>Validación de cargas en estaciones verificadas</span>
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
              Kilómetros recorridos, litros cargados y consumo estimado
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
            <span>Tiempo de permanencia en estaciones de servicio</span>
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
            <span>Comparativa de precios e historial de consumo estimado</span>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default CargasDeCombustible;
