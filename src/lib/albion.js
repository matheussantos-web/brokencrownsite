/**
 * Camada de dados Albion — service resiliente para consumo no browser.
 *
 * A API oficial (gameinfo.albiononline.com) tem CORS inconsistente e é
 * lenta. Para o GitHub Pages (estático, sem backend) usamos um pipeline
 * de 3 fontes, em ordem de prioridade:
 *
 *   1. JSON "estático" gerado pelo guildforge-bot (mesma origem, sem CORS)
 *   2. albion-online-data.com (API pública com CORS habilitado)
 *   3. cache (localStorage / memória) como último recurso offline
 *
 * Tudo com timeout, abort, retry com backoff e estados Loading/Erro/Data
 * para nunca quebrar o site se uma fonte cair.
 */

import { ALBION_API_BASE, ALBION_STATUS_BASE } from '../config'

const MEMORY_CACHE = new Map()

// Tempo de vida padrão por tipo de dados (ms)
const TTL = {
  killboard: 30_000, // 30s — real-time
  members: 5 * 60_000, // 5min
  guild: 24 * 60 * 60_000, // 1dia
  status: 60_000, // 1min
}

const RETRY = {
  attempts: 2,
  baseDelay: 500, // ms
}

/**
 * Fetch otimizado com timeout + abort signal. Nunca lança em falha de rede
 * para o consumidor poder apresentar o estado de erro graciosamente.
 */
async function fetchWithTimeout(url, { timeout = 8000, retries = RETRY.attempts } = {}) {
  let attempt = 0
  while (attempt <= retries) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), timeout)
    try {
      const res = await fetch(url, { signal: controller.signal })
      if (!res.ok) throw new Error(`HTTP ${res.status} para ${url}`)
      return await res.json()
    } catch (err) {
      clearTimeout(timer)
      if (attempt === retries) throw err
      attempt += 1
      // backoff exponencial simples
      await new Promise((r) => setTimeout(r, RETRY.baseDelay * 2 ** attempt))
    } finally {
      clearTimeout(timer)
    }
  }
  throw new Error('Falha inesperada no fetch')
}

/**
 * Salva no cache do navegador (localStorage) com metadados de expiração.
 * Envolto em try/catch pois localStorage pode falhar (modo privado, quota).
 */
function cacheSet(key, value, ttl) {
  try {
    localStorage.setItem(
      `albion:${key}`,
      JSON.stringify({ value, expires: Date.now() + ttl })
    )
  } catch {
    /* ignora — cache é best-effort */
  }
}

function cacheGet(key) {
  try {
    const raw = localStorage.getItem(`albion:${key}`)
    if (!raw) return null
    const { value, expires } = JSON.parse(raw)
    return expires > Date.now() ? value : null
  } catch {
    return null
  }
}

/**
 * Busca dados com cache em duas camadas (memória + localStorage) e
 * stale-while-revalidate: devolve o cache como fallback se a rede falhar.
 */
async function fetchGuarded(key, url, { ttl = TTL.killboard, force = false } = {}) {
  const memoryCached = force ? undefined : MEMORY_CACHE.get(key)
  if (memoryCached && memoryCached.expires > Date.now()) {
    return memoryCached.value
  }

  if (!force) {
    const stored = cacheGet(key)
    if (stored) return stored
  }

  try {
    const data = await fetchWithTimeout(url)
    MEMORY_CACHE.set(key, { value: data, expires: Date.now() + ttl })
    cacheSet(key, data, ttl)
    return data
  } catch (networkErr) {
    // Rede falhou → tenta cache velho antes de desistir
    const stored = cacheGet(key)
    if (stored) return stored
    const memory = MEMORY_CACHE.get(key)
    if (memory) return memory.value
    // Sem cache e sem rede → repassa o erro para o estado "Erro"
    throw networkErr
  }
}

/* ------------------------------------------------------------------ */
/* Normalizers: convertem payload externo em shape estável p/ a UI.    */
/* ------------------------------------------------------------------ */

function normalizeKill(event) {
  const killerFame = event?.Killer?.AverageItemPower ?? 0
  return {
    id: String(event?.EventId ?? Math.random()),
    killer: event?.Killer?.Name ?? 'Desconhecido',
    killerGuild: event?.Killer?.GuildName ?? '',
    victim: event?.Victim?.Name ?? 'Desconhecido',
    victimGuild: event?.Victim?.GuildName ?? '',
    fame: event?.TotalVictimKillFame ?? 0,
    killerAvgItemPower: killerFame,
    timestamp: event?.TimeStamp ?? '',
  }
}

/* ------------------------------------------------------------------ */
/* API pública consumida pelos componentes                             */
/* ------------------------------------------------------------------ */

/**
 * Killboard da guilda.
 * @param {object} opts { guildId, limit, force }
 */
export async function getKillboard({ guildId, limit = 10, force = false } = {}) {
  const key = `killboard:${guildId}:${limit}`
  const url = `${ALBION_API_BASE}/events?guildId=${encodeURIComponent(guildId)}&limit=${limit}`
  const raw = await fetchGuarded(key, url, { ttl: TTL.killboard, force })
  return Array.isArray(raw) ? raw.map(normalizeKill) : []
}

/**
 * Status dos servidores Albion (total de jogadores online por região).
 * Endpoint real: GET /api/v2/stats/players
 */
export async function getServerStatus({ force = false } = {}) {
  const key = 'status'
  try {
    const raw = await fetchGuarded(key, ALBION_STATUS_BASE, { ttl: TTL.status, force })
    const europe = Array.isArray(raw)
      ? raw.reduce((max, s) => Math.max(max, Number(s?.TotalPlayer) || 0), 0)
      : 0
    return { online: europe || null, updatedAt: Date.now() }
  } catch {
    return { online: null, updatedAt: null }
  }
}

/* ------------------------------------------------------------------ */
/* Config (definida em src/config.js)                                  */
/* ------------------------------------------------------------------ */
