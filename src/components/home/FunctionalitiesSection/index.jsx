"use client";

import { vehicleCards, fuelCards, controlCards } from "./cardsData";
import CardsContainer from "./CardsContainer";
import styles from "./styles.module.css";
import { useState } from "react";
import Link from "next/link";

const FunctionalitiesSection = () => {
  const [activeKey, setActiveKey] = useState("vehicles");

  const renderCards = () => {
    switch (activeKey) {
      case "vehicles":
        return vehicleCards;
      case "fuel":
        return fuelCards;
      case "control":
        return controlCards;
      default:
        return [];
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>
          <span>Funcionalidades GESTYA</span> para control de vehículos
        </h2>
        <p>
          Soluciones desarrolladas para aumentar la eficiencia de tu flota.
          Conocé en detalle cada una.
        </p>
        <div className={styles.buttonWrapper}>
          <button
            className={`button-functionality vehicles ${
              activeKey === "vehicles" ? "active" : ""
            }`}
            onClick={() => setActiveKey("vehicles")}
          >
            Seguimiento de Vehículos
          </button>
          <button
            className={`button-functionality fuel ${
              activeKey === "fuel" ? "active" : ""
            }`}
            onClick={() => setActiveKey("fuel")}
          >
            Ahorro de combustible
          </button>
          <button
            className={`button-functionality control ${
              activeKey === "control" ? "active" : ""
            }`}
            onClick={() => setActiveKey("control")}
          >
            Control y Mantenimiento
          </button>
        </div>
      </div>
      <CardsContainer cards={renderCards()} />
      <Link href="" className="button-primary">
        Ver todas las funcionalidades
      </Link>
    </section>
  );
};

export default FunctionalitiesSection;
