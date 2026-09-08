import { PlayCircle } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

import type { GalleryItem } from '../types';
import { FieldScene } from './scenes/FieldScene';

interface GalleryMediaProps {
  item: GalleryItem;
}

/**
 * Muestra el medio real (imagen o video) de un trabajo.
 *
 * - Mientras el archivo no carga, se ve como fondo el FieldScene placeholder.
 * - Si el archivo NO existe todavía (no fue subido a `public/trabajos/`),
 *   queda el placeholder, con un aviso en el caso de los videos.
 * - En cuanto se sube el archivo con el nombre esperado, aparece solo.
 */
export function GalleryMedia({ item }: GalleryMediaProps) {
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="relative h-full w-full">
        <FieldScene tone={item.tone} />
        {item.type === 'video' && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center gap-2 rounded-full bg-black/55 px-4 py-2 text-xs font-medium text-white backdrop-blur">
              <PlayCircle className="size-4" />
              Video disponible próximamente
            </span>
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {/* Fondo mientras carga (o si el medio se recorta por object-cover) */}
      <div className={cn('absolute inset-0', ready && 'opacity-0 transition-opacity')}>
        <FieldScene tone={item.tone} />
      </div>

      {item.type === 'video' ? (
        <video
          controls
          playsInline
          preload="metadata"
          title={item.title}
          aria-label={item.title}
          className={cn('relative h-full w-full object-cover', !ready && 'invisible')}
          onLoadedMetadata={() => setReady(true)}
          onError={() => setFailed(true)}
        >
          <source src={item.src} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          className={cn(
            'relative h-full w-full object-cover transition-transform duration-300 group-hover:scale-105',
            !ready && 'invisible',
          )}
          onLoad={() => setReady(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
