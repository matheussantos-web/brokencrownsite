/**
 * Estados visuais reutilizáveis da camada de dados: Loading e Erro.
 * Garantem que a seção nunca "quebra muda" se a API cair — exibe
 * feedback explícito com fallback gracioso.
 */

export function LoadingState({ label = 'Carregando dados do reino…' }) {
  return (
    <div role="status" aria-live="polite" className="flex flex-col items-center gap-4 py-8 text-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold-600/40 border-t-gold-400" />
      <p className="font-display text-xs uppercase tracking-[0.3em] text-silver-500">{label}</p>
      <span className="sr-only">Carregando</span>
    </div>
  )
}

export function ErrorState({ message = 'Não foi possível carregar os dados agora.', onRetry }) {
  return (
    <div role="alert" className="flex flex-col items-center gap-4 rounded-lg border border-red-900/40 bg-red-950/20 px-6 py-8 text-center">
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 9v4m0 4h.01M10.3 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.7 3.86a2 2 0 0 0-3.4 0Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="font-serif text-sm italic text-silver-300">{message}</p>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="font-display text-xs uppercase tracking-[0.25em] text-gold-300 underline-offset-4 hover:underline"
        >
          Tentar novamente
        </button>
      )}
    </div>
  )
}
