import Ornament from './Ornament'

export default function SectionHeading({ kicker, title, className = '' }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <Ornament className="mb-6" />
      {kicker && (
        <p className="mb-3 font-display text-[11px] sm:text-xs uppercase tracking-[0.45em] text-silver-500">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight gold-gradient-text">
        {title}
      </h2>
      <Ornament className="mt-6" />
    </div>
  )
}
