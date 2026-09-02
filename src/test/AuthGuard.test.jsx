import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import AuthGuard from '../components/AuthGuard'

const authMock = vi.hoisted(() => vi.fn())

vi.mock('../hooks/useAuth', () => ({
  default: () => authMock(),
}))

describe('AuthGuard', () => {
  beforeEach(() => {
    authMock.mockReset()
  })

  it('bloqueia visitantes: mostra o gate de login do Discord', () => {
    authMock.mockReturnValue({
      isAuthenticated: false,
      loading: false,
      login: vi.fn(),
      logout: vi.fn(),
      user: null,
    })

    render(
      <AuthGuard>
        <p>Conteúdo privado</p>
      </AuthGuard>
    )

    expect(screen.getByText('Área de Membros')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /login com discord/i })).toBeInTheDocument()
    expect(screen.queryByText('Conteúdo privado')).not.toBeInTheDocument()
  })

  it('libera o conteúdo para membros autenticados', () => {
    authMock.mockReturnValue({
      isAuthenticated: true,
      loading: false,
      login: vi.fn(),
      logout: vi.fn(),
      user: { global_name: 'Guerreiro' },
    })

    render(
      <AuthGuard>
        <p>Conteúdo privado</p>
      </AuthGuard>
    )

    expect(screen.getByText('Conteúdo privado')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /login com discord/i })).not.toBeInTheDocument()
  })
})
