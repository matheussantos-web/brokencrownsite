import Btn from './Btn'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { DISCORD_URL } from '../config'

const POINTS = [
  'Sem Requisitos de Fama',
  'Novatos Bem-Vindos',
  'Veteranos Bem-Vindos',
  'Conteúdos Diversos',
  'Comunidade Ativa',
]

export default function Recrutamento() {
  return (
    <section id="recrutamento" className="relative overflow-hidden bg-coal-900/50 py-24 sm:py-32">
      {/* Dramatic red-ish glow to signify rebuilding / blood */}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-gold-600/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-gold-700/5 blur-3xl" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading kicker="Recrutamento" title="A Coroa Caiu." />

        <Reveal>
          <p className="mt-2 text-center font-display text-4xl sm:text-6xl font-black gold-gradient-text leading-tight" role="text">
            NÓS NOS LEVANTAMOS.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center font-serif text-lg italic text-silver-300/90 sm:text-xl">
            <p>A Broken Crown está apenas começando.</p>
            <p>
              Estamos construindo nosso reino do zero e procuramos jogadores que queiram fazer
              parte dessa história.
            </p>
            <p>
              Não importa se você está começando agora ou se já conhece Albion de ponta a ponta.
            </p>
            <p>
              Se você quer jogar, evoluir e construir uma comunidade forte, existe um lugar para
              você aqui.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POINTS.map((pt) => (
              <div
                key={pt}
                className="flex items-center gap-3 rounded-md border border-gold-600/25 bg-coal-800/50 px-5 py-4 text-left transition-colors hover:border-gold-500/50"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500 text-gold-400">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-display text-sm uppercase tracking-[0.15em] text-silver-200">
                  {pt}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-12 flex justify-center">
            <Btn href={DISCORD_URL} target="_blank" rel="noopener noreferrer" variant="gold" size="lg" icon={<CrownMark />}>
              Entrar para a Broken Crown
            </Btn>
          </div>
          <p className="mt-4 text-center font-serif text-sm italic text-silver-500">
            Você será direcionado para o nosso Discord.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function CrownMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18L3 9L7 13L9 6L12 10L15 6L17 13L21 9L21 18Z" fill="currentColor" opacity="0.2" />
      <path d="M15 15l3-3m3-3l0-3" stroke="currentColor" opacity="0.7" />
      <circle cx="21" cy="8" r="1" fill="currentColor" />
    </svg>
  )
}
