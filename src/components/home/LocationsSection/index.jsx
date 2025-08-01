"use client";

import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Mapa from "./Map";

export default function LocationsSection() {
  const [stores, setStores] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch("/stores.json")
      .then((res) => res.json())
      .then((data) => setStores(data));
  }, []);

  const provinces = [...new Set(stores.map((s) => s.state))];

  const cities = selectedProvince
    ? [
        ...new Set(
          stores.filter((s) => s.state === selectedProvince).map((s) => s.city)
        ),
      ]
    : [];

  const storesFiltradas = stores.filter(
    (s) => s.state === selectedProvince && s.city === selectedCity
  );

  let center = { lat: -38.4161, lng: -63.6167 }; // Centro de Argentina
  let zoom = 4;

  /* Genero una función para formatear las provincias y localidades (y no alterar el stores.json) */

  const nameFormatter = (text) => {
    if (!text) return "";
    return text
      .replace(/[-_]/g, " ")
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Si hay stores filtradas (por localidad), hago zoom
  if (storesFiltradas.length > 0) {
    const avgLat =
      storesFiltradas.reduce((sum, s) => sum + s.lat, 0) /
      storesFiltradas.length;
    const avgLng =
      storesFiltradas.reduce((sum, s) => sum + s.lng, 0) /
      storesFiltradas.length;

    center = { lat: avgLat, lng: avgLng };
    zoom = 10;
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Image
          src={"/images/home/icono-mapa.png"}
          width={127}
          height={126}
          alt=""
        />
        <div>
          <h2 className={styles.title}>
            <span>Servicios Oficiales</span> COLVEN
          </h2>
          <p className={styles.text}>
            Filtrá por ubicación y encontrá en el mapa Servicios Oficiales
            COLVEN cerca de tu zona.{" "}
            <span>Más de 700 Servicios Oficiales en todo el país</span>.
          </p>
        </div>
      </div>
      <div className={styles.selectContainer}>
        <select
          className={styles.select}
          value={selectedProvince}
          onChange={(e) => {
            setSelectedProvince(e.target.value);
            setSelectedCity("");
          }}
        >
          <option value="">Seleccioná una provincia</option>
          {provinces.map((prov) => (
            <option key={prov} value={prov}>
              {nameFormatter(prov)}
            </option>
          ))}
        </select>

        <select
          className={styles.select}
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedProvince}
        >
          <option value="">Seleccioná una localidad</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {nameFormatter(city)}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.mapContainer}>
        <Mapa
          stores={storesFiltradas.length ? storesFiltradas : stores}
          center={center}
          zoom={zoom}
        />
      </div>
    </section>
  );
}
