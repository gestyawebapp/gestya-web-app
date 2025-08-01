import { getImageProps } from "next/image";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const InnovationSection = () => {
  const common = {
    alt: "",
    sizes: "",
  };
  const {
    props: { srcSet: desktop },
  } = getImageProps({
    ...common,
    width: 5613,
    height: 3942,
    quality: 80,
    src: "/images/home/innovacion-xl.png",
  });
  const {
    props: { srcSet: mobile, ...rest },
  } = getImageProps({
    ...common,
    width: 1625,
    height: 2295,
    quality: 80,
    src: "/images/home/innovacion-sm.png",
  });

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>Innovación</span> para el transporte y logística
        </h2>
        <p className={styles.text}>
          Con más de 50 años de experiencia,{" "}
          <span>la empresa COLVEN desarrolla y comercializa GESTYA</span> junto
          a otros productos también reconocidos por su calidad en Argentina y el
          mundo.
        </p>
      </div>
      <picture className={styles.imageWrapper}>
        <source media="(max-width: 991px)" srcSet={mobile} />
        <source media="(min-width: 992px)" srcSet={desktop} />
        <img {...rest} alt={rest.alt} />
      </picture>
      <div className={styles.logos}>
        <Image
          src={"/images/home/logo-gestya.png"}
          width={167}
          height={79}
          alt="Logo GESTYA"
        />
        <Image
          src={"/images/home/logo-vigia.png"}
          width={167}
          height={79}
          alt="Logo VIGIA"
        />
        <Image
          src={"/images/home/logo-viesa.png"}
          width={167}
          height={79}
          alt="Logo VIESA"
        />
        <Image
          src={"/images/home/logo-coblow.png"}
          width={167}
          height={79}
          alt="Logo COBLOW"
        />
        <Image
          src={"/images/home/logo-vitran.png"}
          width={199}
          height={79}
          alt="Logo VITRAN"
        />
        <Image
          src={"/images/home/logo-voryl.png"}
          width={167}
          height={79}
          alt="Logo VORYL"
        />
      </div>
      <Link href={"/colven"} className={"button-primary"}>
        Conocé más
      </Link>
    </section>
  );
};

export default InnovationSection;
