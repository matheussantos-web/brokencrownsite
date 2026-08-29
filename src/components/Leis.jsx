import { useEffect, useState } from 'react'
import Btn from './Btn'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const LAWS = [
  { title: 'Sem Panelas', desc: 'Todos devem ter oportunidade de participar.' },
  { title: 'Sem Favoritismo', desc: 'A evolução coletiva vem antes de interesses individuais.' },
  { title: 'Respeito', desc: 'Erros fazem parte da evolução.' },
  { title: 'Compromisso', desc: 'Conteúdos oficiais exigem organização e responsabilidade.' },
  { title: 'Transparência', desc: 'Os recursos da guilda devem beneficiar a comunidade.' },
]

const FULL_LAWS = [
  'A Broken Crown valoriza o respeito entre todos os membros, em qualquer situação.',
  'Proibidas panelas e grupos que excluam membros do conteúdo da guilda.',
  'Sem favoritismo: todos têm as mesmas oportunidades de participar.',
  'Erros fazem parte da evolução. Aqui se corrige, se ensina, e se segue em frente.',
  'Conteúdos marcados como oficiais exigem presença, organização e responsabilidade.',
  'Os recursos obtidos pela guilda devem beneficiar a comunidade como um todo.',
  'Novatos e veteranos compartilham o mesmo lugar dentro do reino.',
  'A transparência guia todas as decisões importantes da Broken Crown.',
]

export default function Leis() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <section id="leis" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading kicker="Código" title="Leis do Reino" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {LAWS.map((law, i) => (
            <Reveal key={law.title} delay={(i % 3) * 100}>
              <div className="group flex h-full items-start gap-5 rounded-md border border-silver-600/20 bg-coal-900/50 p-6 transition-all duration-500 hover:border-gold-500/40">
                <span className="mt-0.5 font-display text-4xl font-black text-gold-600/60 transition-colors group-hover:text-gold-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide text-gold-300">
                    {law.title}
                  </h3>
                  <p className="mt-2 font-serif text-base text-silver-400/90">{law.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 flex justify-center">
            <Btn href="#" variant="outline" size="md" onClick={(e) => { e.preventDefault(); setOpen(true) }}>
              Ler Todas as Leis
            </Btn>
          </div>
        </Reveal>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-lg metal-border bg-coal-900 p-8 sm:p-10">
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold-600/40 text-gold-300 transition-colors hover:bg-gold-500/10 hover:border-gold-400"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <h3 className="pr-8 font-display text-2xl font-bold gold-gradient-text sm:text-3xl">
              Leis do Reino
            </h3>
            <div className="my-6 h-px bg-gradient-to-r from-gold-500/60 to-transparent" />

            <ol className="space-y-5">
              {FULL_LAWS.map((law, i) => (
                <li key={i} className="flex gap-4 font-serif text-base text-silver-300/90">
                  <span className="font-display text-xl font-bold text-gold-500">{i + 1}.</span>
                  <span>{law}</span>
                </li>
              ))}
            </ol>

            <p className="mt-8 font-serif italic text-silver-500">
              Versão completa das leis em breve.
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
