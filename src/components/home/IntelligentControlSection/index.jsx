import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const IntelligentControlSection = () => {
  const common = {
    alt: "Vehículo junto a un celular mostrando el control inteligente GESTYA",
    sizes: "(max-width: 374px) 100vw, (max-width: 1199px) 735px, 800px",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 908,
    height: 553,
    quality: 80,
    src: "/images/home/control-inteligente-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 363,
    height: 459,
    quality: 80,
    src: "/images/home/control-inteligente-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <h2>
            <span>Gestioná y administrá</span> tu flota con el control
            inteligente GESTYA
          </h2>
          <p>
            Conocé los beneficios de la{" "}
            <span>herramienta de seguimiento satelital</span> líder del mercado
            para monitorear flotas en tiempo real. Con soporte 24/7 en Atención
            al Cliente y Servicios Oficiales en todo el país.
          </p>
          <Link href="" className="button-primary">
            Quiero instalar GESTYA en mi flota
          </Link>
        </div>
        <picture className={styles.imageWrapper}>
          <source media="(max-width: 767px)" srcSet={mobile} />
          <source media="(min-width: 768px)" srcSet={desktop} />
          <img {...rest} alt={rest.alt} />
        </picture>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <Image
            src={"/images/home/icono-seguimiento.png"}
            width={50}
            height={50}
            alt="Ícono de seguimiento"
          />
          <h3>Seguimiento</h3>
          <p>
            Visualizá los recorridos en tiempo real con monitoreo de flotas ágil
            y eficiente.
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/home/icono-combustible.png"}
            width={50}
            height={50}
            alt="Ícono de combustible"
          />
          <h3>Combustible</h3>
          <p>
            Supervisá el consumo durante cargas y traslados para ahorro de
            combustible.
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/home/icono-control.png"}
            width={50}
            height={50}
            alt="Ícono de control (una lupa)"
          />
          <h3>Control</h3>
          <p>
            Accedé a información destacada para mantenimiento preventivo y
            mejorar la seguridad.
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/home/icono-logistica.png"}
            width={50}
            height={50}
            alt="Ícono de logística (un camión)"
          />
          <h3>Logística</h3>
          <p>
            Optimizá tiempos y recursos durante entregas o tareas con un control
            de flotas integral.
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/home/icono-conectividad.png"}
            width={50}
            height={50}
            alt="Ícono de conectividad"
          />
          <h3>Conectividad</h3>
          <p>
            Gestioná con una aplicación móvil y recibí reportes incluso desde
            áreas remotas.
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src={"/images/home/icono-integracion.png"}
            width={50}
            height={50}
            alt="Ícono de integración"
          />
          <h3>Integración</h3>
          <p>
            Vinculá con VIGIA Protector de Motor, Calibrador de Neumáticos y
            Monitor de Presión VITRAN.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntelligentControlSection;
