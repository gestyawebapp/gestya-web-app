"use client";

import { toastError, toastSuccess } from "@/utils/alerts";
import { Argentina } from "@/components/icons/Argentina";
import { ContactFormSchema } from "@/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const ContactForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [utmParams, setUtmParams] = useState({});

  useEffect(() => {
    const utms = {
      Origen_de_la_Campa_a: searchParams.get("utm_source") || "",
      Medio_de_la_Campa_a: searchParams.get("utm_medium") || "",
      Nombre_de_la_Campa_a: searchParams.get("utm_campaign") || "",
      T_rmino_de_la_Campa_a: searchParams.get("utm_term") || "",
      utm_content: searchParams.get("utm_content") || "",
    };
    setUtmParams(utms);
  }, [searchParams]);

  const {
    formState: { errors },
    watch,
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
  });

  const provincia = watch("provincia");

  const onSubmit = async (data) => {
    console.log(data);

    console.log("Errores de formulario", errors); // Errores en el form

    const currentUrl =
      typeof window !== "undefined" ? window.location.href : ""; // Obtengo la URL para el payload

    const fullPayload = {
      First_Name: data.nombre,
      Last_Name: data.apellido,
      Email: data.email,
      Mobile: `+54${data.telefono}`,
      Persona_Provincia: data.provincia,
      Mensaje: data.mensaje,
      Layout: "5851273000000517156",
      Lead_Status: "No contactado",
      Lead_Source: "Formulario Web",
      URL_de_la_Campa_a: currentUrl,
      ...utmParams,
    };

    console.log(fullPayload);

    try {
      /* handleSubmit ya valida el form (según schema definido en Zod) por lo que no es necesario utilizar trigger() para validar manualmente */
      /* Si la validación fue exitosa, hago el POST */
      const res = await fetch("/api/zoho/create-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullPayload),
      });

      const result = await res.json();

      if (!res.ok) {
        return toastError(
          3000,
          "Error al enviar",
          result.error || "Zoho rechazó los datos"
        );
      }

      toastSuccess(3000, "¡Gracias!", "Tu consulta fue enviada correctamente");
      router.push("/contacto/gracias");
    } catch (err) {
      toastError(3000, "Error inesperado", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formRow}>
        <input {...register("nombre")} placeholder="Nombre*" />
      </div>
      <div className={styles.formCustomError}>{errors?.nombre?.message}</div>
      <div className={styles.formRow}>
        <input {...register("apellido")} placeholder="Apellido*" />
      </div>
      <div className={styles.formCustomError}>{errors?.apellido?.message}</div>
      <div className={styles.formRow}>
        <input {...register("email")} placeholder="Email*" />
      </div>
      <div className={styles.formCustomError}>{errors?.email?.message}</div>
      <div className={styles.formRow}>
        <div className={styles.prefix}>
          <Argentina size={36} />
          <span>+54</span>
          <input
            {...register("telefono")}
            placeholder="Ej: 2231234567"
            inputMode="numeric"
          />
        </div>
      </div>
      <div className={styles.formCustomError}>{errors?.telefono?.message}</div>
      <div className={styles.formRow}>
        <select
          {...register("provincia")}
          defaultValue=""
          style={{ color: !provincia && "#333333" }}
        >
          <option value="" disabled hidden>
            Provincia*
          </option>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
          <option value="Catamarca">Catamarca</option>
          <option value="Chaco">Chaco</option>
          <option value="Chubut">Chubut</option>
          <option value="Córdoba">Córdoba</option>
          <option value="Corrientes">Corrientes</option>
          <option value="Entre Ríos">Entre Ríos</option>
          <option value="Formosa">Formosa</option>
          <option value="Jujuy">Jujuy</option>
          <option value="La Pampa">La Pampa</option>
          <option value="La Rioja">La Rioja</option>
          <option value="Mendoza">Mendoza</option>
          <option value="Misiones">Misiones</option>
          <option value="Neuquén">Neuquén</option>
          <option value="Río Negro">Río Negro</option>
          <option value="Salta">Salta</option>
          <option value="San Juan">San Juan</option>
          <option value="San Luis">San Luis</option>
          <option value="Santa Cruz">Santa Cruz</option>
          <option value="Santa Fe">Santa Fe</option>
          <option value="Santiago del Estero">Santiago del Estero</option>
          <option value="Tierra del Fuego">Tierra del Fuego</option>
          <option value="Tucumán">Tucumán</option>
        </select>
      </div>
      <div className={styles.formCustomError}>{errors?.provincia?.message}</div>
      <div className={styles.formRow}>
        <textarea {...register("mensaje")} placeholder="Mensaje*" />
      </div>
      <div className={styles.formCustomError}>{errors?.mensaje?.message}</div>
      <button className="button-primary" type="submit">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
