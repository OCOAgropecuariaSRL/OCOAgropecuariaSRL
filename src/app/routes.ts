/**
 * Rutas centrales de la aplicación.
 *
 * La ruta principal es una landing pública de captación (`/`).
 * Las rutas del panel de gestión quedan definidas como scaffolding futuro:
 * cuando se desarrollen los módulos internos se registran en el router.
 */
export const appRoutes = {
  home: '/',

  // ---- Módulo de gestión (futuro, aún no registrado en el router) ----
  dashboard: '/panel/dashboard',
  drones: '/panel/drones',
  droneNew: '/panel/drones/nuevo',
  droneDetail: (id: string) => `/panel/drones/${id}`,
  droneEdit: (id: string) => `/panel/drones/${id}/editar`,
  campos: '/panel/campos',
  misiones: '/panel/misiones',
  productos: '/panel/productos',
  operadores: '/panel/operadores',
} as const;