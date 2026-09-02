import useAuth from '../hooks/useAuth'
import LoginDiscordButton, { DiscordLogo } from './LoginDiscordButton'
import Ornament from './Ornament'

/**
 * Guardião de rota protegida.
 * - loading → spinner (verificando sessão)
 * - não autenticado → card de login com o botão "Login com Discord"
 * - autenticado → renderiza os filhos (área de membros)
 */
export default function AuthGuard({ children }) {
  const { isAuthenticated, loading, login } = useAuth()

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-gold-600/40 border-t-gold-400" role="status" aria-label="Verificando sessão" />
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginGate onLogin={login} />
  }

  return children
}

/** Tela apresentada a visitantes que tentam acessar a área privada. */
function LoginGate({ onLogin }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-5 py-24 text-center">
      <Ornament className="mb-8" />
      <DiscordLogo className="h-12 w-12 text-gold-300/80" />
      <h2 className="mt-6 font-display text-3xl font-black uppercase tracking-wide gold-gradient-text">
        Área de Membros
      </h2>
      <p className="mt-4 font-serif text-lg italic text-silver-300/90">
        Esta área é reservada aos guerreiros da Broken Crown. Faça login com o Discord para
        acessar as builds e estratégias do reino.
      </p>
      <div className="mt-10">
        <LoginDiscordButton
          onLogin={onLogin}
          className="bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 px-8 py-3.5 text-coal-950 border border-gold-400/70 shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_45px_rgba(212,175,55,0.45)]"
        />
      </div>
    </div>
  )
}
