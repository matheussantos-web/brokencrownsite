import Btn from './Btn'
import Particles from './Particles'
import SmokeLayer from './SmokeLayer'
import { DISCORD_URL } from '../config'

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen flex-col overflow-hidden">
      {/* ---- Background: official banner (ruined kingdom) ---- */}
      <div className="absolute inset-0 -z-20">
        <img
          src="images/banner.png"
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        {/* Opacity grade — manter fundo escuro e suave */}
        <div className="absolute inset-0 bg-coal-950/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(7,7,7,0.35)_55%,#070707_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-coal-950/80 via-transparent to-coal-950" />
      </div>

      {/* ---- Foreground atmosphere ---- */}
      <SmokeLayer />
      <Particles count={45} />

      {/* ---- Content ---- */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-5 pt-28 pb-16 text-center sm:px-8">

        {/* <Centered lockup> */}
        <p
          className="mb-3 font-display text-[10px] sm:text-xs uppercase tracking-[0.5em] text-silver-400 animate-rise"
          style={{ animationDelay: '0.1s' }}
        >
          Guilda de Albion Online
        </p>

        <h1
          className="font-display font-black leading-none animate-rise"
          style={{ animationDelay: '0.2s' }}
        >
          <span className="block text-6xl sm:text-8xl lg:text-[9.5rem] tracking-tight gold-forged">
            BROKEN
          </span>
          <span className="block text-6xl sm:text-8xl lg:text-[8.5rem] tracking-[0.06em] silver-forged">
            CROWN
          </span>
        </h1>

        <p
          className="mt-6 font-display text-sm sm:text-base tracking-[0.35em] uppercase text-gold-300 animate-rise"
          style={{ animationDelay: '0.35s' }}
        >
          The Crown Fell. We Rose.
        </p>
        <div className="my-5 h-px w-24 bg-gradient-to-r from-transparent via-gold-500/70 to-transparent animate-rise" style={{ animationDelay: '0.4s' }} />

        {/* ---- Mascot protagonist ---- */}
        <div className="relative my-4 flex w-full justify-center animate-rise" style={{ animationDelay: '0.5s' }}>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[420px] w-[320px] rounded-full bg-gold-500/10 blur-3xl" />
          </div>
          <img
            src="images/mascote.png"
            alt="Guerreiro-mascarado da Broken Crown usando a coroa quebrada"
            width="1151"
            height="1367"
            loading="lazy"
            decoding="async"
            className="relative z-10 h-[45vh] max-h-[520px] min-h-[260px] w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)] animate-float"
          />
        </div>

        <p className="max-w-xl font-serif text-lg sm:text-xl italic text-silver-300/90 animate-rise" style={{ animationDelay: '0.6s' }}>
          Uma guilda forjada na união, onde novatos e veteranos evoluem juntos.
        </p>

        <div
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row animate-rise"
          style={{ animationDelay: '0.7s' }}
        >
          <Btn href={DISCORD_URL} target="_blank" rel="noopener noreferrer" variant="gold" size="lg" className="w-full sm:w-auto">
            Entrar no Discord
          </Btn>
          <Btn href="#guilda" variant="outline" size="lg" className="w-full sm:w-auto">
            Conhecer a Guilda
          </Btn>
        </div>
      </div>

      {/* ---- Scroll hint ---- */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex">
        <span className="font-display text-[10px] tracking-[0.4em] uppercase text-silver-500">Desça</span>
        <span className="h-8 w-px animate-pulse bg-gold-500/60" />
      </div>
    </section>
  )
}
