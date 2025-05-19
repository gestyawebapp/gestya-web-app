import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Hacé tu consulta a GESTYA</h1>
      <h2 className={styles.subtitle}>Integración más allá de la distancia</h2>
      <p className={styles.text}>
        Contactá a GESTYA por teléfono o por correo completando el formulario.
      </p>
      <p className={styles.text}>
        El Centro de Atención GESTYA te ofrece la ayuda y el soporte técnico que
        estás buscando.
      </p>
    </section>
  );
};

export default HeroSection;
