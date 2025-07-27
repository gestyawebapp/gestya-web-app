"use client";

import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Mapa({ stores, center, zoom }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [sucursalSeleccionada, setSucursalSeleccionada] = useState(null);

  if (!isLoaded) return <div>Cargando mapa...</div>; // TODO: Reemplazar por spinner

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom}>
      {stores.map((sucursal, index) => (
        <Marker
          key={index}
          position={{ lat: sucursal.lat, lng: sucursal.lng }}
          icon={{
            url: "/point-gestya.png",
            scaledSize: new window.google.maps.Size(49, 61),
          }}
          onClick={() => setSucursalSeleccionada(sucursal)}
        />
      ))}

      {sucursalSeleccionada && (
        <InfoWindow
          position={{
            lat: sucursalSeleccionada.lat,
            lng: sucursalSeleccionada.lng,
          }}
          onCloseClick={() => setSucursalSeleccionada(null)}
        >
          <div className={styles.tooltip}>
            <p className={styles.title}>{sucursalSeleccionada.name}</p>
            <p className={styles.text}>
              <span>Dirección:</span> {sucursalSeleccionada.address}
            </p>
            <p className={styles.text}>
              <span>Email:</span> {sucursalSeleccionada.email}
            </p>
            <p className={styles.text}>
              <span>Teléfono:</span> {sucursalSeleccionada.phone}
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
