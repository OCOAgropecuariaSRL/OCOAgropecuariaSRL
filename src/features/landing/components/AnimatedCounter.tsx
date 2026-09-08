import { useEffect, useRef, useState } from 'react';

import { useInView } from '@/lib/hooks/useInView';

interface AnimatedCounterProps {
  /** Valor a animar, p.ej: "8.500+", "98%", "-40%", "24 hs". */
  value: string;
  /** Duración de la animación en ms. */
  durationMs?: number;
}

const formatter = new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 });

/** Separa número con signo de su sufijo: "-40%" → { target: -40, suffix: "%" }. */
function parseStat(raw: string): { target: number; suffix: string } {
  const match = raw.trim().match(/^(-?)([\d.,\s]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw };

  const sign = match[1] === '-' ? -1 : 1;
  const normalized = match[2].replace(/[\s.]/g, '').replace(',', '.');
  const target = sign * (parseFloat(normalized) || 0);
  return { target, suffix: match[3] ?? '' };
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

/** Contador que se anima desde 0 hasta el valor cuando entra en pantalla. */
export function AnimatedCounter({ value, durationMs = 1600 }: AnimatedCounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const [display, setDisplay] = useState('0');
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const { target, suffix } = parseStat(value);
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const current = Math.round(target * easeOutCubic(progress));
      setDisplay(`${formatter.format(current)}${suffix}`);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, durationMs]);

  return <span ref={ref}>{display}</span>;
}
