import Carousel from "@/components/layout/Carousel";
import styles from "./styles.module.css";

const LogisticsSection = () => {
  const carouselImages = [
    "/images/soluciones/logistica-01.jpg",
    "/images/soluciones/logistica-02.jpg",
    "/images/soluciones/logistica-03.jpg",
    "/images/soluciones/logistica-04.jpg",
    "/images/soluciones/logistica-05.jpg",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Carousel
            images={carouselImages}
            altPrefix="Logística y transporte"
          />
        </div>
        <div className={styles.tagContainer}>
          <div>Productividad</div>
          <div>Seguimiento</div>
          <div>Combustible</div>
          <div>Seguridad</div>
        </div>
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>Logística y transporte</h2>
        <h3 className={styles.subtitle}>
          Entregas a tiempo y menor costo operativo
        </h3>
        <p>
          GESTYA es el aliado de las empresas de transporte y logística que
          dependen de una flota eficiente para cumplir con sus compromisos de
          manera planificada.
        </p>
        <p>Monitoreá cada vehículo y accedé a información detallada.</p>
        <p>
          Con GESTYA los supervisores pueden visualizar cada unidad y seguir su
          ubicación en tiempo real.{" "}
          <span>
            Esto permite una visión completa de las operaciones para identificar
            áreas de mejora en el uso de combustible, tiempos de actividad y
            riesgos para la seguridad, entre otros.
          </span>
        </p>
      </div>
    </section>
  );
};

export default LogisticsSection;
