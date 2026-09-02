import useApi from '../hooks/useApi'
import { getServerStatus } from '../lib/albion'
import { LoadingState, ErrorState } from './AsyncState'

/**
 * Exibe o número de jogadores online no servidor (Europe) em tempo real.
 * Resiliência: se a API falhar, mostra estado de Erro discreto; nunca
 * quebra a renderização da seção.
 */
export default function GuildStatus() {
  const { data, error, loading, refetch } = useApi(getServerStatus)

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-2 text-sm text-silver-400">
        <LoadingState label="Consultando reino…" />
      </div>
    )
  }

  if (error || !data || data.online == null) {
    return <ErrorState message="Servidor indisponível no momento." onRetry={refetch} />
  }

  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="font-display text-4xl font-black text-gold-300 sm:text-5xl">
        {data.online.toLocaleString('pt-BR')}
      </p>
      <p className="font-display text-[11px] uppercase tracking-[0.35em] text-silver-500">
        Jogadores online agora
      </p>
    </div>
  )
}
