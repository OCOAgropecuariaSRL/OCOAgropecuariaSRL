import { useEffect, useState } from 'react';

/**
 * Scroll-spy: devuelve el id de la sección visible en el viewport.
 * Se usa para resaltar con un subrayado el ítem activo del menú.
 *
 * Usa IntersectionObserver con una "franja de observación" entre el 30%
 * y el 50% del alto del viewport: la sección que cruza esa franja es la activa.
 * Si el entorno no soporta IntersectionObserver (p. ej. jsdom en tests),
 * se mantiene la sección inicial.
 */
export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState<string>(sectionIds[0] ?? '');

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;

    /** Estado de visibilidad (respecto a la franja) de cada sección rastreada. */
    const visible = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visible.set(entry.target.id, entry.isIntersecting);
        }

        // La primera sección visible en orden del documento es la activa.
        const current = sectionIds.find((id) => visible.get(id));
        if (current) {
          setActive(current);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 },
    );

    for (const id of sectionIds) {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
