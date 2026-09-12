import { Quote } from 'lucide-react';

import { Reveal } from '@/components/common/Reveal';

import { visionText } from '../data/landingData';

export default function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <Reveal>
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                ¿Quiénes somos?
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Productores que entienden de campo y de aire
              </h2>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <Quote className="mb-3 size-7 text-primary" />
              <p className="text-lg font-medium leading-relaxed">{visionText}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Somos OCO Agropecuaria SRL, una empresa cordobesa de agricultura de precisión.
              Combinamos experiencia agronómica, pilotaje certificado y drones de última
              generación para llevar la aplicación aérea al alcance de cada productor.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
