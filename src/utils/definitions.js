import { z } from "zod";

export const ContactFormSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "Debe contener al menos 1 caracter" }),
  last_name: z
    .string()
    .min(1, { message: "Debe contener al menos 1 caracter" }),
  email: z.string().email({ message: "Ingrese un email válido" }).trim(),
  cellphone: z
    .string()
    .min(1, { message: "Debe contener al menos 1 caracter" }),
  city: z.string(),
  message: z.string().min(1, { message: "Debe contener al menos 1 caracter" }),
});
