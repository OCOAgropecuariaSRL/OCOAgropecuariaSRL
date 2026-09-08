import { Quote } from 'lucide-react';

import { Reveal } from '@/components/common/Reveal';

import { owners, visionText } from '../data/landingData';

export default function AboutSection() {
  return (
    <section id="nosotros" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
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

          <Reveal delay={120}>
            <div className="grid gap-5 sm:grid-cols-2">
              {owners.map((owner) => (
                <article
                  key={owner.name}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-primary/10 text-base font-bold text-primary">
                    {owner.initials}
                  </div>
                  <h3 className="font-semibold">{owner.name}</h3>
                  <p className="mt-0.5 text-xs font-medium text-primary">{owner.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{owner.bio}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
