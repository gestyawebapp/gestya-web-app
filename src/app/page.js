import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <h1>
            Solución para <span>monitorear</span> flotas, optimizar la logística
            y reducir costos
          </h1>
          <Link href="#" className="button-primary">
            Solicitar más información
          </Link>
        </div>
      </div>
    </main>
  );
}
