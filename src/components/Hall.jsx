import BrokenCrownEmblem from './BrokenCrownEmblem'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PLACEHOLDERS = [
  'Primeiros Membros',
  'Primeiras Conquistas',
  'Grandes Batalhas',
  'Eventos',
  'Prints',
  'Momentos Históricos',
]

export default function Hall() {
  return (
    <section id="hall" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-600/5 blur-3xl" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Crônicas" title="Hall da Coroa" />

        <Reveal delay={100}>
          <p className="mx-auto mt-6 max-w-2xl text-center font-serif text-lg italic text-silver-400">
            Todo reino possui uma história.
            <br />
            Aqui serão registrados os momentos que construíram a Broken Crown.
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div className="relative mt-14 overflow-hidden rounded-lg metal-border">
            {/* Construction theme */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />
            </div>

            {/* Diagonal scan lines for "under construction" */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{ backgroundImage: 'repeating-linear-gradient(45deg,#d4af37 0px,#d4af37 2px,transparent 2px,transparent 14px)' }}
            />

            <div className="relative p-10 sm:p-14">
              {/* Grid of placeholders */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {PLACEHOLDERS.map((ph) => (
                  <div
                    key={ph}
                    className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-gold-600/30 bg-coal-800/40 p-3 text-center transition-colors hover:border-gold-500/50"
                  >
                    <span className="font-display text-xs sm:text-sm uppercase tracking-[0.15em] text-silver-500">
                      {ph}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <BrokenCrownEmblem className="h-10 w-10 opacity-60 animate-flicker" id="hall" />
                <p className="font-display text-sm uppercase tracking-[0.4em] text-gold-400">
                  Em Construção
                </p>
                <p className="font-serif italic text-silver-500">
                  A história deste reino está sendo escrita.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
