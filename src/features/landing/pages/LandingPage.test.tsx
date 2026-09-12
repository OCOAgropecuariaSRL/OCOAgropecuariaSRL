import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('muestra la marca y el botón de cotización en el header', () => {
    render(<LandingPage />);

    expect(screen.getAllByText('OCO Agropecuaria SRL').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Cotiza ahora').length).toBeGreaterThan(0);
    expect(screen.getByText('Fumigación con drones')).toBeInTheDocument();
  });

  it('muestra todas las secciones principales', () => {
    render(<LandingPage />);

    expect(screen.getByRole('heading', { name: /Fumigá tu campo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /¿Qué hacemos por tu campo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Trabajos realizados en la región/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Drones vs. métodos tradicionales/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Contanos tu campo/i })).toBeInTheDocument();
  });

  it('muestra los campos del formulario de cotización', () => {
    render(<LandingPage />);

    const form = screen.getByLabelText(/Nombre y apellido/i);
    expect(form).toBeInTheDocument();
    expect(screen.getByLabelText(/Teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/hectáreas/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/un poco sobre tu consulta/i)).toBeInTheDocument();
    expect(screen.getByText('Enviar por WhatsApp')).toBeInTheDocument();
  });

  it('muestra los accesos de contacto: Instagram, email y zona de trabajo', () => {
    render(<LandingPage />);

    const instagram = screen.getByText('@ocoagro');
    expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/ocoagro');

    const email = screen.getByText('oco.agropecuariasrl@gmail.com');
    expect(email).toHaveAttribute('href', 'mailto:oco.agropecuariasrl@gmail.com');

    expect(
      screen.getByText('Trabajamos en el este cordobés, San Francisco y alrededores'),
    ).toBeInTheDocument();
    expect(screen.queryByText('Horario de atención')).not.toBeInTheDocument();

    expect(screen.getByText('+54 9 356468-4187')).toBeInTheDocument();
  });

  it('las anclas del menú apuntan a las secciones correspondientes', () => {
    const { container } = render(<LandingPage />);

    const nav = container.querySelector('header nav');
    expect(nav).not.toBeNull();
    expect(within(nav as HTMLElement).getByText('Inicio')).toHaveAttribute('href', '#inicio');
    expect(within(nav as HTMLElement).getByText('Servicios')).toHaveAttribute('href', '#servicios');
    expect(within(nav as HTMLElement).getByText('Nuestros Trabajos')).toHaveAttribute('href', '#trabajos');
    expect(within(nav as HTMLElement).getByText('Contacto')).toHaveAttribute('href', '#contacto');
  });

  it('marca la sección activa del menú con aria-current (scroll-spy)', () => {
    const { container } = render(<LandingPage />);

    const nav = container.querySelector('header nav') as HTMLElement;

    // Al cargar, la sección visible es "Inicio".
    expect(within(nav).getByText('Inicio')).toHaveAttribute('aria-current', 'true');
    expect(within(nav).getByText('Servicios')).not.toHaveAttribute('aria-current');
  });
});