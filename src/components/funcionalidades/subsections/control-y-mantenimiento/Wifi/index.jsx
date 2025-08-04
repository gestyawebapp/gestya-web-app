"use client";

import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const Wifi = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/wifi/gestya-wifi.png"
            }
            width={217}
            height={100}
            alt=""
          />
          <h2 className={styles.title}>
            <span>GESTYA</span> WIFI
          </h2>
          <h3 className={styles.subtitle}>Transmisión de datos asegurada</h3>
          <p className={styles.text}>
            GESTYA WIFI garantiza la transmisión de datos en zonas agrícolas,
            mineras y petroleras donde la señal de comunicación es limitada.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/wifi/hero-sm.png"
            }
            width={750}
            height={536}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/control-y-mantenimiento/wifi/registro-sm.png"
            }
            width={750}
            height={811}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Registrá información</span> de vehículos aún sin conexión
          </h2>
          <p className={styles.text}>
            GESTYA WIFI asegura que todos los vehículos o máquinas que operan en
            áreas de trabajo remotas puedan transmitir datos a través una red
            WIFI, incluso cuando no hay cobertura GPRS.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>
            GESTYA WIFI garantiza los reportes
          </h3>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <div className={styles.block}>
              <span>Con el vehículo detenido:</span>
              <ul>
                <li>
                  Recibí reportes cada 2 minutos. El equipo sigue enviando datos
                  hasta agotar su batería interna.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <div className={styles.block}>
              <span>Con el vehículo en movimiento:</span>
              <ul>
                <li>
                  Recibí reportes cada 1 minuto. El sistema detecta cambios de
                  dirección de más de 30°.
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <div className={styles.block}>
              <span>Odómetro:</span>
              <ul>
                <li>
                  Asegurá los datos esenciales. El sistema sigue calculando los
                  kilómetros recorridos en tiempo real.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={styles.subtitle}>¿Cómo funciona GESTYA WIFI?</h3>
          <p className={styles.text}>
            Si el vehículo se encuentra fuera del rango de cobertura, ya sea por
            falta de señal celular o desconexión de la red WIFI configurada, los
            datos recolectados durante ese periodo no se pierden: se almacenan
            de forma segura y se transmiten automáticamente en cuanto se
            restablezca la conexión.
          </p>
          <div className={styles.item}>
            <Image
              src={
                "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
              }
              width={32}
              height={32}
              alt=""
            />
            <div className={styles.block}>
              <span>
                Asegurá las operaciones en zonas de baja señal, como zonas
                agrícolas, mineras y petroleras. Gestioná los vehículos o
                máquinas con la flexibilidad que necesitás para un control
                eficiente.
              </span>
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default Wifi;
