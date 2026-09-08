/** Paletas por tone para variar las escenas de la galería. */
const PALETTES: { sun: string; sky: [string, string]; crop: [string, string]; far: string }[] = [
  { sun: '#fcd34d', sky: ['#dcecdd', '#f4f9e8'], crop: ['#79a53f', '#547f2b'], far: '#86a264' },
  { sun: '#f6c453', sky: ['#f2eecb', '#faf7e6'], crop: ['#9db43d', '#71892c'], far: '#98a36b' },
  { sun: '#f4b942', sky: ['#f8ecc8', '#fdf8e7'], crop: ['#c9ad4e', '#a08433'], far: '#b09d63' },
  { sun: '#e9b872', sky: ['#efe5cf', '#faf5e9'], crop: ['#b98a4e', '#8f6238'], far: '#a98b5d' },
  { sun: '#fcd34d', sky: ['#e4efd8', '#f7fbea'], crop: ['#86a93f', '#5f8a2d'], far: '#93a563' },
  { sun: '#e8d276', sky: ['#cdd9cc', '#e6eadd'], crop: ['#718f63', '#516c47'], far: '#7b8e72' },
];

interface FieldSceneProps {
  /** Índice de paleta (1-6). */
  tone: number;
}

/**
 * Escena procedural de un campo visto desde el aire.
 * Reemplazable por fotografías reales sin tocar la UI (ver datos de galería).
 */
export function FieldScene({ tone }: FieldSceneProps) {
  const palette = PALETTES[(tone - 1) % PALETTES.length] ?? PALETTES[0]!;
  const vp = { x: 180, y: 128 };

  const wedges = Array.from({ length: 16 }, (_, i) => {
    const x1 = i * 24;
    const x2 = (i + 1) * 24;
    const dark = i % 2 === 0;
    return (
      <polygon
        key={i}
        points={`${vp.x},${vp.y} ${x1},240 ${x2},240`}
        fill={dark ? palette.crop[1] : palette.crop[0]}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 360 240"
      className="h-auto w-full"
      preserveAspectRatio="xMidYMid slice"
      role="img"
    >
      <defs>
        <linearGradient id="fs-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={palette.sky[0]} />
          <stop offset="100%" stopColor={palette.sky[1]} />
        </linearGradient>
      </defs>

      <rect width="360" height="240" fill="url(#fs-sky)" />
      <circle cx="296" cy="34" r="22" fill="#ffffff" opacity="0.7" />
      <circle cx="296" cy="34" r="13" fill={palette.sun} />

      {/* Monte en horizonte */}
      <path d="M0 128 Q 60 112 130 126 T 360 124 L 360 134 L 0 134 Z" fill={palette.far} />

      {/* Cultivo */}
      <polygon points="0,134 360,134 360,240 0,240" fill={palette.crop[1]} />
      {wedges}

      {/* Silueta de dron */}
      <g transform="translate(118 58)" opacity="0.9">
        <line x1="0" y1="0" x2="-16" y2="-12" stroke="#33402f" strokeWidth="3" />
        <line x1="0" y1="0" x2="16" y2="-12" stroke="#33402f" strokeWidth="3" />
        <line x1="0" y1="0" x2="-14" y2="12" stroke="#33402f" strokeWidth="3" />
        <line x1="0" y1="0" x2="14" y2="12" stroke="#33402f" strokeWidth="3" />
        <circle cx="-16" cy="-12" r="4" fill="#33402f" />
        <circle cx="16" cy="-12" r="4" fill="#33402f" />
        <circle cx="-14" cy="12" r="4" fill="#33402f" />
        <circle cx="14" cy="12" r="4" fill="#33402f" />
        <rect x="-8" y="-6" width="16" height="12" rx="3" fill="#33402f" />
      </g>
    </svg>
  );
}