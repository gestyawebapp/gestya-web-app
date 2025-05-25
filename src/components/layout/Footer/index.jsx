import { Facebook } from "@/components/icons/Facebook";
import { Instagram } from "@/components/icons/Instagram";
import { LinkedIn } from "@/components/icons/LinkedIn";
import { Youtube } from "@/components/icons/Youtube";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.footerHero}>
          <p className={styles.title}>Mantengámonos en contacto</p>
          <p className={styles.text}>Seguinos en nuestras Redes Sociales</p>
          <div className={styles.iconsWrapper}>
            <Link
              href={"https://www.facebook.com/gestya.flotas/?locale=es_LA"}
              target="_blank"
            >
              <Facebook size={40} />
            </Link>
            <Link
              href={"https://www.instagram.com/gestyaservicio/?hl=es"}
              target="_blank"
            >
              <Instagram size={40} />
            </Link>
            <Link
              href={
                "https://www.linkedin.com/showcase/gestyaservicio/posts/?feedView=all"
              }
              target="_blank"
            >
              <LinkedIn size={40} />
            </Link>
            <Link
              href={"https://www.youtube.com/@GestyaServicio"}
              target="_blank"
            >
              <Youtube size={40} filled />
            </Link>
          </div>
        </div>
        <div className={styles.footerLists}>
          <div>
            <p>Planta central</p>
            <ul>
              <li>Ruta 11 Km. 814, (S3574XAB)</li>
              <li>Guadalupe Norte Santa Fe - Argentina</li>
              <li>Tel: +54 03482 498 800.</li>
              <li>
                E-mail: <span>colven@colven.com.ar</span>
              </li>
            </ul>
          </div>
          <div>
            <p>Oficina comercial y Centro de distribución:</p>
            <ul>
              <li>Cerrito 1280, (B1714ARF) Ituzaingó</li>
              <li>Buenos Aires - Argentina</li>
              <li>Tel: +54 011 4106 0600</li>
              <li>
                E-mail: <span>colvenba@colven.com.ar</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLinks}>
          <ul>
            <li>
              <Link href={"/funcionalidades"}>Funcionalidades</Link>
            </li>
            <li>
              <Link href={"/integraciones"}>Integraciones</Link>
            </li>
            <li>
              <Link href={"/servicios-oficiales"}>Servicios Oficiales</Link>
            </li>
            <li>
              <Link href={"/soluciones"}>Soluciones</Link>
            </li>
            <li>
              <Link href={"/colven"}>COLVEN</Link>
            </li>
            <li>
              <Link href={"/contacto"}>Contacto</Link>
            </li>
            <li>
              <Link href={"/cotiza"}>Cotizá ahora</Link>
            </li>
            <li>
              <Link href={"/privacidad"}>Privacidad</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
