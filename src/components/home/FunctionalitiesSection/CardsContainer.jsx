import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";

const CardsContainer = ({ cards }) => {
  return (
    <div className={styles.cards}>
      <AnimatePresence mode="wait">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className={styles.card}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{
              duration: 0.15,
              ease: [0.25, 0.1, 0.25, 1], // ease-in-out clásico
            }}
            style={{ backgroundImage: `url(${card.img})` }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link href={card.href} className="button-info">
              Ver más
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default CardsContainer;
