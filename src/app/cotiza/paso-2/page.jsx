"use client";

import { useCotiza } from "@/context/CotizaContext";
import { useState } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const opciones = [
  { value: "De 1 a 5 unidades", label: "De 1 a 5 unidades" },
  { value: "De 10 a 20 unidades", label: "De 10 a 20 unidades" },
  { value: "De 20 a 50 unidades", label: "De 20 a 50 unidades" },
  { value: "De 50 a 100 unidades", label: "De 50 a 100 unidades" },
  { value: "Más de 100 unidades", label: "Más de 100 unidades" },
];

const Paso2 = () => {
  const { formData, updateForm } = useCotiza();

  const [selected, setSelected] = useState(formData.paso2 || "");

  const handleChange = (value) => {
    setSelected(value);
    updateForm({ paso2: value });
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <p className={styles.title}>¡Muy bien!</p>
      <p className={styles.subtitle}>
        Contanos cuántos vehículos tiene tu flota
      </p>
      <div className={styles.container}>
        {opciones.map(({ value, label }) => (
          <label
            className={styles.label}
            key={value}
            style={{ display: "block", margin: "0.5rem 0" }}
          >
            <input
              className={styles.input}
              type="radio"
              name="paso2"
              value={value}
              checked={selected === value}
              onChange={() => handleChange(value)}
            />
            {label}
          </label>
        ))}
      </div>
    </motion.div>
  );
};

export default Paso2;
