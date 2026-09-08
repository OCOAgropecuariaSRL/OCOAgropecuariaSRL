/** Estados operativos de un drone de pulverización. */
export const DRONE_STATUSES = ['activo', 'en_mision', 'mantenimiento', 'inactivo'] as const;

export type DroneStatus = (typeof DRONE_STATUSES)[number];

export const DRONE_STATUS_LABELS: Record<DroneStatus, string> = {
  activo: 'Activo',
  en_mision: 'En misión',
  mantenimiento: 'En mantenimiento',
  inactivo: 'Inactivo',
};

/** Entidad drone: aeronave de fumigación/pulverización de la flota. */
export interface Drone {
  id: string;
  /** Código interno único, p.ej: DRN-001. */
  codigo: string;
  nombre: string;
  marca: string;
  modelo: string;
  status: DroneStatus;
  /** Capacidad del tanque de pulverización en litros. */
  capacidadLitros: number;
  /** Autonomía de vuelo en minutos. */
  autonomiaMin: number;
  /** Cantidad de baterías de repuesto de la unidad. */
  baterias: number;
  /** Horas totales de vuelo acumuladas. */
  horasVuelo: number;
  /** Fecha de adquisición (ISO). */
  fechaAdquisicion: string;
  notas?: string;
  createdAt: string;
  updatedAt: string;
}

/** Datos de creación/edición de un drone (sin campos derivados del sistema). */
export type DroneInput = Omit<Drone, 'id' | 'createdAt' | 'updatedAt' | 'horasVuelo'>;