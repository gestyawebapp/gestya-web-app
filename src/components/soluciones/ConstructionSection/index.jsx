import Carousel from "@/components/layout/Carousel";
import styles from "./styles.module.css";
import Image from "next/image";

const ConstructionSection = () => {
  const carouselImages = [
    "/images/soluciones/construccion-01.jpg",
    "/images/soluciones/construccion-02.jpg",
    "/images/soluciones/construccion-03.jpg",
  ];

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2 className={styles.title}>Construcción y maquinaria pesada</h2>
          <h3 className={styles.subtitle}>
            Control de equipos y asignación de tareas
          </h3>
          <p>
            GESTYA es una herramienta indispensable para empresas especializadas
            en construcción,{" "}
            <span>
              permite controlar las operaciones, evitar sobrecargas de la
              maquinaria pesada y optimizar el mantenimiento.
            </span>
          </p>
          <p>Evitá tiempos de inactividad no planificados.</p>
          <p>
            GESTYA permite localizar vehículos, equipos y remolques para mejorar
            la gestión interna, aumentar la productividad en el área de trabajo
            y la competitividad. Esto genera un impacto positivo en la
            rentabilidad al evitar unidades inoperativas durante periodos
            extensos.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Carousel images={carouselImages} altPrefix="Camión" />
          </div>
          <div className={styles.tagContainer}>
            <div>Mantenimiento</div>
            <div>Localización</div>
            <div>Reportes</div>
            <div>VIGIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConstructionSection;
