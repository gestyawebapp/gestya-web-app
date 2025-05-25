"use client";

import { Mantenimiento } from "@/components/icons/Mantenimiento";
import { Localizacion } from "@/components/icons/Localizacion";
import { Kilometros } from "@/components/icons/Kilometros";
import { Entregas } from "@/components/icons/Entregas";
import { Choferes } from "@/components/icons/Choferes";
import { useCotiza } from "@/context/CotizaContext";
import { Aceite } from "@/components/icons/Aceite";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Paso3 = () => {
  const { formData, updateForm } = useCotiza();
  const [selectedOptions, setSelectedOptions] = useState(formData.paso3 || []);

  const toggleOption = (label) => {
    setSelectedOptions((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  useEffect(() => {
    updateForm({ paso3: selectedOptions });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedOptions]);

  const options = [
    { label: "Localizar y seguir vehículos", Icon: Localizacion },
    { label: "Verificar cargas de combustible", Icon: Aceite },
    { label: "Conocer el consumo por kilómetro", Icon: Kilometros },
    { label: "Minimizar el tiempo de entregas", Icon: Entregas },
    { label: "Reducir el gasto en mantenimiento", Icon: Mantenimiento },
    { label: "Aumentar la seguridad de choferes", Icon: Choferes },
  ];

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
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

export default Paso3;
