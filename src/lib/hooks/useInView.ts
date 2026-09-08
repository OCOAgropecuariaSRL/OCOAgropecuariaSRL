import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Proporción del elemento visible para considerarse "en pantalla". */
  threshold?: number;
  /** Margen extra del viewport (sintaxis CSS como "0px 0px -40px 0px"). */
  rootMargin?: string;
  /** Si solo interesa la primera vez que entra en pantalla. */
  once?: boolean;
}

/**
 * Observa un elemento con IntersectionObserver y devuelve si está visible.
 * Si el navegador no soporta IntersectionObserver, asume visible (fallback).
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin,
  once = true,
}: UseInViewOptions = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, inView };
}
