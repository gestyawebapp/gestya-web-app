"use client";

import PricingSection from "@/components/home/PricingSection";
import styles from "./styles.module.css";
import Image from "next/image";

const Alarmas = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span>Alertas</span> de la plataforma
          </h2>
          <h3 className={styles.subtitle}>Alarmas/Alertas del Sistema</h3>
          <p className={styles.text}>
            La plataforma GESTYA envía notificaciones automáticas y en tiempo
            real basadas en eventos o configuraciones personalizadas.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/alarmas/hero-xl.png"
            }
            width={1471}
            height={1374}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.controlImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/alarmas/alertas-sm.png"
            }
            width={750}
            height={711}
            alt=""
          />
        </div>
        <div className={styles.header}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/alarmas/gestya-alarmas.png"
            }
            width={218}
            height={100}
            alt=""
          />
          <h2 className={styles.title}>
            <span>Visualizá</span> todas las alertas generadas por los vehículos
          </h2>
          <p className={styles.text}>
            Ejemplos de alertas que pueden configurarse:
          </p>
          <ul className={styles.list}>
            <li>Excesos de velocidad</li>
            <li>Excesos de ralentí</li>
            <li>Ingreso o egreso de zonas geográficas</li>
            <li>
              Eventos configurados por el cliente o por el centro de atención
              GESTYA
            </li>
          </ul>
          <p className={styles.text}>
            Desde el Módulo Alarma se puede acceder al registro de todos los
            eventos. Desde ahí, el usuario puede gestionar las alertas, ya sea
            de forma individual o agrupada por eventos.
          </p>
          <ul className={styles.list}>
            <li>Atender todas las alarmas del vehículo seleccionado</li>
            <li>
              Atender todas las alarmas del vehículo y evento seleccionado
            </li>
            <li>Posponer alarmas</li>
            <li>Visualizar la ubicación en el mapa</li>
          </ul>
          <p className={styles.text}>
            Las alertas pueden configurarse según las necesidades particulares
            directamente por el cliente o solicitadas al Centro de Atención
            GESTYA. Estas alertas no están asociadas al servicio de verificación
            ni a sensores físicos.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Servicio de <span>verificación de Alarmas</span>
          </h2>
          <p className={styles.text}>
            GESTYA ofrece el servicio de Verificación de Alarmas mediante
            sensores periféricos diseñados para detectar posibles hechos
            delictivos. Este servicio se brinda en alianza con SECURION S.A. (ex
            Securitas Argentina), empresa líder en seguridad con más de dos
            décadas de trayectoria en el rubro.
          </p>
          <p className={styles.text}>
            La solución ha sido implementada en más de 1200 unidades y cumple
            con los estándares requeridos por compañías de seguros y empresas de
            transporte de carga. Su instalación suele realizarse a pedido del
            dador de carga, dador de viaje o por requerimiento de la aseguradora
            del vehículo.
          </p>
          <p className={styles.text}>
            ⚠️ GESTYA no realiza el recupero de unidades.
          </p>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={
              "/images/funcionalidades/seguimiento-de-vehiculos/alarmas/verificacion-xl.png"
            }
            width={1471}
            height={1261}
            alt=""
          />
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.cardsTitle}>
          <span>Contá con respaldo</span>
          <br /> ante posibles hechos vandálicos
        </h2>
        <div className={styles.containerWrapper}>
          <div className={styles.container}>
            <h3 className={styles.subtitle}>Beneficios</h3>
            <div className={styles.item}>
              <Image
                src={
                  "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
                }
                width={32}
                height={32}
                alt=""
              />
              <div>
                <h4>Monitoreo</h4>
                <p>
                  Operadores especializados se dedican exclusivamente a la
                  atención de alarmas emitidas por los sensores del sistema.
                </p>
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
              <div>
                <h4>Evaluación</h4>
                <p>
                  Los operadores analizan cada alerta para determinar si se
                  trata de un hecho delictivo real o una falsa alarma.
                </p>
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
              <div>
                <h4>Disuasión</h4>
                <p>
                  Ante un delito en curso, se activan protocolos de respuesta
                  que pueden incluir la inmovilización remota del vehículo
                  mediante el corte de combustible o energía. Esto permite
                  frustrar el robo, facilitar la intervención de las fuerzas de
                  seguridad y proteger tanto los bienes como la integridad de
                  las personas.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <h3 className={styles.subtitle}>Funciones destacadas</h3>
            <div className={styles.item}>
              <Image
                src={
                  "/images/funcionalidades/seguimiento-de-vehiculos/gestion/check.png"
                }
                width={32}
                height={32}
                alt=""
              />
              <div>
                <h4>Sensores disponibles:</h4>
                <ul className={styles.cardList}>
                  <li>
                    Pánico pulsador: para informar una situación de emergencia o
                    sospecha.
                  </li>
                  <li>
                    Pare de motor: en caso de ser necesario detener la unidad.
                  </li>
                  <li>
                    Anti vandálico: sensor que se utiliza para detectar
                    sabotaje.
                  </li>
                  <li>
                    Apertura de puertas (chofer y acompañante): informa apertura
                    de puertas.
                  </li>
                  <li>
                    Desenganche: indica desenganche o enganche del acoplado.
                  </li>
                  <li>
                    Apertura de puertas de cargas: informa cada apertura de
                    puertas de carga.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingSection />
    </>
  );
};

export default Alarmas;
