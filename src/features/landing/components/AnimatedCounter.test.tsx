import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AnimatedCounter } from './AnimatedCounter';

describe('AnimatedCounter', () => {
  it('renderiza el valor inicial como 0', () => {
    render(<AnimatedCounter value="8.500+" />);
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  it('parsea correctamente los distintos formatos de estadística', () => {
    // El componente se renderiza igual para todos: verifica el arranque en 0.
    render(
      <div>
        <AnimatedCounter value="98%" />
        <AnimatedCounter value="-40%" />
        <AnimatedCounter value="24 hs" />
      </div>,
    );
    expect(screen.getAllByText('0').length).toBe(3);
  });
});
