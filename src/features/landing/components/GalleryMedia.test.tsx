import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import type { GalleryItem } from '../types';
import { GalleryMedia } from './GalleryMedia';

const imageItem: GalleryItem = {
  id: 'trab-01',
  type: 'image',
  title: 'Fumigación de soja',
  crop: 'Soja · Lote Norte',
  location: 'San Francisco',
  hectares: 120,
  period: 'Temporada 2025/26',
  tone: 1,
  src: '/trabajos/01-fumigacion-soja.jpeg',
};

const videoItem: GalleryItem = {
  id: 'trab-05',
  type: 'video',
  title: 'Video · Aplicación en vuelo',
  crop: 'Aplicación en maíz',
  location: 'El Tío',
  hectares: 45,
  period: 'Temporada 2025/26',
  tone: 5,
  src: '/trabajos/05-video-aplicacion.mp4',
};

describe('GalleryMedia', () => {
  it('renderiza una imagen con la ruta del archivo subido', () => {
    render(<GalleryMedia item={imageItem} />);

    const img = screen.getByAltText('Fumigación de soja');
    expect(img).toHaveAttribute('src', '/trabajos/01-fumigacion-soja.jpeg');
  });

  it('muestra el placeholder cuando la imagen no existe todavía', () => {
    render(<GalleryMedia item={imageItem} />);

    const img = screen.getByAltText('Fumigación de soja');
    fireEvent.error(img);

    // Sin archivo subido: no hay img y queda la escena placeholder (svg con role="img").
    expect(screen.queryByAltText('Fumigación de soja')).not.toBeInTheDocument();
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0);
  });

  it('renderiza un video con controles y su fuente', () => {
    render(<GalleryMedia item={videoItem} />);

    const video = screen.getByTitle('Video · Aplicación en vuelo');
    expect(video.tagName).toBe('VIDEO');
    expect(video.querySelector('source')).toHaveAttribute(
      'src',
      '/trabajos/05-video-aplicacion.mp4',
    );
  });

  it('muestra el aviso de video próximamente cuando el archivo no existe', () => {
    render(<GalleryMedia item={videoItem} />);

    const video = screen.getByTitle('Video · Aplicación en vuelo');
    fireEvent.error(video);

    expect(screen.getByText('Video disponible próximamente')).toBeInTheDocument();
  });
});
