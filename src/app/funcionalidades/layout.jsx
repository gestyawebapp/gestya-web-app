"use client";

import { Combustible } from "@/components/icons/Combustible";
import { Seguimiento } from "@/components/icons/Seguimiento";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import Link from "next/link";

const FuncionalidadesLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span>Funcionalidades de GESTYA</span> para la gestión de flotas
      </h2>
      <nav className={styles.linksWrapper}>
        <Link
          href="/funcionalidades/seguimiento-de-vehiculos"
          className={`${styles.linkSeguimientoDeVehiculos} ${
            pathname.startsWith(`/funcionalidades/seguimiento-de-vehiculos`)
              ? styles.active
              : ""
          }`}
        >
          <Seguimiento
            size={36}
            filled
            fill={
              pathname.startsWith(`/funcionalidades/seguimiento-de-vehiculos`)
                ? "#fff"
                : "#606266"
            }
          />
          Seguimiento de Vehículos
        </Link>
        <Link
          href="/funcionalidades/ahorro-de-combustible"
          className={`${styles.linkAhorroDeCombustible} ${
            pathname.startsWith(`/funcionalidades/ahorro-de-combustible`)
              ? styles.active
              : ""
          }`}
        >
          <Combustible
            size={36}
            filled
            fill={
              pathname.startsWith(`/funcionalidades/ahorro-de-combustible`)
                ? "#fff"
                : "#606266"
            }
          />
          Ahorro de Combustible
        </Link>
        <Link
          href="/funcionalidades/control-y-mantenimiento"
          className={`${styles.linkControlYMantenimiento} ${
            pathname.startsWith(`/funcionalidades/control-y-mantenimiento`)
              ? styles.active
              : ""
          }`}
        >
          <Combustible
            size={36}
            filled
            fill={
              pathname.startsWith(`/funcionalidades/control-y-mantenimiento`)
                ? "#fff"
                : "#606266"
            }
          />
          Control y Mantenimiento
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default FuncionalidadesLayout;
