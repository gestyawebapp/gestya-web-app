"use client";

import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { cards } from "./cardsData";
import Image from "next/image";
import Link from "next/link";

const CardsContainer = () => {
  return (
    <div className={styles.cards}>
      {cards.map(({ tag, title, description, img, alt, href }, index) => (
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
          <Image src={img} width={454} height={202} alt={alt} />
          <div className={styles.cardWrapper}>
            <span className={styles.green}>{tag}</span>
            <h3>{title} </h3>
            <p>{description}</p>
            <Link href={href} className="button-info">
              Ver más
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardsContainer;
