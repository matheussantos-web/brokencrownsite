import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const ICONS = {
  pvp: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l2.2 4.5 5 .7-3.6 3.5.9 4.9-4.5-2.3-4.5 2.3.9-4.9L4.8 8.2l5-.7z" />
      <circle cx="12" cy="12" r="1.2" />
    </svg>
  ),
  pve: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v3m0 6l-2.5-2.5M12 21l4-6H8z" />
      <circle cx="12" cy="6" r="2.5" />
      <path d="M4 12l2.5 2.5M20 12l-2.5 2.5" />
    </svg>
  ),
  dg: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V9l9-6 9 6v12" />
      <path d="M9 21v-6h6v6" />
      <path d="M9 11h.01M15 11h.01" />
    </svg>
  ),
  roaming: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9S14.5 18.5 12 21c-2.5-2.5-3.5-6-3.5-9S9.5 5.5 12 3z" />
    </svg>
  ),
  hunt: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l2 4h4v4l3 2-3 2v4h-4l-2 4-2-4H6v-4L3 12l3-2V6h4z" />
    </svg>
  ),
  chest: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="9" rx="1" />
      <rect x="4" y="13" width="16" height="7" rx="1" />
      <path d="M4 13h16M12 13v4m-1.5 0h3" />
    </svg>
  ),
  gather: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3l4 4-9 9-5 1 1-5z" />
      <path d="M12 8l3 3M9 5c0-2-3-2-3 0" />
    </svg>
  ),
  events: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L6.2 7.2l4-.6z" />
      <path d="M5 19h14" />
    </svg>
  ),
  other: (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3m0 14v3M2 12h3m14 0h3M4.9 4.9l2.1 2.1m10 10l2.1 2.1M19.1 4.9L17 7m-10 10l-2.1 2.1" />
    </svg>
  ),
}

const ITEMS = [
  { key: 'pvp', icon: 'pvp', name: 'PvP', desc: 'Batalhas, roaming, confrontos e disputas pelo mundo de Albion.' },
  { key: 'pve', icon: 'pve', name: 'PvE', desc: 'Conteúdos para evoluir, farmar e jogar em grupo.' },
  { key: 'dg', icon: 'dg', name: 'DG', desc: 'Dungeons e conteúdos organizados para todos os níveis.' },
  { key: 'roaming', icon: 'roaming', name: 'Roaming', desc: 'Explorando Albion em busca de combate e oportunidades.' },
  { key: 'hunt', icon: 'hunt', name: 'Caçadas', desc: 'Saídas, emboscadas e aproveitamentos pelo mapa.' },
  { key: 'chest', icon: 'chest', name: 'Baús', desc: 'Disputa e organização por baús de território.' },
  { key: 'gather', icon: 'gather', name: 'Coleta', desc: 'Recursos e farm, sozinho ou em segurança coletiva.' },
  { key: 'events', icon: 'events', name: 'Eventos', desc: 'Ações e experiências promovidas pelo reino.' },
  { key: 'other', icon: 'other', name: 'Outros', desc: 'Tudo mais que a comunidade quiser construir.' },
]

export default function Conteudos() {
  return (
    <section id="conteudos" className="relative overflow-hidden py-24 sm:py-32 bg-coal-900/40">
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-coal-800/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="O que fazemos"
          title="Conteúdos do Reino"
        />

        <p className="mx-auto mt-6 max-w-2xl text-center font-serif text-lg italic text-silver-400">
          A Broken Crown não é focada em apenas um tipo de conteúdo. Fazemos conteúdo no geral —
          e aqui o que não falta é variedade.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <Reveal key={item.key} delay={(i % 3) * 100}>
              <div className="group relative h-full overflow-hidden rounded-md border border-silver-600/20 bg-coal-900/50 p-7 transition-all duration-500 hover:border-gold-500/50 hover:bg-coal-800/60 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_25px_rgba(212,175,55,0.1)]">
                <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold-500/0 blur-2xl transition-all duration-500 group-hover:bg-gold-500/10" />
                <div className="mb-5 flex items-center justify-center h-16 w-16 rounded-full border border-gold-600/30 bg-gradient-to-b from-coal-700 to-coal-900 text-gold-400 shadow-[inset_0_0_20px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:text-gold-300 group-hover:border-gold-400/60">
                  {ICONS[item.icon]}
                </div>
                <h3 className="font-display text-xl font-semibold tracking-wide text-gold-300 uppercase">
                  {item.name}
                </h3>
                <p className="mt-3 font-serif text-base text-silver-400/90">{item.desc}</p>
                <span className="mt-5 block h-px w-0 bg-gradient-to-r from-gold-500 to-transparent transition-all duration-500 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
