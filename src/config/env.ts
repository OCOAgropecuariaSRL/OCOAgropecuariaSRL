/** Configuración central de la aplicación leída desde variables de entorno. */
export const env = {
  appName: 'OCO Agropecuaria SRL',
  /** Número de WhatsApp que recibe las cotizaciones (solo dígitos, formato internacional). */
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE || '5493564684187',
} as const;