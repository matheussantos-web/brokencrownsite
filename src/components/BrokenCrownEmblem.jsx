/**
 * BrokenCrownEmblem — o símbolo principal da marca.
 * Coroa quebrada medieval, metálica, dourada, agressiva e detalhada.
 * Deve ser reconhecível como o MESMO símbolo no hero, navbar e favicon.
 */
export default function BrokenCrownEmblem({
  className = '',
  id = 'emblem',
}) {
  const goldId = `${id}Gold`
  const steelId = `${id}Steel`

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={goldId} x1="0" y1="0" x2="0" y2="64">
          <stop offset="0%" stopColor="#f7e9b0" />
          <stop offset="35%" stopColor="#d6b14a" />
          <stop offset="65%" stopColor="#a87a22" />
          <stop offset="100%" stopColor="#6e4c12" />
        </linearGradient>
        <linearGradient id={steelId} x1="0" y1="0" x2="64" y2="0">
          <stop offset="0%" stopColor="#9a9da0" />
          <stop offset="50%" stopColor="#d3d5d8" />
          <stop offset="100%" stopColor="#6a6d70" />
        </linearGradient>
      </defs>

      {/* ---- Base band (with rivets) ---- */}
      <rect x="6" y="46" width="52" height="7" rx="1.5" fill={`url(#${goldId})`} />
      <rect x="6" y="43.5" width="52" height="3" rx="1" fill={`url(#${goldId})`} opacity="0.7" />
      {/* Rivets */}
      <circle cx="11" cy="49.5" r="1.1" fill="#6e4c12" />
      <circle cx="53" cy="49.5" r="1.1" fill="#6e4c12" />
      <circle cx="26" cy="49.5" r="1.1" fill="#6e4c12" opacity="0.6" />
      <circle cx="38" cy="49.5" r="1.1" fill="#6e4c12" opacity="0.6" />

      {/* ---- Main crown spikes ---- */}
      {/* Outer spikes (gold) */}
      <path d="M6 43 L6 24 L16 33 L24 18 L30 26 L34 26 L40 18 L48 33 L58 24 L58 43 Z" fill={`url(#${goldId})`} stroke="#5a3c0e" strokeWidth="0.8" />

      {/* Inner highlight ridges */}
      <path d="M11 40 L11 27 L17 33 L24 22 L30 29" stroke="#f7e9b0" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
      <path d="M53 40 L53 27 L47 33 L40 22 L34 29" stroke="#f7e9b0" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />

      {/* ---- Center gem holder + gem ---- */}
      <path d="M26 26 L32 33 L38 26" stroke="#f7e9b0" strokeWidth="1.2" fill="none" opacity="0.8" />
      <circle cx="32" cy="31" r="3.4" fill="#f7e9b0" stroke="#6e4c12" strokeWidth="0.8" />
      <circle cx="32" cy="31" r="1.5" fill="#ffffff" opacity="0.85" />

      {/* ---- BROKEN right spire (silver, snapped off) ---- */}
      <g>
        {/* The snapped-off top chard */}
        <path d="M56 24 L60 16 L54 20 Z" fill={`url(#${steelId})`} />
        <path d="M58.5 20 L60 16" stroke="#4a4d50" strokeWidth="0.8" strokeLinecap="round" />
        {/* Fracture at break */}
        <path d="M56 24 L52 26" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M58 27 L53 28.5" stroke="#1a1a1a" strokeWidth="1" strokeLinecap="round" />
        {/* Floating silver shard */}
        <circle cx="61" cy="14" r="1" fill="#c8cacd" />
      </g>

      {/* ---- Left spire chip (subtle) ---- */}
      <path d="M15 20 L18 15 L20 20" fill={`url(#${steelId})`} opacity="0.85" />
      <path d="M18 15 L18 12" stroke="#1a1a1a" strokeWidth="1" strokeLinecap="round" />

      {/* ---- Cracks in the crown body ---- */}
      <path d="M30 26 L31 33 L29 37" stroke="#231a06" strokeWidth="1.1" fill="none" opacity="0.9" />
      <path d="M47 40 L46 34 L48 30" stroke="#231a06" strokeWidth="0.9" fill="none" opacity="0.7" />
      <path d="M36 46 L33 42" stroke="#231a06" strokeWidth="0.8" fill="none" opacity="0.6" />
    </svg>
  )
}
