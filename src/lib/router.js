import { useEffect, useState } from 'react'

/**
 * Mini hash-router para GitHub Pages.
 *
 * Convenção:
 *  - Hash que começa com "#/"  → rota da aplicação (ex.: "#/membros")
 *  - Hash sem "/" (ex: "#guilda") → âncora normal da página (não interfere)
 */

export function navigate(to) {
  window.location.hash = to
}

export function isRouteHash() {
  return window.location.hash.startsWith('#/')
}

export function currentRoute() {
  if (!isRouteHash()) return null
  return window.location.hash.slice(2) || '/'
}

export default function useRouter() {
  const [route, setRoute] = useState(currentRoute())

  useEffect(() => {
    const onHashChange = () => setRoute(currentRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}
