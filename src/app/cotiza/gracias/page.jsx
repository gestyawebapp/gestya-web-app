"use client";

import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const GraciasPage = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1489,
    height: 538,
    quality: 80,
    src: "/images/home/tecnologia-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 757,
    height: 1088,
    quality: 80,
    src: "/images/home/tecnologia-sm.png",
  });

  return (
    <motion.div
      className={styles.container}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <picture className={styles.imageWrapper}>
        <source media="(max-width: 991px)" srcSet={mobile} />
        <source media="(min-width: 992px)" srcSet={desktop} />
        <img {...rest} alt={rest.alt} />
      </picture>
    </motion.div>
  );
};

export default GraciasPage;
