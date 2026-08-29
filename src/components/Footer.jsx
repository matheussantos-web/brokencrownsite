import BrokenCrownEmblem from './BrokenCrownEmblem'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#guilda', label: 'A Guilda' },
  { href: '#conteudos', label: 'Conteúdos' },
  { href: '#recrutamento', label: 'Recrutamento' },
  { href: '#leis', label: 'Leis do Reino' },
  { href: '#discord', label: 'Discord' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-600/15 bg-coal-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-gold-600/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col items-center text-center">
          <BrokenCrownEmblem className="h-16 w-16 mb-5" id="foot" />
          <h3 className="font-display text-3xl sm:text-4xl font-black leading-none">
            <span className="block tracking-[0.2em] silver-forged">BROKEN</span>
            <span className="block mt-1 tracking-[0.2em] gold-forged">CROWN</span>
          </h3>
          <p className="mt-4 font-display text-xs sm:text-sm tracking-[0.35em] uppercase text-silver-400">
            The Crown Fell. We Rose.
          </p>
        </div>

        {/* Ornament */}
        <div className="mt-10 flex items-center justify-center gap-3" aria-hidden="true">
          <span className="h-px w-24 bg-gradient-to-r from-transparent to-gold-600/40" />
          <svg viewBox="0 0 40 12" className="h-4 w-10" fill="#d4af37">
            <path d="M20 0 L22 4 L27 3 L24 8 L28 12 L23 10 L20 13 L17 10 L12 12 L16 8 L13 3 L18 4 Z" />
          </svg>
          <span className="h-px w-24 bg-gradient-to-l from-transparent to-gold-600/40" />
        </div>

        <nav className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-display text-[11px] uppercase tracking-[0.25em] text-silver-500 transition-colors hover:text-gold-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-14 border-t border-white/5 pt-8 text-center">
          <p className="font-display text-sm sm:text-base font-bold uppercase tracking-[0.3em] text-gold-400">
            Sem Rei. Sem Mestre. Sem Correntes.
          </p>
          <p className="mt-4 text-xs text-silver-600">
            © {new Date().getFullYear()} BROKEN CROWN — Guilda de Albion Online.
          </p>
          <p className="mt-1 text-xs text-silver-700">
            Não afiliado à SAND BOX Interactive GmbH. Albion Online é marca de seus respectivos donos.
          </p>
        </div>
      </div>
    </footer>
  )
}
