import AuthGuard from '../AuthGuard'
import SectionHeading from '../SectionHeading'
import BuildCard from '../builds/BuildCard'
import { SAMPLE_BUILDS } from '../../lib/builds'
import useAuth from '../../hooks/useAuth'
import { DiscordLogo } from '../LoginDiscordButton'

/**
 * Área de Membros — página protegida (exige login Discord).
 * Exibe o usuário logado e a biblioteca de builds do reino.
 */
export default function AreaMembros() {
  return (
    <AuthGuard>
      <section id="membros" className="relative min-h-screen overflow-hidden py-24 sm:py-28">
        <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-gold-700/5 blur-3xl" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <MembrosHeader />

          <div className="mt-14">
            <h3 className="mb-6 font-display text-sm uppercase tracking-[0.3em] text-silver-500">
              Builds do Reino
            </h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {SAMPLE_BUILDS.map((build) => (
                <BuildCard key={build.id} build={build} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AuthGuard>
  )
}

function MembrosHeader() {
  const { user, logout } = useAuth()
  return (
    <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
      <SectionHeading kicker="Área de Membros" title="Salão do Guerreiro" />

      <div className="flex items-center justify-center gap-4 rounded-lg border border-gold-600/25 bg-coal-900/60 px-5 py-4 backdrop-blur-sm sm:justify-start">
        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-gold-500/40 bg-coal-950">
          {user?.avatar ? (
            <img src={user.avatar} alt="" className="h-full w-full object-cover" />
          ) : (
            <DiscordLogo className="h-6 w-6 text-gold-400" />
          )}
        </div>
        <div className="min-w-0">
          <p className="truncate font-display text-sm text-silver-200">
            {user?.global_name || user?.username || 'Membro'}
          </p>
          <p className="font-serif text-xs italic text-silver-500">@ {user?.username ?? '—'}</p>
        </div>
        <button
          type="button"
          onClick={logout}
          className="ml-2 shrink-0 font-display text-[11px] uppercase tracking-[0.2em] text-silver-400 underline-offset-4 hover:text-gold-300 hover:underline"
        >
          Sair
        </button>
      </div>
    </div>
  )
}
