import { z } from 'zod';

/**
 * Esquema de validación del formulario "Cotiza ahora".
 * Una única fuente de verdad para el formulario y sus tipos.
 */
export const contactFormSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(2, 'Ingresá tu nombre')
    .max(80, 'Máximo 80 caracteres'),
  telefono: z
    .string()
    .trim()
    .min(6, 'Ingresá un teléfono válido')
    .max(24, 'Máximo 24 caracteres')
    .regex(/^[+\d\s()-]+$/, 'Usá solo números, espacios o ()+'),
  hectareas: z
    .string()
    .trim()
    .min(1, 'Indicá las hectáreas')
    .regex(/^\d+(\.\d+)?$/, 'Ingresá un número válido'),
  mensaje: z.string().max(500, 'Máximo 500 caracteres').optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;

export const contactFormDefaults: ContactFormInput = {
  nombre: '',
  telefono: '',
  hectareas: '',
  mensaje: '',
};