"use client";

import { Hamburger } from "@/components/icons/Hamburger";
import styles from "./styles.module.css";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link
              href={"/"}
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/funcionalidades"}
              className={`${styles.navLink} ${
                pathname === "/funcionalidades" ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link
              href={"/integraciones"}
              className={`${styles.navLink} ${
                pathname.startsWith("/integraciones") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Integraciones
            </Link>
          </li>
          <li>
            <Link
              href={"/servicios-oficiales"}
              className={`${styles.navLink} ${
                pathname.startsWith("/servicios-oficiales") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Servicios Oficiales
            </Link>
          </li>
          <li>
            <Link
              href={"/soluciones"}
              className={`${styles.navLink} ${
                pathname.startsWith("/soluciones") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Soluciones
            </Link>
          </li>
          <li>
            <Link
              href={"/colven"}
              className={`${styles.navLink} ${
                pathname.startsWith("/colven") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              COLVEN
            </Link>
          </li>
          <li>
            <Link
              href={"/contacto"}
              className={`${styles.navLink} ${
                pathname.startsWith("/contacto") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link href={"/"} className="button-primary">
              Cotizá ahora
            </Link>
          </li>
        </ul>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="navbarMobile" // Debe ser el id de la navbar mobile (accesibilidad)
      >
        <Hamburger size={20} />
      </button>
      <div
        id="navbarMobile"
        className={`${styles.navbarMobile} ${open ? styles.open : ""}`}
      >
        <ul>
          <li>
            <Link
              href={"/"}
              className={`${styles.navLink} ${
                pathname === "/" ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/funcionalidades"}
              className={`${styles.navLink} ${
                pathname === "/funcionalidades" ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Funcionalidades
            </Link>
          </li>
          <li>
            <Link
              href={"/integraciones"}
              className={`${styles.navLink} ${
                pathname.startsWith("/integraciones") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Integraciones
            </Link>
          </li>
          <li>
            <Link
              href={"/servicios-oficiales"}
              className={`${styles.navLink} ${
                pathname.startsWith("/servicios-oficiales") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Servicios Oficiales
            </Link>
          </li>
          <li>
            <Link
              href={"/soluciones"}
              className={`${styles.navLink} ${
                pathname.startsWith("/soluciones") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Soluciones
            </Link>
          </li>
          <li>
            <Link
              href={"/colven"}
              className={`${styles.navLink} ${
                pathname.startsWith("/colven") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              COLVEN
            </Link>
          </li>
          <li>
            <Link
              href={"/contacto"}
              className={`${styles.navLink} ${
                pathname.startsWith("/contacto") ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              Contacto
            </Link>
          </li>
          <li>
            <Link href={"/"} className="button-primary">
              Cotizá ahora
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Links;
