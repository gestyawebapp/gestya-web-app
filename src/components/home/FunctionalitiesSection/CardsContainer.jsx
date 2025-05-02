import { motion } from "framer-motion";
import styles from "./styles.module.css";
import Link from "next/link";

const CardsContainer = ({ cards }) => {
  const cardCount = cards.length;
  const gridClass = cardCount === 4 ? styles["cards-4"] : styles["cards-3"];

  return (
    <div className={`${styles.cards} ${gridClass}`}>
      {cards.map(({ title, description, img, href }, index) => (
        <motion.div
          key={title}
          className={styles.card}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.125 * index },
          }}
          viewport={{ once: true }}
          style={{ backgroundImage: `url(${img})` }}
        >
          <h3>{title}</h3>
          <p>{description}</p>
          <Link href={href} className="button-info">
            Ver más
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default CardsContainer;
