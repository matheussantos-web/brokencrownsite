export default function MetalCard({
  children,
  className = '',
  hover = true,
  ...rest
}) {
  return (
    <div
      className={`metal-frame metal-corners metal-sheen relative transition-all duration-500 ${
        hover
          ? 'hover:-translate-y-1.5 hover:border-gold-500/60 hover:shadow-[0_18px_50px_rgba(0,0,0,0.65),0_0_40px_rgba(214,177,74,0.08)]'
          : ''
      } ${className}`}
      {...rest}
    >
      <span className="sheen" aria-hidden="true" />
      {children}
    </div>
  )
}
