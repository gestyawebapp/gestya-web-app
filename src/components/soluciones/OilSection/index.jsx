import Carousel from "@/components/layout/Carousel";
import styles from "./styles.module.css";

const OilSection = () => {
  const carouselImages = [
    "/images/soluciones/petroleo-01.jpg",
    "/images/soluciones/petroleo-02.jpg",
    "/images/soluciones/petroleo-03.jpg",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Carousel
            images={carouselImages}
            altPrefix="Petroleo agricultura y minería"
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
        <h2 className={styles.title}>Petróleo, agricultura y minería</h2>
        <h3 className={styles.subtitle}>
          Control de operaciones y conectividad
        </h3>
        <p>
          GESTYA es la herramienta recomendada para flotas que operan en áreas
          remotas como zonas agrícolas, mineras o petroleras. Mejora la
          visibilidad sobre las unidades y personal.
        </p>
        <p>
          <span>Monitoreá las horas de trabajo y tiempo de actividad.</span>
        </p>
        <p>
          Con GESTYA, los supervisores cuentan con datos en tiempo real para
          comprender las actividades sobre el terreno, mejorar el rendimiento de
          la inversión y llevar control sobre los costos.
        </p>
      </div>
    </section>
  );
};

export default OilSection;
