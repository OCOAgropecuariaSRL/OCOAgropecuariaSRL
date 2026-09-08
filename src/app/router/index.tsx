import { createBrowserRouter } from 'react-router-dom';

import LandingPage from '@/features/landing/pages/LandingPage';
import NotFoundPage from '@/features/common/pages/NotFoundPage';

/**
 * Router de la aplicación.
 * Por ahora la app es una landing pública. Cuando se desarrollen los
 * módulos de gestión interna se agregan acá bajo `/panel` con AppLayout.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);