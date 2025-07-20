import styles from "./styles.module.css";
import Image from "next/image";

const QualitySection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          Compromiso con la <span>calidad</span>
        </h2>
        <p className={styles.text}>
          En un mercado donde la tecnología es rápidamente imitada,{" "}
          <span>
            el compromiso de COLVEN con altos estándares de fabricación
            garantiza la vigencia de las soluciones.
          </span>{" "}
          Cada producto refleja un nivel de calidad que trasciende las
          certificaciones como ISO 9001 o normas europeas (CEE y CE).
        </p>
        <div className={styles.list}>
          <ul>
            <li>CESVI</li>
          </ul>
          <Image
            src={"/images/colven/stars.png"}
            width={118}
            height={22}
            alt="5 estrellas"
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src={"/images/colven/quality-xl.png"}
          width={895}
          height={895}
          alt="Compromiso de COLVEN con la tecnología"
        />
      </div>
    </section>
  );
};

export default QualitySection;
