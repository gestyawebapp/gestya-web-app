import ContactForm from "../ContactForm";
import styles from "./styles.module.css";
import Image from "next/image";

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.information}>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Image
              src={"/images/contacto/icono-usuario.png"}
              width={119}
              height={119}
              alt="Icono de usuario"
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Conectá con GESTYA</h3>
            <p className={styles.text}>
              Estamos para responder tus preguntas sobre nuestro servicio,
              funcionalidades, integraciones, soporte y más.
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Image
              src={"/images/contacto/icono-asistencia.png"}
              width={119}
              height={119}
              alt="Icono de asistencia telefónica"
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>
              Centro de atención GESTYA Disponible 24 hs
            </h3>
            <p className={styles.text}>
              <span>0800-333-GESTYA (4378)</span>
            </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.logoWrapper}>
            <Image
              src={"/images/contacto/icono-fabrica.png"}
              width={119}
              height={119}
              alt="Icono de la planta central"
            />
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>Planta central</h3>
            <ul className={styles.list}>
              <li>Ruta 11 Km. 814, (S3574XAB)</li>
              <li>Guadalupe Norte Santa Fe - Argentina</li>
              <li>Tel: +54 03482 498 800</li>
              <li>
                E-mail: <span>colven@colven.com.ar</span>
              </li>
            </ul>
            <h3 className={styles.title}>
              Oficina comercial y Centro de distribución:
            </h3>
            <ul className={styles.list}>
              <li>Cerrito 1280, (B1714ARF) Ituzaingo</li>
              <li>Buenos Aires - Argentina</li>
              <li>Tel: +54 011 4106 0600</li>
              <li>
                E-mail: <span>colvenba@colven.com.ar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
