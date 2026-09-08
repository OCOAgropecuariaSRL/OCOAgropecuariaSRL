import { Droplets, Leaf, Radar, SprayCan, Tractor, Truck, type LucideIcon } from 'lucide-react';

import { env } from '@/config/env';

import type {
  ComparisonRow,
  GalleryItem,
  NavItem,
  OwnerItem,
  ServiceItem,
  StatItem,
} from '../types';

/** Anclas de las secciones de la landing. */
export const landingAnchors = {
  inicio: '#inicio',
  servicios: '#servicios',
  trabajos: '#trabajos',
  comparativa: '#comparativa',
  nosotros: '#nosotros',
  contactanos: '#contacto',
} as const;

export const navItems: NavItem[] = [
  { label: 'Inicio', href: landingAnchors.inicio },
  { label: 'Servicios', href: landingAnchors.servicios },
  { label: 'Nuestros Trabajos', href: landingAnchors.trabajos },
  { label: 'Contacto', href: landingAnchors.contactanos },
];

/** Marca para logos y textos. */
export const brandName = 'OCO Agropecuaria SRL';

/** Razón social, usada en el footer. */
export const brandFullName = 'OCO Agropecuaria SRL';

/** Perfil de Instagram (acceso directo en la sección de contacto). */
export const instagramUrl = 'https://www.instagram.com/ocoagro';

/** Handle de Instagram para mostrar. */
export const instagramHandle = '@ocoagro';

/** Correo de contacto. */
export const contactEmail = 'contacto@ocoagropecuaria.com.ar';

/** Imagen de fondo del hero (una de tus fotos reales, en /trabajos/). */
export const heroImage = '/trabajos/03-control-orugas-trigo.jpg';

export const services: ServiceItem[] = [
  {
    id: 'fumigacion',
    icon: SprayCan,
    title: 'Fumigación de precisión',
    description:
      'Aplicación de fitosanitarios con gotas uniformes sobre el objetivo exacto, reduciendo deriva y mejorando la eficacia del producto.',
  },
  {
    id: 'pulverizacion',
    icon: Droplets,
    title: 'Pulverización foliar',
    description:
      'Tratamientos foliares, fertilizantes líquidos y correctores con cobertura pareja en todo el lote, incluso con el cultivo ya desarrollado.',
  },
  {
    id: 'accesibilidad',
    icon: Truck,
    title: 'Terrenos difíciles sin dañar el lote',
    description:
      'Trabajamos lotes con barro, accesos angostos o cultivo alto sin tocar el suelo: cero compactación.',
  },
  {
    id: 'monitoreo',
    icon: Radar,
    title: 'Monitoreo y relevamiento aéreo',
    description:
      'Sensores en vuelo para detectar focos de plaga, estrés hídrico o fallas de implantación antes de que sean pérdidas.',
  },
  {
    id: 'malezas',
    icon: Leaf,
    title: 'Control de malezas y refuerzos',
    description:
      'Aplicaciones dirigidas de barbecho, pre y post emergentes y parches infestados con la máxima precisión.',
  },
];

/**
 * Trabajos de la galería.
 *
 * - 4 imágenes (`type: 'image'`) y 2 videos (`type: 'video'`).
 * - La propiedad `src` apunta a los archivos que deben subirse a la carpeta
 *   `public/trabajos/`. Mientras un archivo no exista, la galería muestra un
 *   placeholder con la estética actual; apenas se sube, se ve el medio real.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: 'trab-01',
    type: 'image',
    title: 'Fumigación de soja',
    crop: 'Soja · Lote Norte',
    location: 'San Francisco',
    hectares: 120,
    period: 'Temporada 2025/26',
    tone: 1,
    src: '/trabajos/01-fumigacion-soja.jpeg',
  },
  {
    id: 'trab-02',
    type: 'image',
    title: 'Pulverización de maíz tardío',
    crop: 'Maíz · Etapa vegetativa',
    location: 'Freyre',
    hectares: 85,
    period: 'Temporada 2025/26',
    tone: 2,
    src: '/trabajos/02-pulverizacion-maiz.jpeg',
  },
  {
    id: 'trab-03',
    type: 'image',
    title: 'Control de orugas en trigo',
    crop: 'Trigo · Espigazón',
    location: 'Porteña',
    hectares: 60,
    period: 'Primavera 2025',
    tone: 3,
    src: '/trabajos/03-control-orugas-trigo.jpg',
  },
  {
    id: 'trab-04',
    type: 'image',
    title: 'Barbecho químico de precisión',
    crop: 'Barbecho · Pre-siembra',
    location: 'Devoto',
    hectares: 200,
    period: 'Otoño 2026',
    tone: 4,
    src: '/trabajos/04-barbecho-quimico.webp',
  },
  {
    id: 'trab-05',
    type: 'video',
    title: 'Video · Aplicación en vuelo',
    crop: 'Aplicación en maíz',
    location: 'El Tío',
    hectares: 45,
    period: 'Temporada 2025/26',
    tone: 5,
    src: '/trabajos/05-video-aplicacion.mp4',
  },
  {
    id: 'trab-06',
    type: 'video',
    title: 'Video · Monitoreo de lotes',
    crop: 'Relevamiento aéreo',
    location: 'Brinkmann',
    hectares: 150,
    period: 'Otoño 2026',
    tone: 6,
    src: '/trabajos/06-video-monitoreo.mp4',
  },
];

export const stats: StatItem[] = [
  { value: '8.500+', label: 'Hectáreas tratadas' },
  { value: '98%', label: 'Precisión de aplicación' },
  { value: '-40%', label: 'Costo vs. avión fumigador' },
  { value: '24 hs', label: 'Respuesta promedio' },
];

export const comparisonRows: ComparisonRow[] = [
  {
    criterion: 'Precisión de aplicación',
    drone: 'Gotas uniformes con GPS y control de caudal en tiempo real.',
    traditional: 'Mayor deriva y cobertura irregular según el viento.',
  },
  {
    criterion: 'Daño al cultivo',
    drone: 'No toca el lote: no compacta ni rompe plantas.',
    traditional: 'La maquinaria compacta el suelo y corta plantas.',
  },
  {
    criterion: 'Accesibilidad',
    drone: 'Entra a cualquier lote: barro, altura de cultivo o lluvia.',
    traditional: 'Queda limitada por el estado del suelo y los accesos.',
  },
  {
    criterion: 'Costo por hectárea',
    drone: '40% más barato que la aviación agrícola convencional.',
    traditional: 'Combustible, personal y mantenimiento de maquinaria.',
  },
  {
    criterion: 'Seguridad y ambiente',
    drone: 'Menos deriva, operador a distancia y menor uso de producto.',
    traditional: 'Exposición del operador y emisiones de combustible.',
  },
  {
    criterion: 'Velocidad de respuesta',
    drone: 'Listo para volar en minutos, directo al lote.',
    traditional: 'Requiere traslado de equipos y preparación previa.',
  },
];

export const owners: OwnerItem[] = [
  {
    name: 'Nicolás Paolasso',
    role: 'Fundador · Piloto e Ing. Agrónomo',
    bio: 'Ingeniero agrónomo y piloto certificado. Lidera la operación en campo y supervisa cada aplicación para garantizar precisión y cuidado del productor.',
    initials: 'NP',
  },
  {
    name: 'Sofía Gutiérrez',
    role: 'Co-fundadora · Gestión y Clientes',
    bio: 'Responsable de la planificación de servicios y el acompañamiento a los productores desde la primera consulta hasta el informe final de cada trabajo.',
    initials: 'SG',
  },
];

export const visionText =
  'Soñamos con un campo más preciso, rentable y cuidado. Queremos que cada productor acceda a tecnología de aplicación que baje costos, proteja el ambiente y mejore el rendimiento de sus cultivos.';

/** Destinatario del mensaje de WhatsApp. */
export const whatsappRecipientName = owners[0]!.name;

/** Teléfono que recibe las cotizaciones (desde .env). */
export const whatsappPhone = env.whatsappPhone;

/** Formato legible del WhatsApp para mostrar en pantalla. */
export const whatsappPhoneDisplay = '+54 9 356468-4187';

/** Iconos de la cabecera de la comparativa. */
export const comparisonIcons: { drone: LucideIcon; traditional: LucideIcon } = {
  drone: Droplets,
  traditional: Tractor,
};