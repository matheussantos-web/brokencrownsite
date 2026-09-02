import '@testing-library/jest-dom/vitest'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Limpa o DOM entre testes (Testing Library)
afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})

// jsdom não implementa localStorage por padrão em todos os ambientes.
// O albion.js usa localStorage de forma best-effort — garantimos o stub
// para os testes dos componentes de dados não lançarem.
if (!globalThis.localStorage) {
  const store = new Map()
  globalThis.localStorage = {
    getItem: (k) => (store.has(k) ? store.get(k) : null),
    setItem: (k, v) => store.set(k, String(v)),
    removeItem: (k) => store.delete(k),
    clear: () => store.clear(),
  }
}

// `matchMedia` não existe em jsdom; alguns componentes/matchers o usam.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  })
}
