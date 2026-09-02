import { useState } from 'react'
import useApi from '../hooks/useApi'
import { getKillboard } from '../lib/albion'
import { GUILD_ID } from '../config'
import { LoadingState, ErrorState } from './AsyncState'

/**
 * Killboard da guilda — lista as mortes PvP mais recentes.
 *
 * Persistência em "cache": se a guilda ainda não tiver ID configurado,
 * exibe um diferido amigável em vez de quebrar a seção.
 */
export default function Killboard() {
  const [limit] = useState(8)
  const guildReady = Boolean(GUILD_ID && GUILD_ID !== 'SEU-GUILD-ID')

  const fetchKills = () => getKillboard({ guildId: GUILD_ID, limit })
  const { data, error, loading, refetch } = useApi(fetchKills, {
    enabled: guildReady,
    dependencies: [GUILD_ID, limit],
  })

  if (!guildReady) {
    return (
      <div className="py-8 text-center font-serif text-sm italic text-silver-500">
        O Killboard estará visível assim que o ID da guilda for configurado.
      </div>
    )
  }

  if (loading) {
    return <LoadingState label="Consultando o campo de batalha…" />
  }

  if (error) {
    return <ErrorState message="O Killboard do reino está inacessível no momento." onRetry={refetch} />
  }

  const kills = data ?? []
  if (kills.length === 0) {
    return (
      <div className="py-8 text-center font-serif text-sm italic text-silver-500">
        Nenhuma batalha registrada ainda. A coroa ainda não caiu hoje.
      </div>
    )
  }

  return (
    <div>
      <ul className="space-y-2" data-testid="killboard-list">
        {kills.map((kill) => (
          <li
            key={kill.id}
            className="flex items-center justify-between gap-3 rounded-md border border-gold-600/20 bg-coal-800/50 px-4 py-3"
          >
            <div className="min-w-0">
              <p className="truncate font-display text-sm text-silver-200">
                <span className="text-gold-300">{kill.killer}</span>
                <span className="mx-2 text-silver-600">derrotou</span>
                <span>{kill.victim}</span>
              </p>
              <p className="truncate text-xs text-silver-500">
                {kill.fame.toLocaleString('pt-BR')} fama · {kill.killerAvgItemPower.toFixed(0)} IP
              </p>
            </div>
            <span className="shrink-0 rounded bg-gold-600/15 px-2 py-0.5 font-display text-[10px] uppercase tracking-widest text-gold-300">
              PvP
            </span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={refetch}
        className="mt-4 font-display text-xs uppercase tracking-[0.25em] text-gold-300 underline-offset-4 hover:underline"
      >
        Atualizar conquistas
      </button>
    </div>
  )
}
