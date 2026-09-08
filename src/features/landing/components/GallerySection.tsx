import { MapPin, PlayCircle, Sprout } from 'lucide-react';

import { Reveal } from '@/components/common/Reveal';

import { galleryItems } from '../data/landingData';
import { GalleryMedia } from './GalleryMedia';

export default function GallerySection() {
  return (
    <section id="trabajos" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-12 max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Nuestros trabajos
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Trabajos realizados en la región
          </h2>
          <p className="text-lg text-muted-foreground">
            Más de 8.500 hectáreas tratadas en la última temporada. Estas son algunas de las
            aplicaciones que ya realizamos para productores de la zona.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={(index % 3) * 120} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5">
                <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                  <GalleryMedia item={item} />

                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                    {item.hectares} ha
                  </span>

                  {item.type === 'video' && (
                    <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
                      <PlayCircle className="size-3.5" />
                      Video
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Sprout className="size-4 shrink-0 text-primary" />
                    {item.crop}
                  </p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-4 shrink-0 text-primary" />
                    {item.location} · {item.period}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
