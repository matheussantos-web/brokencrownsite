import CrownLogo from './CrownLogo'

export default function Mascot({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow behind mask */}
      <div className="absolute inset-0 rounded-full bg-gold-500/10 blur-3xl" />

      {/* The masked warrior-king silhouette */}
      <svg
        viewBox="0 0 300 360"
        className="relative z-10 w-full h-auto drop-shadow-[0_0_35px_rgba(212,175,55,0.25)]"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="armor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2a2a" />
            <stop offset="55%" stopColor="#161616" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="steel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#999" />
            <stop offset="50%" stopColor="#4a4a4a" />
            <stop offset="100%" stopColor="#222" />
          </linearGradient>
          <linearGradient id="cape" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a3a3a" />
            <stop offset="100%" stopColor="#050505" />
          </linearGradient>
        </defs>

        {/* Cape */}
        <path
          d="M95 120 C60 190 55 280 70 350 L230 350 C245 280 240 190 205 120 Z"
          fill="url(#cape)"
          opacity="0.9"
        />
        <path
          d="M75 300 L70 350 L230 350 L225 300"
          stroke="#222"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Shoulders / pauldrons */}
        <path d="M70 150 L120 132 L120 176 L70 176 Z" fill="#242424" stroke="#3a3a3a" />
        <path d="M230 150 L180 132 L180 176 L230 176 Z" fill="#242424" stroke="#3a3a3a" />
        <path d="M70 150 L58 160 L64 176 L120 176 L120 164" fill="#1b1b1b" />
        <path d="M230 150 L242 160 L236 176 L180 176 L180 164" fill="#1b1b1b" />

        {/* Torso armor */}
        <path
          d="M120 150 L150 140 L180 150 L180 260 L160 270 L150 272 L140 270 L120 260 Z"
          fill="url(#armor)"
          stroke="#3a3a3a"
        />
        {/* Leather straps */}
        <path d="M138 180 L162 180" stroke="#6b520f" strokeWidth="3" />
        <path d="M137 196 L163 196" stroke="#6b520f" strokeWidth="3" />
        <circle cx="150" cy="188" r="4" fill="#c9a227" />

        {/* Neck + head */}
        <rect x="138" y="120" width="24" height="20" rx="3" fill="#141414" />

        {/* Hoodie head silhouette */}
        <path
          d="M118 95 C120 66 140 55 150 55 C160 55 180 66 182 95 C184 118 172 130 150 130 C128 130 116 118 118 95 Z"
          fill="url(#armor)"
        />
        {/* Faceless void */}
        <path
          d="M132 92 C136 72 148 64 150 64 C152 64 164 72 168 92 C166 100 158 104 150 104 C142 104 134 100 132 92 Z"
          fill="#000"
          className="animate-flicker"
        />
        {/* Eye glows */}
        <ellipse cx="140" cy="92" rx="4" ry="5" fill="#e3c879" opacity="0.9" />
        <ellipse cx="160" cy="92" rx="4" ry="5" fill="#e3c879" opacity="0.9" />
        <ellipse cx="140" cy="91" rx="1.6" ry="2" fill="#fff" opacity="0.9" />
        <ellipse cx="160" cy="91" rx="1.6" ry="2" fill="#fff" opacity="0.9" />

        {/* Jaw metal */}
        <path d="M128 112 L150 122 L172 112 L172 126 L150 134 L128 126 Z" fill="#1a1a1a" stroke="#3a3a3a" />
        <path d="M141 118 L150 122 L159 118" stroke="#555" fill="none" strokeWidth="1.5" />

        {/* Hood rim */}
        <path d="M116 92 C120 122 138 134 150 134 C162 134 180 122 184 92" stroke="#4a4a4a" strokeWidth="3" fill="none" opacity="0.6" />

        {/* Crown resting on head */}
        <g transform="translate(108,8) scale(1.3)">
          <CrownLogo className="h-16 w-16" id="mascot" />
        </g>
      </svg>

      {/* Rotating ornament ring behind */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-40">
        <svg viewBox="0 0 300 300" className="w-[115%] h-auto">
          <circle cx="150" cy="140" r="120" stroke="rgba(212,175,55,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 10" />
        </svg>
      </div>
    </div>
  )
}
