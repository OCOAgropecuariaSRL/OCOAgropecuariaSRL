import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

import { Reveal } from '@/components/common/Reveal';
import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

import { heroImage, landingAnchors } from '../data/landingData';

const trustPoints = [
  'Cobertura pareja y precisa',
  'Menos costo por hectárea',
  'Sin daño al lote ni al cultivo',
];

/**
 * Hero de pantalla completa sobre una foto real del campo,
 * con tipografía grande en display y header transparente por encima.
 */
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[92vh] items-center overflow-hidden scroll-mt-16"
    >
      {/* Imagen de fondo + overlays oscuros para legibilidad */}
      <div className="absolute inset-0 -z-10">
        <img src={heroImage} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.16),transparent_55%)]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-28 md:px-6">
        <div className="max-w-3xl space-y-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="size-3.5" />
              Agricultura de precisión
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
              Fumigá tu campo con{' '}
              <span className="bg-gradient-to-r from-primary via-emerald-300 to-primary bg-clip-text text-transparent">
                drones
              </span>
              , sin pisar el lote
            </h1>
          </Reveal>

          <Reveal delay={170}>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Aplicamos fitosanitarios y fertilizantes foliares con drones de pulverización:
              precisión milimétrica, menos costo y más cuidado del ambiente.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap gap-3">
              <a href={landingAnchors.contactanos} className={buttonVariants({ size: 'lg' })}>
                Cotiza ahora
                <ArrowRight className="size-4" />
              </a>
              <a
                href={landingAnchors.trabajos}
                className={cn(
                  buttonVariants({ variant: 'outline', size: 'lg' }),
                  'border-white/25 hover:bg-white/10',
                )}
              >
                Ver trabajos realizados
              </a>
            </div>
          </Reveal>

          <Reveal delay={310}>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/70">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
