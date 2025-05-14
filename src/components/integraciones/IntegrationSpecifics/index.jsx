import styles from "./styles.module.css";
import Image from "next/image";
const IntegrationSpecifics = ({ hero, info, extra, pricing }) => {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <Image
            src={hero.logoUrl}
            alt={hero.logoAlt}
            width={159}
            height={73}
          />
          <h2>{hero.title}</h2>
          <p>{hero.subtitle}</p>
          <p>{hero.text}</p>
          <button>{hero.button}</button>
        </div>
        <div>
          <img src={hero.imgUrl} alt={hero.imgAlt} />
        </div>
      </section>
      <section className={styles.info}>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2></h2>
          <p></p>
          <p></p>
        </div>
      </section>
      <section className={styles.extra}>
        <div>
          <h2></h2>
          <p></p>
        </div>
        <div>
          <h3></h3>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
          <div>
            <img src="" alt="" />
            <p></p>
          </div>
        </div>
      </section>
      <section className={styles.pricing}></section>
    </>
  );
};

export default IntegrationSpecifics;
