import { useCallback, useState } from 'react';

import { whatsappPhone, whatsappRecipientName } from '../data/landingData';
import type { ContactFormValues } from '../types';
import { buildWhatsAppLink, composeWhatsAppMessage } from '../utils/whatsapp';

type SubmitStatus = 'idle' | 'sent';

/**
 * Envía la cotización abriendo WhatsApp con el mensaje pre-cargado
 * dirigido al dueño configurado.
 */
export function useContactSubmit() {
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const submit = useCallback((data: ContactFormValues) => {
    const message = composeWhatsAppMessage(data, whatsappRecipientName);
    const url = buildWhatsAppLink(whatsappPhone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatus('sent');
  }, []);

  const resetStatus = useCallback(() => setStatus('idle'), []);

  return { status, submit, resetStatus };
}