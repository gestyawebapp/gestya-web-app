import styles from "./styles.module.css";
import Image from "next/image";

const ProductsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <span>Productos</span> COLVEN
        </h2>
        <p className={styles.text}>
          <span>El Grupo COLVEN está formado por diferentes marcas</span> a
          través de las que comercializa sus herramientas y productos,
          ampliamente reconocidos por su calidad e innovación orientada al
          cliente.
        </p>
      </div>
      <div className={styles.images}>
        <div className={styles.logos}>
          <Image
            src={"/images/home/logo-gestya.png"}
            width={158}
            height={73}
            alt="Logo GESTYA"
          />
          <Image
            src={"/images/home/logo-vigia.png"}
            width={158}
            height={73}
            alt="Logo VIGIA"
          />
          <Image
            src={"/images/home/logo-viesa.png"}
            width={158}
            height={73}
            alt="Logo VIESA"
          />
          <Image
            src={"/images/home/logo-coblow.png"}
            width={158}
            height={73}
            alt="Logo COBLOW"
          />
          <Image
            src={"/images/home/logo-vitran.png"}
            width={158}
            height={73}
            alt="Logo VITRAN"
          />
          <Image
            src={"/images/home/logo-voryl.png"}
            width={158}
            height={73}
            alt="Logo VORYL"
          />
        </div>
        <div className={styles.products}>
          <Image
            src={"/images/colven/products-1.png"}
            width={336}
            height={313}
            alt="Producto GESTYA 1"
          />
          <Image
            src={"/images/colven/products-2.png"}
            width={336}
            height={313}
            alt="Producto GESTYA 2"
          />
          <Image
            src={"/images/colven/products-3.png"}
            width={336}
            height={313}
            alt="Producto GESTYA 3"
          />
          <Image
            src={"/images/colven/products-4.png"}
            width={336}
            height={313}
            alt="Producto GESTYA 4"
          />
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
