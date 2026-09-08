import { ArrowRight } from 'lucide-react';

import { Reveal } from '@/components/common/Reveal';
import { buttonVariants } from '@/components/ui/Button';

import { landingAnchors, services } from '../data/landingData';

export default function ServicesSection() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-muted/50 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Servicios</p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            ¿Qué hacemos por tu campo?
          </h2>
          <p className="text-lg text-muted-foreground">
            Un servicio completo de aplicación aérea con drones para cultivos extensivos, con
            operadores certificados y tecnología GPS.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, description }, index) => (
            <Reveal key={id} delay={(index % 3) * 110} className="h-full">
              <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:bg-card/80 hover:shadow-xl hover:shadow-primary/5">
                <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <a href={landingAnchors.contactanos} className={buttonVariants({ size: 'lg' })}>
              Pedí tu cotización sin cargo
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
