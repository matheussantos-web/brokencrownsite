import Btn from './Btn'
import Mascot from './Mascot'
import Particles from './Particles'
import { DISCORD_URL } from '../config'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background: ruined kingdom */}
      <div className="absolute inset-0 -z-20">
        {/* Tattered banners */}
        <div className="absolute -left-6 top-24 hidden md:block h-64 w-16 opacity-60">
          <div className="h-10 w-full bg-gradient-to-b from-gold-800 to-gold-600" />
          <div className="h-full w-full bg-coal-800/80 border-x border-gold-700/40" style={{ clipPath: 'polygon(30% 0, 70% 3%, 60% 40%, 45% 35%, 65% 70%, 40% 62%, 55% 100%, 35% 70%)' }} />
        </div>
        <div className="absolute right-6 top-32 hidden md:block h-72 w-16 opacity-60 rotate-3">
          <div className="h-10 w-full bg-gradient-to-b from-gold-800 to-gold-600" />
          <div className="h-full w-full bg-coal-800/80 border-x border-gold-700/40" style={{ clipPath: 'polygon(30% 0, 70% 3%, 60% 40%, 45% 35%, 65% 70%, 40% 62%, 55% 100%, 35% 70%)' }} />
        </div>
      </div>

      {/* Rocky ruins / castle silhouette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-64 opacity-30">
        <svg viewBox="0 0 1600 300" preserveAspectRatio="none" className="h-full w-full text-coal-700">
          <path fill="currentColor" d="M0 300 L0 240 L90 200 L120 260 L200 170 L260 230 L330 140 L400 220 L470 170 L540 250 L620 160 L700 240 L760 190 L830 260 L900 180 L980 250 L1050 150 L1120 240 L1200 170 L1280 250 L1360 180 L1440 240 L1520 190 L1600 250 L1600 300 Z" />
        </svg>
      </div>

      {/* Smoke / fog drift */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute -left-1/4 top-1/3 h-96 w-96 rounded-full bg-silver-500/10 blur-3xl" style={{ animation: 'ambient 14s ease-in-out infinite' }} />
        <div className="absolute -right-1/4 top-1/2 h-120 w-120 rounded-full bg-gold-600/10 blur-3xl" style={{ animation: 'ambient 18s ease-in-out infinite' }} />
      </div>

      <Particles count={40} />

      {/* Dark vignette */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(8,8,8,0.55)_70%,#080808_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-24 pt-32 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4 lg:pt-24">
        {/* Left: text */}
        <div className="text-center lg:text-left">
          <div className="mb-6 flex items-center justify-center gap-3 lg:justify-start">
            <span className="h-px w-10 bg-gold-500/60" />
            <span className="font-display text-[11px] sm:text-xs tracking-[0.4em] uppercase text-silver-400">
              Guilda de Albion Online
            </span>
            <span className="h-px w-10 bg-gold-500/60" />
          </div>

          <h1 className="font-display font-black leading-none">
            <span className="block text-6xl sm:text-8xl lg:text-9xl tracking-tight gold-gradient-text animate-rise">
              BROKEN
            </span>
            <span className="block text-6xl sm:text-8xl lg:text-9xl tracking-[0.08em] text-silver-100 animate-rise carved-text" style={{ animationDelay: '0.15s' }}>
              CROWN
            </span>
          </h1>

          <p
            className="mt-6 font-display text-sm sm:text-base tracking-[0.3em] uppercase text-gold-400 animate-rise"
            style={{ animationDelay: '0.3s' }}
          >
            The Crown Fell. We Rose.
          </p>

          <p
            className="mx-auto mt-5 max-w-xl font-serif text-lg sm:text-xl italic text-silver-300/90 animate-rise lg:mx-0"
            style={{ animationDelay: '0.4s' }}
          >
            Uma guilda forjada na união, onde novatos e veteranos evoluem juntos.
          </p>

          <div
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start animate-rise"
            style={{ animationDelay: '0.55s' }}
          >
            <Btn href={DISCORD_URL} target="_blank" rel="noopener noreferrer" variant="gold" size="lg" className="w-full sm:w-auto">
              Entrar no Discord
            </Btn>
            <Btn href="#guilda" variant="outline" size="lg" className="w-full sm:w-auto">
              Conhecer a Guilda
            </Btn>
          </div>
        </div>

        {/* Right: mascot */}
        <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none animate-float">
          <div className="hidden sm:block absolute -z-10 inset-0 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />
          </div>
          <Mascot className="mx-auto max-w-xs sm:max-w-sm lg:max-w-md" />
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-display text-[10px] tracking-[0.4em] uppercase text-silver-500">Desça</span>
        <span className="h-8 w-px animate-pulse bg-gold-500/60" />
      </div>
    </section>
  )
}
