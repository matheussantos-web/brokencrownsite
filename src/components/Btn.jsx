export default function Btn({
  href = '#',
  variant = 'gold',
  size = 'md',
  icon,
  children,
  className = '',
  ...rest
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-3 font-display font-semibold tracking-widest uppercase transition-all duration-300 select-none'

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-sm sm:text-base',
  }

  const variants = {
    gold:
      'text-coal-950 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 ' +
      'border border-gold-400/70 shadow-[0_0_30px_rgba(212,175,55,0.25),inset_0_1px_0_rgba(255,255,255,0.5)] ' +
      'hover:shadow-[0_0_45px_rgba(212,175,55,0.45),inset_0_1px_0_rgba(255,255,255,0.5)] hover:brightness-110',
    outline:
      'text-gold-300 border border-gold-600/60 bg-coal-900/40 ' +
      'shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] ' +
      'hover:border-gold-400 hover:text-gold-200 hover:bg-gold-500/10 hover:shadow-[0_0_35px_rgba(212,175,55,0.2)]',
    ghost:
      'text-silver-300 border border-silver-600/40 bg-coal-900/30 ' +
      'hover:border-silver-400 hover:text-white hover:bg-white/5',
  }

  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className} relative overflow-hidden`}
      {...rest}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 inline-flex items-center gap-3">
        {icon && <span className="text-lg leading-none">{icon}</span>}
        {children}
      </span>
    </a>
  )
}
