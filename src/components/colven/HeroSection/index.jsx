import styles from "./styles.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Creando <span>soluciones innovadoras para el transporte</span>
        </h1>
        <p className={styles.text}>
          <span>
            COLVEN es la empresa líder de Argentina que desarrolla soluciones
            tecnológicas
          </span>{" "}
          para la gestión de la logística, ayudando a mejorar la seguridad, la
          eficiencia y el rendimiento de flotas.
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={"/images/colven/hero-xl.png"}
          width={1055}
          height={773}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
