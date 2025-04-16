"use client";

import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { cards } from "./cardsData";
import Image from "next/image";

const CardsContainer = () => {
  return (
    <div className={styles.cards}>
      {cards.map(({ title, description, img, alt }, index) => (
        <motion.div
          key={index}
          className={styles.card}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.125 * index },
          }}
          viewport={{ once: true }}
        >
          <Image src={img} width={50} height={50} alt={alt} />
          <h3>{title} </h3>
          <p>{description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CardsContainer;
