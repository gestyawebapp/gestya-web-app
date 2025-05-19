"use client";

import styles from "./styles.module.css";
import Link from "next/link";

const VideoSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>Tecnología</span> que transforma tu flota
        </h2>
        <h3 className={styles.subtitle}>
          Mirá cómo otras empresas ya están viendo los resultados
        </h3>
        <p className={styles.text}>
          GESTYA es la herramienta de monitoreo de vehículos para reducir
          costos, optimizar el uso y tomar decisiones en tiempo real.
        </p>
        <Link
          className={"button-primary"}
          href={"https://www.youtube.com/@GestyaServicio"}
          target="_blank"
        >
          Ir a Youtube
        </Link>
      </div>
      <div className={styles.videoWrapper}></div>
    </section>
  );
};

export default VideoSection;
