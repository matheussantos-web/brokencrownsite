export default function Mascot({ className = '' }) {
  return (
    <div className={`relative ${className}`}>
      {/* Golden backlight glow — apenas luz, sem formas de personagem */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gold-500/15 blur-3xl"
        aria-hidden="true"
      />

      {/* Mascote oficial da Broken Crown (imagem transparente) */}
      <picture>
        <source srcSet="images/mascote.webp" type="image/webp" />
        <img
          src="images/mascote.png"
          alt="Guerreiro da Broken Crown"
          width="1151"
          height="1367"
          loading="lazy"
          decoding="async"
          className="relative z-10 h-auto w-full object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.85)]"
        />
      </picture>
    </div>
  )
}
