"use client";

import { Utilitario } from "@/components/icons/Utilitario";
import { Colectivo } from "@/components/icons/Colectivo";
import { useCotiza } from "@/context/CotizaContext";
import { Camion } from "@/components/icons/Camion";
import { useSearchParams } from "next/navigation";
import { Auto } from "@/components/icons/Auto";
import { Moto } from "@/components/icons/Moto";
import { Agro } from "@/components/icons/Agro";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Paso1 = () => {
  const { formData, updateForm } = useCotiza();
  const [selectedOptions, setSelectedOptions] = useState(formData.paso1 || []);

  const searchParams = useSearchParams();

  // Utilizo el useEffect para guardar los searchParams (UTMS) en localStorage

  useEffect(() => {
    const utms = {
      Origen_de_la_Campa_a: searchParams.get("utm_source"),
      Medio_de_la_Campa_a: searchParams.get("utm_medium"),
      Nombre_de_la_Campa_a: searchParams.get("utm_campaign"),
      T_rmino_de_la_Campa_a: searchParams.get("utm_term"),
      utm_content: searchParams.get("utm_content"),
    };

    // Solo guardás los que existen
    const filteredUtms = Object.fromEntries(
      Object.entries(utms).filter(([_, v]) => v)
    );

    if (Object.keys(filteredUtms).length > 0) {
      localStorage.setItem("utms", JSON.stringify(filteredUtms));
    }
  }, []);

  const toggleOption = (label) => {
    setSelectedOptions((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  useEffect(() => {
    updateForm({ paso1: selectedOptions });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  const options = [
    { label: "Autos", Icon: Auto },
    { label: "Colectivos", Icon: Colectivo },
    { label: "Camiones", Icon: Camion },
    { label: "Motos", Icon: Moto },
    { label: "Utilitarios", Icon: Utilitario },
    { label: "Máquinas Agrícolas", Icon: Agro },
  ];

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <p className={styles.title}>¡Empecemos!</p>
      <p className={styles.subtitle}>
        Seleccioná el tipo de vehículo de tu flota
      </p>
      <p className={styles.subtitle}>Podér seleccionar más de una opción</p>
      <div className={styles.container}>
        {options.map(({ label, Icon }) => (
          <div
            key={label}
            className={`${styles.box} ${
              selectedOptions.includes(label) ? styles.active : ""
            }`}
            onClick={() => toggleOption(label)}
          >
            <Icon size={100} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Paso1;
