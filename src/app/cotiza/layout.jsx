"use client";

import { CotizaProvider, useCotiza } from "@/context/CotizaContext";
import { ProgressBar } from "@/components/layout/ProgressBar";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const steps = [
  "/cotiza/paso-1",
  "/cotiza/paso-2",
  "/cotiza/paso-3",
  "/cotiza/paso-4",
];

const stepTitles = [
  {
    title: "¡Empecemos!",
    subtitle:
      "Seleccioná el tipo de vehículo de tu flota. Podés seleccionar más de una opción",
  },
  {
    title: "¡Muy bien!",
    subtitle: "Contanos cuántos vehículos tiene tu flota",
  },
  {
    title: "¡Sigamos!",
    subtitle:
      "¿Hay una solución específica que necesitás? Podés seleccionar más de una opción",
  },
  {
    title: "¡Último paso!",
    subtitle: "Completá con tus datos para contactarte",
  },
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

  return (
    <div className={styles.layout}>
      {pathname === "/cotiza/gracias" ? (
        <>
          <p className={styles.message}>
            ¡Gracias! Pronto uno de los comerciales se contactará con vos para
            acercarte una solución personalizada para tus necesidades
          </p>
        </>
      ) : currentStepIndex >= 0 && stepTitles[currentStepIndex] ? (
        <>
          <p className={styles.title}>{stepTitles[currentStepIndex].title}</p>
          <p className={styles.subtitle}>
            {stepTitles[currentStepIndex].subtitle}
          </p>
        </>
      ) : null}
      <ProgressBar />
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
        {!pathname.startsWith("/cotiza/gracias") ? (
          <>
            <button
              className="button-primary"
              onClick={() => goToStep(currentStepIndex - 1)}
              disabled={currentStepIndex === 0}
            >
              Anterior
            </button>
            {currentStepIndex === steps.length - 1 ? (
              <button
                className="button-primary"
                type="submit"
                form="form-cotiza"
              >
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
          </>
        ) : (
          <Link className="button-primary" href={"/"}>
            Volver al Home
          </Link>
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
