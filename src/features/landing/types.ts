import type { LucideIcon } from 'lucide-react';

/** Item del menú de navegación de la landing (anclas de sección). */
export interface NavItem {
  label: string;
  href: string;
}

/** Servicio ofrecido con drones de pulverización. */
export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

/** Tipo de medio que muestra la tarjeta de un trabajo. */
export type GalleryMediaType = 'image' | 'video';

/** Trabajo realizado (galería). */
export interface GalleryItem {
  id: string;
  type: GalleryMediaType;
  title: string;
  crop: string;
  location: string;
  hectares: number;
  period: string;
  /** Semilla para variar la escena visual generada (placeholder). */
  tone: number;
  /** Ruta pública del archivo (imagen o video) en /trabajos/. */
  src: string;
}

/** Estadística destacada (zócalo de números). */
export interface StatItem {
  value: string;
  label: string;
}

/** Fila de la comparativa dron vs. método tradicional. */
export interface ComparisonRow {
  criterion: string;
  drone: string;
  traditional: string;
}

/** Dueño / fundador de la empresa. */
export interface OwnerItem {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

/** Datos ingresados en el formulario de cotización. */
export interface ContactFormValues {
  nombre: string;
  telefono: string;
  hectareas: string;
  mensaje?: string;
}