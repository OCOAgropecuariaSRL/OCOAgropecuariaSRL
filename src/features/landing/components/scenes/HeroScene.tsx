/**
 * Escena ilustrativa del hero: un dron de pulverización volando sobre
 * un lote en perspectiva. Todo SVG procedural, sin dependencias externas.
 */
export function HeroScene() {
  const vp = { x: 330, y: 250 };

  // Cuñas de cultivo en perspectiva desde el punto de fuga.
  const wedges = Array.from({ length: 26 }, (_, i) => {
    const x1 = i * 26;
    const x2 = (i + 1) * 26;
    const dark = i % 2 === 0;
    return (
      <polygon
        key={i}
        points={`${vp.x},${vp.y} ${x1},540 ${x2},540`}
        fill={dark ? '#5d8a2e' : '#79a53f'}
      />
    );
  });

  return (
    <svg
      viewBox="0 0 640 520"
      className="h-auto w-full"
      role="img"
      aria-label="Dron fumigando un campo de cultivo"
    >
      <defs>
        <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9ecdf" />
          <stop offset="100%" stopColor="#f4f9e8" />
        </linearGradient>
        <linearGradient id="hero-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8aa063" />
          <stop offset="100%" stopColor="#4c7231" />
        </linearGradient>
      </defs>

      <rect width="640" height="520" fill="url(#hero-sky)" />

      {/* Sol */}
      <circle cx="520" cy="84" r="60" fill="#fdeba3" opacity="0.55" />
      <circle cx="520" cy="84" r="34" fill="#fcd34d" />

      {/* Nubes */}
      <ellipse cx="120" cy="96" rx="74" ry="20" fill="#ffffff" opacity="0.8" />
      <ellipse cx="168" cy="86" rx="44" ry="16" fill="#ffffff" opacity="0.75" />
      <ellipse cx="420" cy="140" rx="60" ry="16" fill="#ffffff" opacity="0.65" />

      {/* Cinturón de árboles en el horizonte */}
      <path
        d="M0 250 Q 80 218 160 248 T 320 244 T 480 250 T 640 244 L640 252 L0 252 Z"
        fill="#7c9660"
      />
      <path d="M0 252 L640 252 L640 264 L0 264 Z" fill="#5f7c49" />

      {/* Lote de cultivo con perspectiva */}
      <polygon points="0,264 640,264 640,540 0,540" fill="url(#hero-ground)" />
      {wedges}

      {/* ---- Dron fumigador ---- */}
      <g transform="translate(330 206)">
        <g className="animate-float">
        {/* Rociado */}
        <g opacity="0.85">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <circle key={i} cx={-84 + i * 24} cy={46} r={3} fill="#9fc7e8" />
          ))}
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <circle key={i} cx={-68 + i * 24} cy={58} r={2.4} fill="#8fb9dc" />
          ))}
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <circle key={i} cx={-56 + i * 24} cy={68} r={1.8} fill="#7fa8cf" />
          ))}
        </g>

        {/* Brazos y motores */}
        {[
          { x: -110, y: -52 },
          { x: 110, y: -52 },
          { x: -110, y: 52 },
          { x: 110, y: 52 },
        ].map((m, i) => (
          <g key={i}>
            <line x1="0" y1="0" x2={m.x} y2={m.y} stroke="#2f3a2c" strokeWidth="7" strokeLinecap="round" />
            <circle cx={m.x} cy={m.y} r="13" fill="#3c4a38" />
            <ellipse
              cx={m.x}
              cy={m.y}
              rx="38"
              ry="9"
              fill="none"
              stroke="#2f3a2c"
              strokeWidth="3"
              transform={`rotate(${m.x > 0 ? 28 : -28} ${m.x} ${m.y})`}
            />
            <ellipse
              cx={m.x}
              cy={m.y}
              rx="16"
              ry="5"
              fill="#cbd5bf"
              transform={`rotate(${m.x > 0 ? 28 : -28} ${m.x} ${m.y})`}
            />
          </g>
        ))}

        {/* Cuerpo central */}
        <rect x="-58" y="-20" width="116" height="40" rx="14" fill="#2f3a2c" />
        <rect x="-34" y="-12" width="68" height="22" rx="6" fill="#1d7a3f" />
        <circle cx="-40" cy="0" r="5" fill="#fbbf24" />
        <rect x="30" y="-12" width="20" height="22" rx="4" fill="#3c4a38" />

        {/* Tanque de pulverización */}
        <rect x="-24" y="18" width="48" height="20" rx="8" fill="#5ea2d6" />
        <rect x="-12" y="22" width="24" height="12" rx="4" fill="#dbeafe" opacity="0.85" />

        {/* Barras rociadoras */}
        <line x1="-88" y1="40" x2="88" y2="40" stroke="#2f3a2c" strokeWidth="4" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
}