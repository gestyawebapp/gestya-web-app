import { z } from "zod";

export const ContactFormSchema = z.object({
  nombre: z.string().min(1, { message: "Ingrese su nombre" }),
  apellido: z.string().min(1, { message: "Ingrese su apellido" }),
  email: z.string().email({ message: "Ingrese un email válido" }).trim(),
  telefono: z.string().min(1, { message: "Debe ingresar el teléfono" }),
  provincia: z.string().min(1, { message: "Debe elegir una provincia" }),
  mensaje: z.string().min(1, { message: "Debe contener al menos 1 caracter" }),
});
