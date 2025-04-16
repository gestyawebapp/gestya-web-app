"use client";

// import { vehicleCards, fuelCards, controlCards } from "./cardsData";
// import CardsContainer from "./CardsContainer";
import styles from "./styles.module.css";
import { useState } from "react";
import Link from "next/link";

const FAQSection = () => {
  const [activeKey, setActiveKey] = useState("usabilidad");

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2>
            Resolvé tus preguntas sobre <span>GESTYA</span>
          </h2>
          <p>
            <span>Respondemos tus dudas</span> para que puedas aprovechar la
            herramienta al máximo y simplificar la gestión de tu flota.
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={`button-functionality orange ${
              activeKey === "usabilidad" ? "active" : ""
            }`}
            onClick={() => setActiveKey("usabilidad")}
          >
            Usabilidad
          </button>
          <button
            className={`button-functionality orange ${
              activeKey === "instalacion" ? "active" : ""
            }`}
            onClick={() => setActiveKey("instalacion")}
          >
            Instalación
          </button>
          <button
            className={`button-functionality orange ${
              activeKey === "aplicacion" ? "active" : ""
            }`}
            onClick={() => setActiveKey("aplicacion")}
          >
            Aplicación y funcionalidades
          </button>
          <button
            className={`button-functionality orange ${
              activeKey === "atencion" ? "active" : ""
            }`}
            onClick={() => setActiveKey("atencion")}
          >
            Atención al cliente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
