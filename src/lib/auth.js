/**
 * Serviço de autenticação Discord (front-end).
 *
 * Estratégia (draft): o front-end NÃO guarda segredos. Ele orquestra o
 * fluxo OAuth apontando para endpoints do backend (guildforge-bot):
 *
 *   login()   → redireciona o browser para o backend, que inicia o
 *               OAuth2 com o Discord (guarda o client_secret)
 *   me()      → busca o usuário da sessão no backend
 *   logout()  → encerra a sessão no backend
 *
 * Um "mock de sessão" (USE_AUTH_MOCK) permite desenvolver a Área de
 * Membros sem backend. Desligue em src/config.js ao conectar o bot.
 *
 * Padrão observer: componentes que consomem o estado chamam `subscribe()`
 * para re-renderizar quando a sessão muda (login/logout).
 */

import { DISCORD_AUTH, USE_AUTH_MOCK } from '../config'

const SESSION_KEY = 'bc:session'

const _listeners = new Set()
let _user = null

function emit() {
  _listeners.forEach((l) => l(_user))
}

export function subscribe(fn) {
  _listeners.add(fn)
  return () => _listeners.delete(fn)
}

/** Lê a sessão persistida (uma vez, ao iniciar). */
function hydrate() {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    if (raw) _user = JSON.parse(raw)
  } catch {
    _user = null
  }
}
hydrate()

/** Retorna o usuário autenticado atual (ou null). */
export function getSession() {
  return _user
}

/** Estado de autenticação (bool). */
export function isAuthenticated() {
  return Boolean(_user)
}

function persist(user) {
  _user = user
  try {
    if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user))
    else localStorage.removeItem(SESSION_KEY)
  } catch {
    /* best-effort */
  }
  emit()
}

/**
 * Inicia o login com o Discord.
 * No mock, simula uma sessão; no real, redireciona para o backend OAuth.
 */
export async function login() {
  if (USE_AUTH_MOCK) {
    // Simula uma sessão de membro para desenvolvimento.
    persist({
      id: 'mock-user-123',
      username: 'GuerreiroTeste',
      discriminator: '0001',
      global_name: 'Guerreiro de Teste',
      avatar: null,
      is_member: true,
    })
    return getSession()
  }

  // Fluxo real: redireciona para o backend que inicia o OAuth2 (secret fica no servidor)
  window.location.assign(DISCORD_AUTH.loginUrl)
  // Não retorna — o browser sai da página
  return null
}

/** Encerra a sessão. */
export async function logout() {
  if (!USE_AUTH_MOCK) {
    try {
      await fetch(DISCORD_AUTH.logoutUrl, { credentials: 'include' })
    } catch {
      /* mesmo sem rede, limpa a sessão local */
    }
  }
  persist(null)
}

/**
 * Busca o usuário da sessão no backend.
 * Usado após o redirect OAuth para popular o estado.
 */
export async function fetchMe() {
  if (USE_AUTH_MOCK) {
    // No mock, mantém a sessão local existente (ou null) sem rede.
    return getSession()
  }
  try {
    const res = await fetch(DISCORD_AUTH.meUrl, { credentials: 'include' })
    if (!res.ok) {
      persist(null)
      return null
    }
    const me = await res.json()
    persist(me)
    return me
  } catch {
    return getSession()
  }
}
