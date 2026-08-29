import HeraldicDivider from './HeraldicDivider'

export default function SectionTitle({ kicker, title, className = '' }) {
  return (
    <div className={`mx-auto max-w-3xl text-center ${className}`}>
      <HeraldicDivider className="mb-7" />
      {kicker && (
        <p className="mb-3 font-display text-[11px] sm:text-xs uppercase tracking-[0.5em] text-silver-500">
          {kicker}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black leading-tight gold-forged">
        {title}
      </h2>
      <HeraldicDivider className="mt-7" />
    </div>
  )
}
