import Carousel from "@/components/layout/Carousel";
import styles from "./styles.module.css";

const ServicesSection = () => {
  const carouselImages = [
    "/images/soluciones/servicios-01.jpg",
    "/images/soluciones/servicios-02.jpg",
    "/images/soluciones/servicios-03.jpg",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Carousel
            images={carouselImages}
            altPrefix="Servicios técnicos, seguridad y sanidad"
          />
        </div>
        <div className={styles.tagContainer}>
          <div>Combustible</div>
          <div>Seguimiento</div>
          <div>Control</div>
          <div>Seguridad</div>
        </div>
      </div>
      <div className={styles.text}>
        <h2 className={styles.title}>
          Servicios técnicos, seguridad y sanidad
        </h2>
        <h3 className={styles.subtitle}>Visibilidad de todas las unidades</h3>
        <p>
          <span>
            GESTYA es una solución recomendada para empresas que brindan soporte
            técnico, servicios de seguridad o sanidad.
          </span>{" "}
          Permite seguir en tiempo real el traslado de las unidades, controlar
          el cumplimiento de tareas, verificar la seguridad y el consumo de
          combustible.
        </p>
        <p>Garantizá que la flota esté operativa</p>
        <p>
          Con GESTYA los supervisores pueden visualizar cada unidad y seguir su
          ubicación en tiempo real.
          <span>
            GESTYA permite visualizar el estado de la flota desde diferentes
            tipos de mapas, planificar rutas y acceder a reportes detallados
            para detectar ineficiencias en la operatoria diaria.
          </span>
        </p>
      </div>
    </section>
  );
};

export default ServicesSection;
