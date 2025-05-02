"use client";

import { SquareArrowUp } from "@/components/icons/SquareArrowUp";
import styles from "./styles.module.css";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={styles.button}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      <SquareArrowUp size={48} />
    </button>
  );
};

export default ScrollToTopButton;
