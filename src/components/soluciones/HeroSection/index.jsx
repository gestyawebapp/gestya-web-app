import styles from "./styles.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        <span>Soluciones</span> para cada industria
      </h1>
      <p className={styles.text}>
        Flotas de transporte, maquinaria pesada, servicios técnicos, unidades de
        sanidad, fuerzas de seguridad y vehículos del sector energético y
        agrícola, instalan GESTYA para el control total de sus operaciones.
      </p>
      <div className={styles.imageWrapper}>
        <Image
          src={"/images/soluciones/icono-camion.png"}
          width={119}
          height={119}
          alt=""
        />
        <Image
          src={"/images/soluciones/icono-agro.png"}
          width={119}
          height={119}
          alt=""
        />
        <Image
          src={"/images/soluciones/icono-ambulancia.png"}
          width={119}
          height={119}
          alt=""
        />
        <Image
          src={"/images/soluciones/icono-bus.png"}
          width={119}
          height={119}
          alt=""
        />
        <Image
          src={"/images/soluciones/icono-tractor.png"}
          width={119}
          height={119}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
