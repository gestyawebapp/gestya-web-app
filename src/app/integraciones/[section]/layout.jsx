"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import Link from "next/link";

const allIntegracionesSubsections = {
  vigia: [
    {
      label: "Calibrador Electrónico de Neumáticos",
      path: "calibrador-de-neumaticos",
    },
    { label: "Protector Automático de Motor", path: "protector-de-motor" },
  ],
  vitran: [{ label: "Monitor de Presión", path: "monitor-de-presion" }],
};

const IntegracionesSectionLayout = ({ children, params }) => {
  const pathname = usePathname();

  const { section } = params;

  const specificSubsections = allIntegracionesSubsections[section];

  return (
    <div>
      <nav className={styles.linksWrapper}>
        {specificSubsections.map(({ label, path }) => {
          const fullPath = `/integraciones/${section}/${path}`;
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

export default IntegracionesSectionLayout;
