"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import Link from "next/link";

const allFuncionalidadesSubsections = {
  "seguimiento-de-vehiculos": [
    { label: "Gestión", path: "gestion" },
    { label: "Logística", path: "logistica" },
    { label: "Planificación", path: "planificacion" },
    { label: "Alarmas", path: "alarmas" },
  ],
  "ahorro-de-combustible": [
    { label: "Eco Drive", path: "eco-drive" },
    { label: "Cargas de Combustible", path: "cargas-de-combustible" },
  ],
  "control-y-mantenimiento": [
    { label: "Horas de Marcha", path: "horas-de-marcha" },
    { label: "Scoring", path: "scoring" },
    { label: "Wifi", path: "wifi" },
  ],
};

const FuncionalidadesSectionLayout = ({ children, params }) => {
  const pathname = usePathname();

  const { section } = params;

  const specificSubsections = allFuncionalidadesSubsections[section];

  return (
    <div>
      <nav className={styles.linksWrapper}>
        {specificSubsections.map(({ label, path }) => {
          const fullPath = `/funcionalidades/${section}/${path}`;
          const isActive = pathname === fullPath; // Si el pathname coincide con fullPath, la ruta es activa

          return (
            <Link
              key={path}
              href={fullPath}
              data-section={section} // Uso un atr data-section para aplicar estilos acordes al .active
              className={`${styles.link} ${isActive ? styles.active : ""}`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default FuncionalidadesSectionLayout;
