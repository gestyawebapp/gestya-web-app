"use client";

import { useEffect, useState } from "react";
import Mapa from "./Map";
import styles from "./styles.module.css";

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
      <h2 className={styles.title}>Buscador - Servicios Oficiales</h2>
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
