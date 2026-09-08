import { CheckCircle2, XCircle } from 'lucide-react';

import { Reveal } from '@/components/common/Reveal';
import { cn } from '@/lib/utils';

import { comparisonIcons, comparisonRows } from '../data/landingData';

export default function ComparisonSection() {
  return (
    <section id="comparativa" className="scroll-mt-24 bg-muted/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Comparativa</p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Drones vs. métodos tradicionales
          </h2>
          <p className="text-lg text-muted-foreground">
            La tecnología de precisión cambia la ecuación de costos, tiempos y resultados de cada
            aplicación.
          </p>
        </div>

        <Reveal delay={80}>
          <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <div className="min-w-[640px]">
              {/* Cabecera */}
              <div className="grid grid-cols-[1fr_1.15fr_1.15fr] border-b border-border bg-white/[0.04]">
                <div className="flex items-center p-4 text-sm font-semibold text-muted-foreground">
                  Criterio
                </div>
                <div className="flex items-center gap-2 border-l border-border p-4 text-sm font-semibold text-primary">
                  <comparisonIcons.drone className="size-4 shrink-0" />
                  Drones OCO Agropecuaria SRL
                </div>
                <div className="flex items-center gap-2 border-l border-border p-4 text-sm font-semibold text-muted-foreground">
                  <comparisonIcons.traditional className="size-4 shrink-0" />
                  Método tradicional
                </div>
              </div>

              {/* Filas */}
              {comparisonRows.map((row, index) => (
                <div
                  key={row.criterion}
                  className={cn(
                    'grid grid-cols-[1fr_1.15fr_1.15fr]',
                    index % 2 === 1 && 'bg-white/[0.03]',
                  )}
                >
                  <div className="p-4 text-sm font-medium">{row.criterion}</div>
                  <div className="border-l border-border p-4 text-sm text-foreground">
                    <p className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                      {row.drone}
                    </p>
                  </div>
                  <div className="border-l border-border p-4 text-sm text-muted-foreground">
                    <p className="flex gap-2">
                      <XCircle className="mt-0.5 size-4 shrink-0 text-muted-foreground/70" />
                      {row.traditional}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
