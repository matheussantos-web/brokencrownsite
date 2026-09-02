import { BUILD_SLOTS } from '../../lib/builds'

// Cores de destaque por função (fundo + texto do badge)
const ROLE_STYLES = {
  Tank: {
    badge: 'bg-blue-950/50 text-blue-400 border-blue-500/40',
    accent: 'border-blue-500/40',
  },
  Healer: {
    badge: 'bg-emerald-950/50 text-emerald-400 border-emerald-500/40',
    accent: 'border-emerald-500/40',
  },
  DPS: {
    badge: 'bg-red-950/50 text-red-400 border-red-500/40',
    accent: 'border-red-500/40',
  },
  Suporte: {
    badge: 'bg-violet-950/50 text-violet-400 border-violet-500/40',
    accent: 'border-violet-500/40',
  },
}

/** Renderiza um slot de equipamento (ícone de lugar + item + tier). */
function SlotTile({ label, slot }) {
  const { item, tier, enchant } = slot ?? { item: '', tier: 4, enchant: 0 }
  return (
    <div className="flex items-center gap-3 rounded-md border border-gold-600/20 bg-coal-800/50 p-2.5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded border border-silver-600/30 bg-coal-900/70">
        <EquipIcon />
      </div>
      <div className="min-w-0">
        <p className="font-display text-[10px] uppercase tracking-[0.18em] text-silver-500">{label}</p>
        <p className={`truncate font-serif text-sm ${item ? 'text-silver-200' : 'italic text-silver-600'}`}>
          {item || '— vazio —'}
        </p>
        {item && (
          <p className="text-xs text-gold-400/90">
            T{tier}.{enchant}
          </p>
        )}
      </div>
    </div>
  )
}

/**
 * Card de Build (Albion Online).
 * Exibe nome, função e os 8 slots de equipamento de forma responsiva.
 */
export default function BuildCard({ build }) {
  const { name, role, slots, author } = build
  const roleStyle = ROLE_STYLES[role] ?? ROLE_STYLES.DPS

  return (
    <article
      className="metal-border relative overflow-hidden rounded-lg bg-coal-900/70 p-5 sm:p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
      data-testid="build-card"
    >
      {/* Header: nome + função */}
      <header className="flex flex-wrap items-start justify-between gap-3 border-b border-gold-600/20 pb-4">
        <div>
          <h3 className="font-display text-lg sm:text-xl font-black uppercase tracking-wide text-silver-200">
            {name}
          </h3>
          {author && (
            <p className="mt-1 font-serif text-xs italic text-silver-500">por {author}</p>
          )}
        </div>
        <span
          className={`rounded border px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.2em] ${roleStyle.badge}`}
        >
          {role}
        </span>
      </header>

      {/* Grade de slots: 1 col mobile, 2 col sm */}
      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2" data-testid="build-slots">
        {BUILD_SLOTS.map((slot) => (
          <SlotTile key={slot} label={slot} slot={slots?.[slot]} />
        ))}
      </div>

      {/* Footer info */}
      <footer className="mt-4 pt-3 text-right">
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold-600">
          Broken Crown · Builds
        </span>
      </footer>
    </article>
  )
}

function EquipIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 text-silver-600" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M12 3a7 7 0 0 0-7 7c0 2.4 1.2 4 3 5.2V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1.8c1.8-1.2 3-2.8 3-5.2a7 7 0 0 0-7-7Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 3v2" strokeLinecap="round" />
    </svg>
  )
}
