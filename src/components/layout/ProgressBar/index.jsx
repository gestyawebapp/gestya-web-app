"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const steps = [1, 2, 3, 4];

export const ProgressBar = () => {
  const pathname = usePathname();

  const currentStep = pathname.includes("/cotiza/gracias")
    ? 4
    : parseInt(pathname.match(/\d+/)?.[0] || "1", 10);

  const progressPercent = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className={styles.wrapper}>
      <div className={styles.steps}>
        <div className={styles.lineContainer}>
          <div className={styles.baseLine} />
          <motion.div
            className={styles.fillLine}
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        {steps.map((step) => (
          <div key={step} className={styles.stepWrapper}>
            <motion.div
              className={`${styles.circle} ${
                step <= currentStep ? styles.active : ""
              }`}
              animate={
                step === currentStep
                  ? {
                      scale: 1.2,
                      boxShadow: "0 0 0 6px rgba(255, 111, 0, 0.2)",
                    }
                  : {
                      scale: 1,
                      boxShadow: "0 0 0 0 rgba(0,0,0,0)",
                    }
              }
              transition={{ duration: 0.3 }}
            >
              {step}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};
