"use client";

import { Combustible } from "@/components/icons/Combustible";
import { Seguimiento } from "@/components/icons/Seguimiento";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import Link from "next/link";

const IntegracionesLayout = ({ children }) => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span>Integraciones de GESTYA</span> para la gestión de flotas
      </h2>
      <nav className={styles.linksWrapper}>
        <Link
          href="/integraciones/vigia"
          className={`${styles.linkVigia} ${
            pathname.startsWith(`/integraciones/vigia`) ? styles.active : ""
          }`}
        >
          <Seguimiento
            size={36}
            filled
            fill={
              pathname.startsWith(`/integraciones/vigia`) ? "#000" : "#606266"
            }
          />
          VIGIA
        </Link>
        <Link
          href="/integraciones/vitran"
          className={`${styles.linkVitran} ${
            pathname.startsWith(`/integraciones/vitran`) ? styles.active : ""
          }`}
        >
          <Combustible
            size={36}
            filled
            fill={
              pathname.startsWith(`/integraciones/vitran`) ? "#000" : "#606266"
            }
          />
          VITRAN
        </Link>
      </nav>
      <div>{children}</div>
    </div>
  );
};

export default IntegracionesLayout;
