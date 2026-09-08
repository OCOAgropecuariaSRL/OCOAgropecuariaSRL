import { z } from 'zod';

import { DRONE_STATUSES, type Drone } from '../types';

/**
 * Esquema de validación del formulario de drones.
 * Una única fuente de verdad: alimenta tipos del form y validación en runtime.
 */
export const droneFormSchema = z.object({
  codigo: z
    .string()
    .trim()
    .min(1, 'El código es obligatorio')
    .max(20, 'Máximo 20 caracteres'),
  nombre: z
    .string()
    .trim()
    .min(2, 'El nombre es obligatorio')
    .max(80, 'Máximo 80 caracteres'),
  marca: z.string().trim().min(1, 'La marca es obligatoria'),
  modelo: z.string().trim().min(1, 'El modelo es obligatorio'),
  status: z.enum(DRONE_STATUSES),
  capacidadLitros: z
    .coerce.number({ message: 'Debe ser un número' })
    .min(1, 'Mínimo 1 litro')
    .max(2000, 'Máximo 2000 litros'),
  autonomiaMin: z
    .coerce.number({ message: 'Debe ser un número' })
    .min(5, 'Mínimo 5 minutos')
    .max(240, 'Máximo 240 minutos'),
  baterias: z.coerce
    .number({ message: 'Debe ser un número' })
    .int('Debe ser un número entero')
    .min(1, 'Mínimo 1 batería')
    .max(20, 'Máximo 20 baterías'),
  fechaAdquisicion: z.string().min(1, 'La fecha es obligatoria'),
  notas: z.string().max(500, 'Máximo 500 caracteres').optional(),
});

export type DroneFormValues = z.infer<typeof droneFormSchema>;

/** Valores iniciales del formulario, para alta o edición. */
export function droneFormDefaults(drone?: Drone): DroneFormValues {
  if (!drone) {
    return {
      codigo: '',
      nombre: '',
      marca: '',
      modelo: '',
      status: 'activo',
      capacidadLitros: 0,
      autonomiaMin: 0,
      baterias: 0,
      fechaAdquisicion: '',
      notas: '',
    };
  }

  return {
    codigo: drone.codigo,
    nombre: drone.nombre,
    marca: drone.marca,
    modelo: drone.modelo,
    status: drone.status,
    capacidadLitros: drone.capacidadLitros,
    autonomiaMin: drone.autonomiaMin,
    baterias: drone.baterias,
    fechaAdquisicion: drone.fechaAdquisicion.slice(0, 10),
    notas: drone.notas ?? '',
  };
}