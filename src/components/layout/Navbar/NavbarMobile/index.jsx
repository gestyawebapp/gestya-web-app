"use client";

import { ChevronDown } from "@/components/icons/ChevronDown";
import { ArrowRight } from "@/components/icons/ArrowRight";
import { Hamburger } from "@/components/icons/Hamburger";
import { Close } from "@/components/icons/Close";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const NavbarMobile = () => {
  const pathname = usePathname();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const [isIntegrationsMenuOpen, setIsIntegrationsMenuOpen] = useState(false);
  const [isFunctionalitiesMenuOpen, setIsFunctionalitiesMenuOpen] =
    useState(false);

  const toggleSubmenu = (menu) => {
    setIsFunctionalitiesMenuOpen(
      menu === "functionalities" ? !isFunctionalitiesMenuOpen : false
    );
    setIsIntegrationsMenuOpen(
      menu === "integrations" ? !isIntegrationsMenuOpen : false
    );
  };

  const navbarAnimate = {
    hidden: {
      height: 0,
      overflow: "hidden", // Necesario
    },
    open: {
      height: "auto",
    },
  };

  const subMenuAnimate = {
    hidden: {
      height: 0,
      overflow: "hidden", // Necesario
    },
    open: {
      height: "auto",
      marginTop: "0.75rem",
    },
  };

  return (
    <div className={styles.navWrapper}>
      <button
        className={styles.menuButton}
        onClick={() => setIsNavbarOpen((prev) => !prev)}
        aria-expanded={isNavbarOpen}
        aria-controls="navbarMobile"
      >
        {isNavbarOpen ? <Close size={20} filled /> : <Hamburger size={20} />}
      </button>
      <motion.div
        id="navbarMobile"
        className={styles.navbar}
        initial="hidden"
        animate={isNavbarOpen ? "open" : "hidden"}
        variants={navbarAnimate}
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link
              href={"/"}
              className={`${pathname === "/" ? styles.active : ""}`}
              onClick={() => {
                setIsNavbarOpen(false);
                setIsFunctionalitiesMenuOpen(false);
                setIsIntegrationsMenuOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <motion.li
            onClick={() => toggleSubmenu("functionalities")}
            className={`${styles.navItem} ${styles.hasMobileSubmenu} ${
              isFunctionalitiesMenuOpen ? styles.open : ""
            }`}
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
              className={styles.mobileSubmenu}
              initial="hidden"
              animate={isFunctionalitiesMenuOpen ? "open" : "hidden"}
              variants={subMenuAnimate}
            >
              <ul className={`${styles.column} ${styles.functionalities}`}>
                <li>
                  <Link
                    href="/funcionalidades/seguimiento-de-vehiculos/gestion"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Seguimiento de Vehículos</h4>
                    <ArrowRight size={20} />
                    <span>Gestión</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funcionalidades/seguimiento-de-vehiculos/logistica"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Seguimiento de Vehículos</h4>
                    <ArrowRight size={20} />
                    <span>Logística</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funcionalidades/seguimiento-de-vehiculos/planificacion"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Seguimiento de Vehículos</h4>
                    <ArrowRight size={20} />
                    <span>Planificación</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funcionalidades/seguimiento-de-vehiculos/alarmas"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Seguimiento de Vehículos</h4>
                    <ArrowRight size={20} />
                    <span>Alarmas</span>
                  </Link>
                </li>
              </ul>
              <ul className={`${styles.column} ${styles.functionalities}`}>
                <li>
                  <Link
                    href="/funcionalidades/ahorro-de-combustible/eco-drive"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Ahorro de Combustible</h4>
                    <ArrowRight size={20} />
                    <span>Eco Drive</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funcionalidades/ahorro-de-combustible/cargas-de-combustible"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Ahorro de Combustible</h4>
                    <ArrowRight size={20} />
                    <span>Cargas de Combustible</span>
                  </Link>
                </li>
              </ul>
              <ul className={`${styles.column} ${styles.functionalities}`}>
                <li>
                  <Link
                    href="/funcionalidades/control-y-mantenimiento/horas-de-marcha"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Control y Mantenimiento</h4>
                    <ArrowRight size={20} />
                    <span>Horas de Marcha</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funcionalidades/control-y-mantenimiento/scoring"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Control y Mantenimiento</h4>
                    <ArrowRight size={20} />
                    <span>Scoring</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/funcionalidades/control-y-mantenimiento/wifi"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>Control y Mantenimiento</h4>
                    <ArrowRight size={20} />
                    <span>Wifi</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.li>
          <motion.li
            onClick={() => toggleSubmenu("integrations")}
            className={`${styles.navItem} ${styles.hasMobileSubmenu} ${
              isIntegrationsMenuOpen ? styles.open : ""
            }`}
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
              className={styles.mobileSubmenu}
              initial="hidden"
              animate={isIntegrationsMenuOpen ? "open" : "hidden"}
              variants={subMenuAnimate}
            >
              <ul className={`${styles.column} ${styles.integrations}`}>
                <li>
                  <Link
                    href="/integraciones/vigia/calibrador-de-neumaticos"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>VIGIA</h4>
                    <ArrowRight size={20} />
                    <span>Calibrador de Neumáticos</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/integraciones/vigia/protector-de-motor"
                    onClick={() => {
                      setIsNavbarOpen(false);
                      setIsFunctionalitiesMenuOpen(false);
                      setIsIntegrationsMenuOpen(false);
                    }}
                  >
                    <h4>VIGIA</h4>
                    <ArrowRight size={20} />
                    <span>Protector de Motor</span>
                  </Link>
                </li>
              </ul>
              <ul
                className={`${styles.column} ${styles.integrations}`}
                onClick={() => {
                  setIsNavbarOpen(false);
                  setIsFunctionalitiesMenuOpen(false);
                  setIsIntegrationsMenuOpen(false);
                }}
              >
                <li>
                  <Link href="/integraciones/vitran/monitor-de-presion">
                    <h4>VITRAN</h4>
                    <ArrowRight size={20} />
                    <span>Monitor de Presión</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </motion.li>
          <li className={styles.navItem}>
            <Link
              href={"/servicios-oficiales"}
              onClick={() => {
                setIsNavbarOpen(false);
                setIsFunctionalitiesMenuOpen(false);
                setIsIntegrationsMenuOpen(false);
              }}
            >
              Servicios Oficiales
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href={"/soluciones"}
              className={`${
                pathname.startsWith("/soluciones") ? styles.active : ""
              }`}
              onClick={() => {
                setIsNavbarOpen(false);
                setIsFunctionalitiesMenuOpen(false);
                setIsIntegrationsMenuOpen(false);
              }}
            >
              Soluciones
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href={"/colven"}
              className={`${
                pathname.startsWith("/colven") ? styles.active : ""
              }`}
              onClick={() => {
                setIsNavbarOpen(false);
                setIsFunctionalitiesMenuOpen(false);
                setIsIntegrationsMenuOpen(false);
              }}
            >
              COLVEN
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link
              href={"/contacto"}
              className={`${
                pathname.startsWith("/contacto") ? styles.active : ""
              }`}
              onClick={() => {
                setIsNavbarOpen(false);
                setIsFunctionalitiesMenuOpen(false);
                setIsIntegrationsMenuOpen(false);
              }}
            >
              Contacto
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.small}`}>
            <Link
              href={"/cotiza"}
              className={`button-primary`}
              onClick={() => {
                setIsNavbarOpen(false);
                setIsFunctionalitiesMenuOpen(false);
                setIsIntegrationsMenuOpen(false);
              }}
            >
              Cotizá ahora
            </Link>
          </li>
          <li className={styles.navItem}>
            <span>Solicitá asesoramiento 0800-333-GESTYA (4378)</span>
            <Link
              href={"https://ar.gestya.com/StreetZ/"}
              className="button-info"
            >
              Iniciar Sesión en plataforma
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default NavbarMobile;
