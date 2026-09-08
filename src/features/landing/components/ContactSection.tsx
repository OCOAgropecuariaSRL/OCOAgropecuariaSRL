import { zodResolver } from '@hookform/resolvers/zod';
import { CheckCircle2, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';

import { Reveal } from '@/components/common/Reveal';

import {
  contactEmail,
  instagramHandle,
  instagramUrl,
  whatsappPhoneDisplay,
} from '../data/landingData';
import { useContactSubmit } from '../hooks/useContactSubmit';
import {
  contactFormDefaults,
  contactFormSchema,
  type ContactFormInput,
} from '../schemas/contactFormSchema';

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-xs font-medium text-red-600">{message}</p>;
}

export default function ContactSection() {
  const { status, submit } = useContactSubmit();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: contactFormDefaults,
    mode: 'onBlur',
  });

  const onSubmit = handleSubmit((values) => {
    submit(values);
    reset(contactFormDefaults);
  });

  return (
    <section id="contacto" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-[1fr_1.1fr]">
        {/* Información de contacto */}
        <Reveal delay={80}>
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Contacto
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Contanos tu campo y te pasamos una cotización
              </h2>
              <p className="text-lg text-muted-foreground">
                Completá el formulario con tus datos y enviá tu consulta directo por WhatsApp: te
                respondemos en el día.
              </p>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Phone className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">WhatsApp directo</p>
                  <p className="text-muted-foreground">{whatsappPhoneDisplay}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Instagram className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">Instagram</p>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {instagramHandle}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {contactEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="size-5" />
                </span>
                <div>
                  <p className="font-semibold">Zona de trabajo</p>
                  <p className="text-muted-foreground">
                    Trabajamos en el este cordobés, San Francisco y alrededores
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Formulario de cotización */}
        <Reveal delay={180}>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            {status === 'sent' ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="size-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">¡Consulta lista!</h3>
                <p className="max-w-sm text-sm text-muted-foreground">
                  Se abrió WhatsApp con tu mensaje ya redactado. Completá el envío ahí y te
                  respondemos a la brevedad.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="nombre">Nombre y apellido *</Label>
                    <Input
                      id="nombre"
                      placeholder="Juan Pérez"
                      aria-invalid={Boolean(errors.nombre)}
                      {...register('nombre')}
                    />
                    <FieldError message={errors.nombre?.message} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input
                      id="telefono"
                      type="tel"
                      placeholder="351 555 0000"
                      aria-invalid={Boolean(errors.telefono)}
                      {...register('telefono')}
                    />
                    <FieldError message={errors.telefono?.message} />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="hectareas">¿Cuántas hectáreas querés tratar? *</Label>
                  <Input
                    id="hectareas"
                    inputMode="decimal"
                    placeholder="Ej: 80 o 150,5"
                    aria-invalid={Boolean(errors.hectareas)}
                    {...register('hectareas')}
                  />
                  <FieldError message={errors.hectareas?.message} />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="mensaje">Contanos un poco sobre tu consulta</Label>
                  <Textarea
                    id="mensaje"
                    rows={4}
                    placeholder="Cultivo, ubicación del lote, etapa del cultivo, urgencias…"
                    aria-invalid={Boolean(errors.mensaje)}
                    {...register('mensaje')}
                  />
                  <FieldError message={errors.mensaje?.message} />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="size-4" />
                  Enviar por WhatsApp
                </Button>

                <p className="flex items-center justify-center gap-1.5 text-center text-xs text-muted-foreground">
                  <MessageCircle className="size-3.5" />
                  Al enviar se abre WhatsApp con tu consulta lista para mandar.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
