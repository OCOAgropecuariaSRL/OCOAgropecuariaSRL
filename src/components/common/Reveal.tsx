import type { CSSProperties, ReactNode } from 'react';

import { useInView } from '@/lib/hooks/useInView';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Retraso en ms antes de iniciar la animación (permite escalonar). */
  delay?: number;
  /** Desplazamiento vertical inicial en px. */
  y?: number;
}

/**
 * Animación de aparición al entrar en el viewport (scroll reveal).
 * IntersectionObserver + transiciones CSS: sin dependencias externas.
 * Respeta `prefers-reduced-motion` vía CSS global.
 */
export function Reveal({ children, className, delay = 0, y = 24 }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });

  const style: CSSProperties = {
    transitionDelay: inView ? `${delay}ms` : '0ms',
    transform: inView ? 'translate3d(0, 0, 0)' : `translate3d(0, ${y}px, 0)`,
    opacity: inView ? 1 : 0,
  };

  return (
    <div
      ref={ref}
      style={style}
      className={cn('transition-all duration-700 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  );
}
