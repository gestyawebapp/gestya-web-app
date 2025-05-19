import { z } from "zod";

export const ContactFormSchema = z.object({
  nombre: z.string().min(1, { message: "Debe contener al menos 1 caracter" }),
  apellido: z.string().min(1, { message: "Debe contener al menos 1 caracter" }),
  email: z.string().email({ message: "Ingrese un email válido" }).trim(),
  telefono: z.string().min(1, { message: "Debe contener al menos 1 caracter" }),
  provincia: z.string(),
  mensaje: z.string().min(1, { message: "Debe contener al menos 1 caracter" }),
});
