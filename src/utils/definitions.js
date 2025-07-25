import { z } from "zod";

const UserSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: "Ingrese su nombre" })
    .max(50, { message: "El nombre es demasiado largo" }),
  apellido: z
    .string()
    .trim()
    .min(1, { message: "Ingrese su apellido" })
    .max(50, { message: "El apellido es demasiado largo" }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: "Ingrese un email válido" }),
  telefono: z
    .string()
    .min(6, { message: "Debe ingresar al menos 6 números" })
    .max(15, { message: "Teléfono demasiado largo" })
    .regex(/^[0-9]+$/, {
      message: "Ingrese solo números, sin espacios ni símbolos",
    }),
  provincia: z.string().min(1, { message: "Debe elegir una provincia" }),
});

export const ContactFormSchema = UserSchema.extend({
  mensaje: z
    .string()
    .trim()
    .min(1, { message: "Debe contener al menos 1 caracter" })
    .max(1000, { message: "Mensaje demasiado largo" }),
});

export const CotizaFormSchema = UserSchema.extend({
  localidad: z
    .string()
    .trim()
    .min(1, { message: "Debe ingresar una localidad" })
    .max(100, { message: "La localidad es demasiado larga" }),
  mensaje: z.string().trim().max(1000, { message: "Mensaje demasiado largo" }),
});
