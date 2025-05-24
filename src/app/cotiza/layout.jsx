"use client";

import { CotizaProvider, useCotiza } from "@/context/CotizaContext";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

const steps = [
  "/cotiza/paso-1",
  "/cotiza/paso-2",
  "/cotiza/paso-3",
  "/cotiza/paso-4",
];

function CotizaLayoutInner({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const { formData } = useCotiza();

  const currentStepIndex = steps.findIndex((path) => pathname === path);

  const isStepValid = (stepIndex) => {
    const key = `paso${stepIndex + 1}`;
    const data = formData[key];

    switch (stepIndex) {
      case 0:
        return Array.isArray(data) && data.length > 0;

      case 1:
        return typeof data === "string" && data !== "";

      case 2:
        return Array.isArray(data) && data.length > 0;

      case 3:
        return true;

      default:
        return false;
    }
  };

  const goToStep = (index) => {
    if (index >= 0 && index < steps.length) {
      // Solo permito avanzar si paso actual está validado
      if (index > currentStepIndex && !isStepValid(currentStepIndex)) {
        alert("Completa el paso antes de continuar");
        return;
      }
      router.push(steps[index]);
    }
  };

  const [displayedPath, setDisplayedPath] = useState(pathname);

  useEffect(() => {
    setDisplayedPath(pathname);
  }, [pathname]);

  console.log(formData);

  return (
    <div className={styles.layout}>
      <AnimatePresence mode="wait">
        <motion.div
          key={displayedPath}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <div className={styles.buttons}>
        <button
          className="button-primary"
          onClick={() => goToStep(currentStepIndex - 1)}
          disabled={currentStepIndex === 0}
        >
          Anterior
        </button>

        {currentStepIndex === steps.length - 1 ? (
          <button className="button-primary" type="submit" form="form-cotiza">
            Enviar
          </button>
        ) : (
          <button
            className="button-primary"
            onClick={() => goToStep(currentStepIndex + 1)}
            disabled={!isStepValid(currentStepIndex)}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
}

export default function CotizaLayout({ children }) {
  return (
    <CotizaProvider>
      <CotizaLayoutInner>{children}</CotizaLayoutInner>
    </CotizaProvider>
  );
}
