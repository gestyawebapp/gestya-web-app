"use client";

import { UTMGrabber } from "../../../components/cotiza/UTMGrabber";
import { Utilitario } from "@/components/icons/Utilitario";
import { Colectivo } from "@/components/icons/Colectivo";
import { useCotiza } from "@/context/CotizaContext";
import { Camion } from "@/components/icons/Camion";
import { Auto } from "@/components/icons/Auto";
import { Moto } from "@/components/icons/Moto";
import { Agro } from "@/components/icons/Agro";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { Suspense } from "react";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Paso1 = () => {
  console.log(process.env.NODE_ENV);

  const { formData, updateForm } = useCotiza();
  const [selectedOptions, setSelectedOptions] = useState(formData.paso1 || []);

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
      <Suspense fallback={null}>
        <UTMGrabber />
      </Suspense>
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
