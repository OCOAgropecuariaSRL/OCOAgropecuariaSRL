# OCO Agropecuaria SRL · Fumigación con Drones

Landing page de captación de clientes para **OCO Agropecuaria SRL** — servicio de fumigación
y pulverización de cultivos con drones agrícolas.

## Stack

| Capa        | Tecnología                                            |
| ----------- | ----------------------------------------------------- |
| Framework   | React 19 + Vite 6 + TypeScript (modo estricto)        |
| Estilos     | Tailwind CSS v4 (design tokens en `@theme`)           |
| Ruteo       | React Router v7 (modo data)                           |
| Datos       | TanStack Query v5                                     |
| Formularios | React Hook Form + Zod                                 |
| Testing     | Vitest 3 + Testing Library                            |
| Calidad     | ESLint 9 (flat config) + Prettier                     |

## Estructura

```
src/
├── app/                  → bootstrap (main, providers, router)
├── components/
│   ├── ui/               → design system (Button, Card, Input, Badge…)
│   ├── layout/           → AppLayout + Sidebar (panel de gestión, futuro)
│   └── common/           → PageLoader, FeaturePlaceholder
├── features/
│   ├── landing/          → ★ página pública de captación
│   │   ├── components/   → secciones (Hero, Servicios, Galería, Comparativa, Nosotros, Stats, Contacto)
│   │   ├── data/         → textos, servicios, trabajos, estadísticas y dueños (editables acá)
│   │   ├── schemas/      → validación del formulario de cotización (Zod)
│   │   ├── hooks/        → useContactSubmit (envío a WhatsApp)
│   │   ├── utils/        → construcción del link wa.me
│   │   ├── pages/        → LandingPage + tests
│   │   └── types.ts
│   ├── drones/           → módulo de gestión futuro (flota, CRUD mock)
│   └── common/           → NotFound
├── config/env.ts         → variables de entorno (número de WhatsApp)
├── lib/utils.ts          → helpers (cn, formato de fechas…)
├── styles/global.css     → tokens de diseño Tailwind
└── test/setup.ts         → setup de Vitest
```

## Funcionamiento de la landing

1. **Header fijo** con logo, navegación por anclas (`Inicio`, `Servicios`, `Nuestros Trabajos`,
   `Contacto`) y botón **Cotiza ahora** (menú mobile con hamburguesa).
2. **Inicio** (`#inicio`): presentación del servicio con escena ilustrativa del dron fumigando.
3. **Servicios** (`#servicios`): tarjetas de servicios.
4. **Nuestros Trabajos** (`#trabajos`): galería con 4 imágenes y 2 videos.
   Subí tus archivos a `public/trabajos/` (ver `public/trabajos/README.md`):
   la galería muestra esa foto/video automáticamente, y mientras no existan
   muestra un placeholder con la estética actual.
5. **Comparativa** (`#comparativa`): tabla drones vs. métodos tradicionales.
6. **¿Quiénes somos?** (`#nosotros`): visión y dueños (editar en `landingData.ts`).
7. **Zócalo de estadísticas**.
8. **Contacto** (`#contacto`): formulario con *nombre, teléfono, hectáreas y mensaje*.
   Al enviar abre WhatsApp con el mensaje redactado hacia el número configurado.

### Configuración del WhatsApp

Creá un archivo `.env` a partir de `.env.example`:

```env
VITE_WHATSAPP_PHONE=5493564684187
```

El número destino (dueño que recibe las cotizaciones) se configura ahí. El saludo del mensaje y
todos los textos de la página se editan en `src/features/landing/data/landingData.ts`.

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # build de producción (dist/)
npm run preview    # previsualizar el build
npm run test       # correr tests (Vitest)
npm run lint       # ESLint
npm run format     # Prettier
```

## Escalabilidad

La arquitectura es **feature-based**: cada módulo de dominio vive en `src/features/<modulo>`
con sus tipos, datos, hooks, componentes y páginas autocontenidos. La landing es el primer
módulo; los próximos requerimientos (panel de gestión de la flota, misiones, campos, etc.)
se agregan como nuevas features sin tocar el resto de la aplicación.