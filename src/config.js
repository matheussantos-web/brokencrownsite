export const DISCORD_URL = 'https://discord.gg/SEU-CONVITE'

export const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#guilda', label: 'A Guilda' },
  { href: '#conteudos', label: 'Conteúdos' },
  { href: '#recrutamento', label: 'Recrutamento' },
  { href: '#leis', label: 'Leis do Reino' },
  { href: '#discord', label: 'Discord' },
]

// ---------------------------------------------------------------------
// Albion Online
// ---------------------------------------------------------------------
// ID público da guilda Broken Crown (ex.: GUID-1234...). Substitua pelo
// ID correto apurado via /api/gameinfo/search?q=Broken Crown.
export const GUILD_ID = 'SEU-GUILD-ID'

// API pública com CORS habilitado (Albion Online Data Project)
export const ALBION_API_BASE = 'https://gameinfo.albiononline.com/api/gameinfo'

// Status de região Europe (fallback sempre seguro)
export const ALBION_STATUS_BASE = 'https://www.albion-online-data.com/api/v2/stats/players'

// ---------------------------------------------------------------------
// Discord OAuth2 (Área de Membros)
// ---------------------------------------------------------------------
// Fluxo: full-stack com backend. No draft, o client_secret NUNCA fica no
// front-end — ele mora no backend (guildforge-bot) que troca o
// authorization_code pelo token. O front-end só guarda o client_id
// (público) e aponta para os endpoints do backend.
//
// Com o guildforge-bot como backend, o fluxo fica:
//   1. Login → window.location = DISCORD_AUTH_URL
//   2. Discord redireciona p/ BACKEND_CALLBACK?code=...
//   3. Backend troca code+secret→token (server-side)
//   4. Backend emite cookie/sessão e redireciona p/ {SITE}/#/membros
//   5. Front-end chama GET /auth/me (same-origin poderia ser, mas no
//   GH Pages é cross-origin) para buscar o usuário.
export const DISCORD_AUTH = {
  clientId: 'SEU-DISCORD-CLIENT-ID',

  // Autorização OAuth2 padrão do Discord (browser redireciona aqui)
  authorizeUrl: 'https://discord.com/api/oauth2/authorize',

  // Escopos mínimos para identificar o membro
  scopes: ['identify', 'guilds'],

  // ---- Endpoints do backend (PLACEHOLDER — preencher ao conectar) ----
  // URL para iniciar o login (back-end inicia o fluxo OAuth2)
  loginUrl: 'https://api.brokencrown.gg/api/auth/discord/login',
  // URL de troca de code→token (chamada pelo backend, não pelo browser)
  logoutUrl: 'https://api.brokencrown.gg/api/auth/discord/logout',
  // Retorna o usuário autenticado (back-end consulta a sessão)
  meUrl: 'https://api.brokencrown.gg/api/auth/me',
}

// Redirecionamento de callback: após o login, volta para a área de membros.
export const MEMBERS_URL = '#/membros'

// Habilita o "mock de sessão" durante o desenvolvimento, sem backend.
// Coloque `true` para testar a Área de Membros antes de conectar o bot.
export const USE_AUTH_MOCK = true
