import { useEffect, useState } from 'react'
import { subscribe, getSession, login as doLogin, logout as doLogout } from '../lib/auth'

/**
 * Hook de autenticação reativo.
 * Expõe o usuário atual e ações de login/logout, além do carregamento
 * inicial da sessão.
 */
export default function useAuth() {
  // A sessão é lida de forma síncrona e persistida (localStorage);
  // sem hidratação assíncrona inicial, então `loading` começa como false.
  const [user, setUser] = useState(getSession())
  const [loading] = useState(false)

  useEffect(() => {
    // Reage a mudanças de sessão (login/logout em outros componentes)
    return subscribe(setUser)
  }, [])

  const login = async () => {
    await doLogin()
    setUser(getSession())
  }

  const logout = async () => {
    await doLogout()
    setUser(getSession())
  }

  return {
    user,
    isAuthenticated: Boolean(user),
    loading,
    login,
    logout,
  }
}
