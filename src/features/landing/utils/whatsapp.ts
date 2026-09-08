import type { ContactFormValues } from '../types';

/** Arma el vínculo de WhatsApp con el mensaje pre-cargado. */
export function buildWhatsAppLink(phone: string, message: string): string {
  const digits = phone.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/** Compone el mensaje de cotización con los datos del formulario. */
export function composeWhatsAppMessage(data: ContactFormValues, recipient: string): string {
  const lines = [
    `Hola ${recipient}, soy ${data.nombre}. Quiero cotizar la fumigación con drones.`,
    '',
    `📞 Teléfono: ${data.telefono}`,
    `🌾 Hectáreas a tratar: ${data.hectareas}`,
  ];

  if (data.mensaje && data.mensaje.trim()) {
    lines.push(`📝 Comentario: ${data.mensaje.trim()}`);
  }

  return lines.join('\n');
}