"use client";

import { ChevronDown } from "@/components/icons/ChevronDown";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const NavbarDesktop = () => {
  const pathname = usePathname();

  const [isIntegrationsMenuOpen, setIsIntegrationsMenuOpen] = useState(false);
  const [isFunctionalitiesMenuOpen, setIsFunctionalitiesMenuOpen] =
    useState(false);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "flex",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li
            className={`${styles.navItem} ${
              pathname === "/" ? styles.active : ""
            }`}
          >
            <Link href={"/"} className={`${styles.navLink}`}>
              Home
            </Link>
          </li>
          <motion.li
            onHoverStart={() => setIsFunctionalitiesMenuOpen(true)}
            onHoverEnd={() => setIsFunctionalitiesMenuOpen(false)}
            className={`${styles.navItem} ${styles.hasSubmenu}`}
            key={"functionalities"}
          >
            <span className={styles.navLink}>
              Funcionalidades{" "}
              <ChevronDown
                animate={{ rotate: isFunctionalitiesMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.1 }}
              />
            </span>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isFunctionalitiesMenuOpen ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <ul className={`${styles.column} ${styles.functionalities}`}>
                <li>
                  <Link href="/funcionalidades/seguimiento-de-vehiculos/gestion">
                    <h4>Seguimiento de Vehículos</h4>
                    <span>Gestión</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/seguimiento-de-vehiculos/logistica">
                    <h4>Seguimiento de Vehículos</h4>
                    <span>Logística</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/seguimiento-de-vehiculos/distancia-recorrida">
                    <h4>Seguimiento de Vehículos</h4>
                    <span>Distancia recorrida</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/seguimiento-de-vehiculos/planificacion">
                    <h4>Seguimiento de Vehículos</h4>
                    <span>Planificación</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/seguimiento-de-vehiculos/alarmas">
                    <h4>Seguimiento de Vehículos</h4>
                    <span>Alarmas</span>
                  </Link>
                </li>
              </ul>
              <ul className={`${styles.column} ${styles.functionalities}`}>
                <li>
                  <Link href="/funcionalidades/ahorro-de-combustible/eco-drive">
                    <h4>Ahorro de combustible</h4>
                    <span>Eco Drive</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/ahorro-de-combustible/level-control">
                    <h4>Ahorro de combustible</h4>
                    <span>Level Control</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/ahorro-de-combustible/cargas-de-combustible">
                    <h4>Ahorro de combustible</h4>
                    <span>Cargas de combustible</span>
                  </Link>
                </li>
              </ul>
              <ul className={`${styles.column} ${styles.functionalities}`}>
                <li>
                  <Link href="/funcionalidades/control-y-mantenimiento/horas-de-marcha">
                    <h4>Control y Mantenimiento</h4>
                    <span>Horas de Marcha</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/control-y-mantenimiento/scoring">
                    <h4>Control y Mantenimiento</h4>
                    <span>Scoring</span>
                  </Link>
                </li>
                <li>
                  <Link href="/funcionalidades/control-y-mantenimiento/wifi">
                    <h4>Control y Mantenimiento</h4>
                    <span>Wifi</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.li>
          <motion.li
            onHoverStart={() => setIsIntegrationsMenuOpen(true)}
            onHoverEnd={() => setIsIntegrationsMenuOpen(false)}
            className={`${styles.navItem} ${styles.hasSubmenu}`}
            key={"integrations"}
          >
            <span className={styles.navLink}>
              Integraciones{" "}
              <ChevronDown
                animate={{ rotate: isIntegrationsMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.1 }}
              />
            </span>
            <motion.div
              className={styles.submenu}
              initial="exit"
              animate={isIntegrationsMenuOpen ? "enter" : "exit"}
              variants={subMenuAnimate}
            >
              <ul className={`${styles.column} ${styles.integrations}`}>
                <li>
                  <Link href="/integraciones/vigia/calibrador-de-neumaticos">
                    <h4>VIGIA</h4>
                    <span>Calibrador de Neumáticos</span>
                  </Link>
                </li>
                <li>
                  <Link href="/integraciones/vigia/protector-de-motor">
                    <h4>VIGIA</h4>
                    <span>Protector de Motor</span>
                  </Link>
                </li>
              </ul>
              <ul className={`${styles.column} ${styles.integrations}`}>
                <li>
                  <Link href="/integraciones/vitran/eco-drive">
                    <h4>VITRÁN</h4>
                    <span>Eco Drive</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.li>
          <li className={styles.navItem}>
            <Link href={"/servicios-oficiales"} className={`${styles.navLink}`}>
              Servicios Oficiales
            </Link>
          </li>
          <li
            className={`${styles.navItem} ${
              pathname.startsWith("/soluciones") ? styles.active : ""
            }`}
          >
            <Link href={"/soluciones"} className={`${styles.navLink}`}>
              Soluciones
            </Link>
          </li>
          <li
            className={`${styles.navItem} ${
              pathname.startsWith("/colven") ? styles.active : ""
            }`}
          >
            <Link href={"/colven"} className={`${styles.navLink}`}>
              COLVEN
            </Link>
          </li>
          <li
            className={`${styles.navItem} ${
              pathname.startsWith("/contacto") ? styles.active : ""
            }`}
          >
            <Link href={"/contacto"} className={`${styles.navLink}`}>
              Contacto
            </Link>
          </li>
          <Link href={"/"} className={`button-primary ${styles.small}`}>
            Cotizá ahora
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavbarDesktop;
