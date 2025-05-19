import styles from "./styles.module.css";
import Image from "next/image";

const TransportSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.title}>Transporte de pasajeros</h2>
          <h3 className={styles.subtitle}>
            Recorridos eficientes y mayor seguridad
          </h3>
          <p>
            GESTYA es la herramienta de seguimiento satelital indicada para
            empresas de transporte de pasajeros que buscan aumentar la
            seguridad, optimizar el rendimiento de las unidades y mejorar
            calidad de servicio.
          </p>
          <p>Conocé lo que está pasando en el camino. </p>
          <p>
            <span>
              Con GESTYA, las empresas de transporte pueden localizar las
              unidades de su flota en tiempo real
            </span>
            , planificar recorridos eficientes y monitorear el comportamiento de
            conducción para evitar accidentes o infracciones.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={"/images/soluciones/micros-md.png"}
              width={572}
              height={468}
              alt=""
            />
          </div>
          <div className={styles.tagContainer}>
            <div>Costos</div>
            <div>Viajes</div>
            <div>Combustible</div>
            <div>Seguridad</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportSection;
