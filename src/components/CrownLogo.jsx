export default function CrownLogo({ className = '', broken = true, id = 'crown' }) {
  const goldId = `${id}Gold`
  const metalId = `${id}Metal`
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={goldId} x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#f0e6c0" />
          <stop offset="50%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#a9821a" />
        </linearGradient>
        <linearGradient id={metalId} x1="0" y1="0" x2="64" y2="0">
          <stop offset="0%" stopColor="#7a7a7a" />
          <stop offset="50%" stopColor="#b8b8b8" />
          <stop offset="100%" stopColor="#7a7a7a" />
        </linearGradient>
      </defs>

      {/* Base band */}
      <rect x="8" y="44" width="17" height="5" rx="1" fill={`url(#${goldId})`} opacity="0.9" />
      <rect x="39" y="44" width="17" height="5" rx="1" fill={`url(#${goldId})`} opacity="0.9" />
      <rect x="8" y="49" width="48" height="3" fill={`url(#${goldId})`} opacity="0.55" />

      {/* Crown silhouette */}
      <path
        d="M8 44 L8 24 L17 32 L24 18 L32 28 L40 18 L47 32 L56 24 L56 44 Z"
        fill="#141414"
        stroke={`url(#${goldId})`}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 18 L32 28 L40 18"
        stroke="#f0e6c0"
        strokeWidth="1.2"
        fill="none"
        opacity="0.9"
      />

      {broken && (
        <>
          {/* Broken / chipped right spires */}
          <path d="M47 32 L52 27" stroke={`url(#${metalId})`} strokeWidth="2" strokeLinecap="round" />
          <path d="M56 24 L56 19" stroke={`url(#${metalId})`} strokeWidth="2" strokeLinecap="round" />
          <path d="M54 29 L49 33" stroke={`url(#${metalId})`} strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
        </>
      )}

      {/* Cracks */}
      <path d="M30 28 L29 34 L31 36" stroke="#3a3a3a" strokeWidth="1" fill="none" opacity="0.8" />
      <path d="M36 48 L35 42" stroke="#555" strokeWidth="1" fill="none" opacity="0.6" />

      {/* Gems */}
      <circle cx="32" cy="22" r="2.2" fill="#d4af37" />
      <circle cx="32" cy="22" r="0.9" fill="#fff" opacity="0.8" />
    </svg>
  )
}
