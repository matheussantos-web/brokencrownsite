import CrownLogo from './CrownLogo'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const PILLARS = [
  {
    title: 'Evolução',
    desc: 'Todos devem ter oportunidade de aprender e melhorar.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20h16M6 20l6-10 4 5 2-3M18 20l-2-3" />
      </svg>
    ),
  },
  {
    title: 'União',
    desc: 'A guilda cresce quando seus membros crescem juntos.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3.5" />
        <circle cx="15" cy="8" r="3.5" />
        <path d="M3 19v-1.5c0-2 2.5-3.5 6-3.5s6 1.5 6 3.5V19M15 15c3.2 0 6 1.5 6 3.5V19" />
      </svg>
    ),
  },
  {
    title: 'Respeito',
    desc: 'Novatos e veteranos merecem o mesmo respeito.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-4.5-9-9C1.5 8 4 5 7 5c2 0 3.5 1 5 2.5C13.5 6 15 5 17 5c3 0 5.5 3 4 7-2 4.5-9 9-9 9z" />
        <path d="M12 8l1.5 3 3 .5-2 2 .5 3-3-1.5-3 1.5.5-3-2-2 3-.5z" />
      </svg>
    ),
  },
]

export default function Filosofia() {
  return (
    <section id="filosofia" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-coal-800/30 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Filosofia"
          title="Nossa Coroa Não é de Ouro. É de União."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 120}>
              <div className="group relative flex h-full flex-col items-center overflow-hidden rounded-md metal-border bg-gradient-to-b from-coal-800/80 to-coal-900/80 p-10 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(212,175,55,0.12)]">
                {/* Crest badge */}
                <div className="relative mb-7">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold-600/50 bg-coal-950 text-gold-400 shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 group-hover:text-gold-300">
                    {p.icon}
                  </div>
                  <CrownLogo className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 opacity-70" />
                </div>

                <h3 className="font-display text-2xl font-bold uppercase tracking-[0.15em] text-gold-300">
                  {p.title}
                </h3>
                <span className="my-4 h-px w-16 bg-gold-600/40 transition-all duration-500 group-hover:w-24" />
                <p className="font-serif text-lg italic text-silver-300/90">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tagline band */}
        <Reveal delay={200}>
          <div className="mt-16 border-y border-gold-600/20 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent py-8 text-center">
            <p className="mx-auto max-w-3xl font-serif text-xl sm:text-2xl italic text-gold-200/90">
              &ldquo;Qualquer jogador pode entrar. O que importa é querer construir algo junto.&rdquo;
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
