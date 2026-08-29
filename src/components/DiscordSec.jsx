import Btn from './Btn'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { DISCORD_URL } from '../config'

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
      <path d="M20.3 4.4A19.6 19.6 0 0 0 15.4 3c-.2.4-.5 1-.6 1.4a18.2 18.2 0 0 0-5.4 0C9.1 4 8.8 3.4 8.6 3a19.5 19.5 0 0 0-4.9 1.5A20.3 20.3 0 0 0 .2 17.9a20 20 0 0 0 6 3c.5-.7.9-1.4 1.2-2.1-.7-.3-1.3-.6-1.9-1l.5-.4c3.6 1.7 7.6 1.7 11.1 0l.5.4c-.6.4-1.2.7-1.9 1.1.3.7.7 1.4 1.2 2.1a19.9 19.9 0 0 0 6-3A20.3 20.3 0 0 0 20.3 4.4zM8.1 15c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c0 1.1-.9 2-2 2zm7.9 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2c0 1.1-.9 2-2 2z" />
    </svg>
  )
}

export default function DiscordSec() {
  return (
    <section id="discord" className="relative overflow-hidden bg-coal-900/50 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-[#5865F2]/10 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-[#5865F2]/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading kicker="Discord" title="O Reino Continua Além de Albion" />

        <Reveal delay={120}>
          <div className="mt-10 space-y-5 text-center font-serif text-lg sm:text-xl italic text-silver-300/90">
            <p>Nosso Discord é o ponto de encontro da Broken Crown.</p>
            <p>
              É onde organizamos conteúdos, conversamos, encontramos novos membros e construímos
              nossa comunidade.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex justify-center">
            <Btn href={DISCORD_URL} target="_blank" rel="noopener noreferrer" variant="gold" size="lg" icon={<DiscordIcon />}>
              Entrar no Discord
            </Btn>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
