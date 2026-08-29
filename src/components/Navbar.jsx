import { useEffect, useState } from 'react'
import BrokenCrownEmblem from './BrokenCrownEmblem'
import { DISCORD_URL } from '../config'

const LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#guilda', label: 'A Guilda' },
  { href: '#conteudos', label: 'Conteúdos' },
  { href: '#recrutamento', label: 'Recrutamento' },
  { href: '#leis', label: 'Leis do Reino' },
  { href: '#discord', label: 'Discord' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-coal-950/85 backdrop-blur-md shadow-[0_2px_30px_rgba(0,0,0,0.7)] border-b border-gold-500/15' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <BrokenCrownEmblem className="h-10 w-10 sm:h-12 sm:w-12" id="nav" />
          <div className="leading-none">
            <span className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-silver-300">
              BROKEN
            </span>
            <span className="block font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-gold-400">
              CROWN
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative font-display text-xs tracking-[0.18em] uppercase text-silver-400 transition-colors hover:text-gold-300"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs tracking-[0.2em] uppercase border border-gold-600/50 px-5 py-2 text-gold-300 hover:bg-gold-500/10 hover:border-gold-400 transition-all"
          >
            Discord
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Abrir menu"
        >
          <span className={`block h-0.5 w-6 bg-gold-400 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gold-400 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-gold-400 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-coal-950/95 backdrop-blur-md border-b border-gold-500/15 transition-all duration-300 ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 font-display text-sm tracking-[0.2em] uppercase text-silver-300 hover:text-gold-300 border-b border-white/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
