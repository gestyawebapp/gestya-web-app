import styles from "./styles.module.css";

const FunctionalitySpecifics = ({ title, description, image }) => {
  return (
    <section className={styles.section}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={image} alt={title} />
    </section>
  );
};

export default FunctionalitySpecifics;
