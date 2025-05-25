"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const UTMGrabber = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const utms = {
      Origen_de_la_Campa_a: searchParams.get("utm_source"),
      Medio_de_la_Campa_a: searchParams.get("utm_medium"),
      Nombre_de_la_Campa_a: searchParams.get("utm_campaign"),
      T_rmino_de_la_Campa_a: searchParams.get("utm_term"),
      utm_content: searchParams.get("utm_content"),
    };

    const filteredUtms = Object.fromEntries(
      Object.entries(utms).filter(([_, v]) => v)
    );

    if (Object.keys(filteredUtms).length > 0) {
      localStorage.setItem("utms", JSON.stringify(filteredUtms));
    }
  }, [searchParams]);

  return null;
};
