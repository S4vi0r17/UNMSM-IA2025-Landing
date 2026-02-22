import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Curso de Inteligencia Artificial | UNMSM 2026',
    short_name: 'IA UNMSM',
    description:
      'Curso de Inteligencia Artificial para estudiantes de la Universidad Nacional Mayor de San Marcos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#83c53c',
    icons: [
      {
        src: '/logounmsm.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
