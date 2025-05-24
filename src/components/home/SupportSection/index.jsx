import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import CardsContainer from "./CardsContainer";

const SupportSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <h2>
            Soporte desde el <span>Centro de Atención</span> GESTYA
          </h2>
          <p className={styles.description}>
            <span>Línea directa de asistencia disponible las 24 hs</span> y los
            365 días del año. Atención con alto estándar de resolución y
            protección de la información.
          </p>
          <p className={styles.number}>0800-333-GESTYA (4378)</p>
          <Link href="/contacto" className="button-primary">
            Solicitar información
          </Link>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={"/images/home/soporte-xl.png"}
            width={757}
            height={600}
            alt=""
          />
        </div>
      </div>
      <CardsContainer />
    </section>
  );
};

export default SupportSection;
