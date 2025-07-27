"use client";

import { toastError, toastSuccess } from "@/utils/alerts";
import { Argentina } from "@/components/icons/Argentina";
import { CotizaFormSchema } from "@/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { isPasoCompleto } from "@/utils/validations";
import { useCotiza } from "@/context/CotizaContext";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

const Paso4 = () => {
  const router = useRouter();
  const { formData } = useCotiza();

  const {
    formState: { errors },
    watch,
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(CotizaFormSchema),
  });

  const provincia = watch("provincia");

  const onSubmit = async (data) => {
    const pasosIncompletos = [1, 2, 3].filter(
      (paso) => !isPasoCompleto(formData, paso)
    );

    if (pasosIncompletos.length > 0) {
      toastError(
        3000,
        "Formulario incompleto",
        "Debés completar todos los pasos anteriores antes de enviar el formulario."
      );
      router.replace("/cotiza/paso-1");
      return;
    }

    const currentUrl =
      typeof window !== "undefined" ? window.location.href : ""; // Obtengo la URL para el payload

    // Recupero utms de localStorage
    const storedUtms = JSON.parse(localStorage.getItem("utms") || "{}");

    console.log(data);

    const fullPayload = {
      First_Name: data.nombre,
      Last_Name: data.apellido,
      Email: data.email,
      Mobile: `+54${data.telefono}`,
      Persona_Provincia: data.provincia,
      Localidad: data.localidad,
      Mensaje: data.mensaje,
      Country: "Argentina", // Por defecto para Zoho CRM
      Layout: "5851273000000517156", // Por defecto para Zoho CRM
      Lead_Status: "No contactado", // Por defecto para Zoho CRM
      Lead_Source: "Formulario Web", // Por defecto para Zoho CRM
      URL_de_la_Campa_a: currentUrl,
      Tipo_de_vehiculo: formData.paso1 || [],
      Cantidad_de_veh_culos_de_la_flota: formData.paso2 || "",
      Soluci_n_especifica: formData.paso3 || [],
      ...storedUtms,
    };

    try {
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
        toastError(
          3000,
          "Error al enviar",
          result.error ||
            "Hubo un problema al enviar el formulario, intente más tarde"
        );
        router.push("/cotiza");
        return;
      }

      localStorage.removeItem("utms"); // Limpio localStorage

      toastSuccess(
        3000,
        "Formulario completo",
        "La información ha sido enviada con éxito"
      );
      router.push("/cotiza/gracias");
    } catch (err) {
      toastError(3000, "Error inesperado", err.message);
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <form
        id="form-cotiza"
        onSubmit={handleSubmit(onSubmit)}
        className={styles.form}
      >
        <div className={styles.formRow}>
          <input {...register("nombre")} placeholder="Nombre*" />
        </div>
        <div className={styles.formCustomError}>{errors?.nombre?.message}</div>
        <div className={styles.formRow}>
          <input {...register("apellido")} placeholder="Apellido*" />
        </div>
        <div className={styles.formCustomError}>
          {errors?.apellido?.message}
        </div>
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
        <div className={styles.formCustomError}>
          {errors?.telefono?.message}
        </div>
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
        <div className={styles.formCustomError}>
          {errors?.provincia?.message}
        </div>
        <div className={styles.formRow}>
          <input {...register("localidad")} placeholder="Localidad*" />
        </div>
        <div className={styles.formCustomError}>
          {errors?.localidad?.message}
        </div>
        <div className={styles.formRow}>
          <textarea {...register("mensaje")} placeholder="Mensaje*" />
        </div>
        <div className={styles.formCustomError}>{errors?.mensaje?.message}</div>
      </form>
    </motion.div>
  );
};

export default Paso4;
