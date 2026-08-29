export default function HeraldicDivider({ className = '', small = false }) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <span className={`h-px bg-gradient-to-r from-transparent via-gold-500/50 to-gold-500 ${small ? 'w-12 sm:w-20' : 'w-16 sm:w-28'}`} />
      <svg viewBox="0 0 64 20" className={small ? 'h-4 w-10' : 'h-6 w-14'} fill="none">
        {/* Center crest */}
        <path
          d="M32 1 L35 6 L42 5 L38 11 L44 18 L36 15 L32 19 L28 15 L20 18 L26 11 L22 5 L29 6 Z"
          fill="#d6b14a"
          opacity="0.95"
        />
        {/* Side flares */}
        <rect x="0" y="9" width="10" height="1.4" rx="0.7" fill="#d6b14a" opacity="0.6" />
        <rect x="54" y="9" width="10" height="1.4" rx="0.7" fill="#d6b14a" opacity="0.6" />
        {/* Notch marks */}
        <path d="M10 9l3 0M51 9l3 0" stroke="#d6b14a" strokeWidth="0.6" opacity="0.4" />
      </svg>
      <span className={`h-px bg-gradient-to-l from-transparent via-gold-500/50 to-gold-500 ${small ? 'w-12 sm:w-20' : 'w-16 sm:w-28'}`} />
    </div>
  )
}
