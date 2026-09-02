import { navigate } from '../lib/router'

/**
 * Link que navega por hash mantendo acessibilidade básica.
 * Ex.: <HashLink to="/membros">Área de Membros</HashLink>
 */
export default function HashLink({ to, children, className, onClick, ...rest }) {
  const handle = (e) => {
    e.preventDefault()
    onClick?.(e)
    navigate(to)
  }
  return (
    <a href={to.startsWith('#/') ? to : `#${to}`} className={className} onClick={handle} {...rest}>
      {children}
    </a>
  )
}
