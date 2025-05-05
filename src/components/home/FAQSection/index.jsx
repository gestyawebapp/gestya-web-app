"use client";

import QuestionsContainer from "./QuestionsContainer";
import {
  applicationQuestions,
  clientQuestions,
  installationQuestions,
  usabilityQuestions,
} from "./questionsData";
import styles from "./styles.module.css";
import { useState } from "react";

const FAQSection = () => {
  const [activeKey, setActiveKey] = useState("usabilidad");

  const renderQuestions = () => {
    switch (activeKey) {
      case "usabilidad":
        return usabilityQuestions;
      case "instalacion":
        return installationQuestions;
      case "aplicacion":
        return applicationQuestions;
      case "clientes":
        return clientQuestions;
      default:
        return [];
    }
  };

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
              activeKey === "clientes" ? "active" : ""
            }`}
            onClick={() => setActiveKey("clientes")}
          >
            Atención al cliente
          </button>
        </div>
        <QuestionsContainer questions={renderQuestions()} />
      </div>
    </section>
  );
};

export default FAQSection;
