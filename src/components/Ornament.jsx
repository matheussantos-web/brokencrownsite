export default function Ornament({ className = '', small = false }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className={`h-px bg-gradient-to-r from-transparent via-gold-500/60 to-gold-500 ${small ? 'w-12 sm:w-20' : 'w-16 sm:w-28'}`} />
      <svg viewBox="0 0 40 12" className={small ? 'h-3 w-8' : 'h-5 w-12'} fill="none">
        <path d="M20 0 L22 4 L27 3 L24 8 L28 12 L23 10 L20 13 L17 10 L12 12 L16 8 L13 3 L18 4 Z" fill="#d4af37" />
        <rect x="0" y="5.2" width="9" height="1.4" rx="0.7" fill="#d4af37" opacity="0.7" />
        <rect x="31" y="5.2" width="9" height="1.4" rx="0.7" fill="#d4af37" opacity="0.7" />
      </svg>
      <span className={`h-px bg-gradient-to-l from-transparent via-gold-500/60 to-gold-500 ${small ? 'w-12 sm:w-20' : 'w-16 sm:w-28'}`} />
    </div>
  )
}
