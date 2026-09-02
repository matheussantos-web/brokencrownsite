import Mascot from './Mascot'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import GuildStatus from './GuildStatus'

export default function Guilda() {
  return (
    <section id="guilda" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-coal-700/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="A Guilda"
          title="Um Reino Forjado na União"
        />

        <Reveal delay={100}>
          <div className="metal-border mx-auto mt-10 max-w-md rounded-lg bg-coal-900/60 px-6 py-5 backdrop-blur-sm">
            <GuildStatus />
          </div>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="metal-border relative rounded-lg bg-coal-900/60 p-8 sm:p-10 backdrop-blur-sm">
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_65%)]" />
              <div className="space-y-6 font-serif text-base sm:text-lg leading-relaxed text-silver-300/90">
                <p>
                  A <span className="text-gold-400 font-semibold">Broken Crown</span> nasceu com
                  um propósito simples: construir uma guilda onde todos tenham espaço para
                  evoluir.
                </p>
                <p>
                  Do novato ao veterano, acreditamos que uma guilda forte não é construída por
                  indivíduos isolados, mas por jogadores que crescem <em className="text-gold-300">juntos</em>.
                </p>
                <p>
                  Aqui não existe espaço para panelas, favoritismo ou humilhação. Existe espaço
                  para <span className="text-gold-300">aprender, ensinar, competir, se divertir</span> e
                  construir algo maior.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="h-px w-12 bg-gold-500/50" />
                <span className="font-display text-[11px] uppercase tracking-[0.35em] text-gold-500">
                  Sem rei. Sem mestre. Sem correntes.
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150} className="order-1 lg:order-2">
            <div className="relative">
              <Mascot className="mx-auto max-w-xs sm:max-w-sm lg:max-w-md" />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gold-500/5 blur-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
