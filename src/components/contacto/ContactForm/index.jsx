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
        <select {...register("provincia")} placeholder="Provincia*" />
        <option value=""></option>
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
