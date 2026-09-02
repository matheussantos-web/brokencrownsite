import Killboard from './Killboard'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

/**
 * Seção "Campo de Batalha" — killboard da guilda em tempo real.
 * Lazy-loaded via code-splitting (não pesa no carregamento inicial).
 */
export default function CampoDeBatalha() {
  return (
    <section id="killboard" className="relative overflow-hidden bg-coal-900/40 py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-gold-700/5 blur-3xl" />

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading kicker="Campo de Batalha" title="Conquistas do Reino" />

        <Reveal delay={120}>
          <p className="mt-4 text-center font-serif text-lg italic text-silver-400">
            As glórias mais recentes forjadas pelos guerreiros da Broken Crown no campo de batalha.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="metal-border mt-10 rounded-lg bg-coal-900/60 p-6 sm:p-8 backdrop-blur-sm">
            <Killboard />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
