"use client";

import { toastError, toastSuccess } from "@/utils/alerts";
import { ContactFormSchema } from "@/utils/definitions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";

const ContactForm = () => {
  const router = useRouter();

  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data) => {
    try {
      console.log(data);

      console.log("Errores de formulario", errors); // Errores en el form

      /* handleSubmit ya valida el form (según schema definido en Zod) por lo que no es necesario utilizar trigger() para validar manualmente */

      /* Si la validación fue exitosa, hago el POST */

      // const response = await fetch("/api/auth/register", {
      //   headers: { "Content-Type": "application/json" },
      //   method: "POST",
      //   body: JSON.stringify(data),
      // });

      // const result = await response.json();

      // if (!response.ok) {
      //   return toastError(3000, "Error en el registro", result.error);
      // }

      // toastSuccess(
      //   3000,
      //   result.message,
      //   `Bienvenido, ya puedes iniciar sesión`
      // );

      // router.push("/auth/login");
    } catch (err) {
      toastError(3000, "Error al registrarse", err.message);
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
        <input {...register("telefono")} placeholder="Teléfono*" />
      </div>
      <div className={styles.formCustomError}>{errors?.telefono?.message}</div>
      <div className={styles.formRow}>
        <select {...register("provincia")} defaultValue="">
          <option value="" disabled>
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
