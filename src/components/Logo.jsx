export default function Logo({
  src = '/images/logo.png',
  alt = 'BROKEN CROWN',
  size = 'md',
  className = '',
  style,
}) {
  const sizes = {
    xs: 'h-8 w-8',
    sm: 'h-10 w-10',
    md: 'h-14 w-14',
    lg: 'h-20 w-20',
    xl: 'h-28 w-28',
  }

  return (
    <img
      src={src}
      alt={alt}
      width="1254"
      height="1254"
      loading="lazy"
      decoding="async"
      className={`${sizes[size] || sizes.md} object-contain ${className}`}
      style={style}
    />
  )
}
