import { useEffect, useRef, useState } from 'react'

/**
 * Hook genérico de dados assíncronos com estados Loading/Erro/Data.
 *
 * - Aborta requisição ao desmontar (evita setState em componente morto)
 * - Expõe `refetch` para atualização manual (ex.: botão "Atualizar")
 * - `enabled=false` pula a busca (ex.: aguardar ID da guilda)
 */
export default function useApi(fetcher, { enabled = true, dependencies = [] } = {}) {
  const [data, setData] = useState(undefined)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(Boolean(enabled))
  const [tick, setTick] = useState(0)
  const mounted = useRef(true)

  // Reseta o flag de montado em cada render-efeito vivo
  useEffect(() => {
    mounted.current = true
    return () => {
      mounted.current = false
    }
  }, [])

  // Chave serializada das dependências (mudou → refetch)
  const depsKey = JSON.stringify(dependencies)

  useEffect(() => {
    if (!enabled || !fetcher) return

    let cancelled = false
    setLoading(true)
    setError(null)

    fetcher()
      .then((result) => {
        if (!cancelled && mounted.current) {
          setData(result)
          setLoading(false)
        }
      })
      .catch((err) => {
        if (!cancelled && mounted.current) {
          setError(err instanceof Error ? err : new Error('Falha ao carregar dados'))
          setLoading(false)
        }
      })

    return () => {
      cancelled = true
    }
    // `tick` aciona o refetch; `depsKey` re-aciona se as dependências mudarem
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, fetcher, tick, depsKey])

  const refetch = () => setTick((t) => t + 1)

  return { data, error, loading, refetch }
}
