import styles from "./styles.module.css";
import Link from "next/link";

const InfoBar = () => {
  return (
    <div className={styles.container}>
      <div>Solicitá asesoramiento 0800-333-GESTYA (4378)</div>
      <Link
        href={"https://ar.gestya.com/StreetZ/"}
        target="_blank"
        className="button-info"
      >
        Iniciar Sesión en plataforma
      </Link>
    </div>
  );
};

export default InfoBar;
