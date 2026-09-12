import { describe, expect, it } from 'vitest';

import { buildWhatsAppLink, composeWhatsAppMessage } from './whatsapp';

const PHONE = '5493564684187';

describe('whatsapp utils', () => {
  it('construye el enlace wa.me con el número y el mensaje codificado', () => {
    const url = buildWhatsAppLink(PHONE, 'Hola OCO, necesito una cotización');

    expect(url).toBe(`https://wa.me/${PHONE}?text=Hola%20OCO%2C%20necesito%20una%20cotizaci%C3%B3n`);
  });

  it('compone el mensaje de cotización con todos los datos', () => {
    const message = composeWhatsAppMessage(
      {
        nombre: 'Juan Pérez',
        telefono: '3564 68-4187',
        hectareas: '120',
        mensaje: 'Soja en lote norte',
      },
      'OCO Agropecuaria',
    );

    expect(message).toContain('Hola OCO Agropecuaria, soy Juan Pérez.');
    expect(message).toContain('Teléfono: 3564 68-4187');
    expect(message).toContain('Hectáreas a tratar: 120');
    expect(message).toContain('Comentario: Soja en lote norte');
  });

  it('omite el comentario cuando está vacío', () => {
    const message = composeWhatsAppMessage(
      { nombre: 'Ana López', telefono: '351 555 0000', hectareas: '40', mensaje: '  ' },
      'Sofía Gutiérrez',
    );

    expect(message).not.toContain('Comentario:');
  });
});