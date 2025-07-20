import styles from "./styles.module.css";
import Image from "next/image";

const WorldSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src={"/images/colven/world-xl.png"}
            width={746}
            height={575}
            alt="Grupo COLVEN reunido con presencia en Argentina, Brazil, México, USA, España e Italia"
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            COLVEN <span>en el mundo</span>
          </h2>
          <p className={styles.text}>
            Con una trayectoria de más de 50 años, el Grupo COLVEN cuenta con
            una planta industrial en el mismo pueblo donde se fundó la empresa.
            Esto permitió fomentar el compromiso de los colaboradores, mejorar
            los procesos desarrollo y comenzar un proceso de expansión que hoy
            encuentra a{" "}
            <span>
              COLVEN con presencia en Brasil, México, Estados Unidos, España e
              Italia.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorldSection;
