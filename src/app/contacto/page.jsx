import ContactSection from "@/components/contacto/ContactSection";
import HeroSection from "@/components/contacto/HeroSection";
import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

const ContactoPage = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 1378,
    height: 589,
    quality: 80,
    src: "/images/home/monitoreo-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 363,
    height: 558,
    quality: 80,
    src: "/images/home/monitoreo-sm.png",
  });

  return (
    <>
      <HeroSection />
      <ContactSection />
      <div className={styles.container}>
        <picture className={styles.imageWrapper}>
          <source media="(max-width: 991px)" srcSet={mobile} />
          <source media="(min-width: 992px)" srcSet={desktop} />
          <img {...rest} alt={rest.alt} />
        </picture>
      </div>
      <div className={styles.privacy}>
        <div className={styles.privacyWrapper}>
          <h2 className={styles.title}>Política de privacidad</h2>
          <p className={styles.text}>
            GESTYA puede guardar, almacenar y usar los datos proporcionados para
            mejorar el servicio al cliente según se describe en la{" "}
            <Link href="/privacidad" className={styles.link}>
              política de privacidad de GESTYA
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactoPage;
