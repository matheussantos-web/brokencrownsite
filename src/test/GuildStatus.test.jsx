import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import GuildStatus from '../components/GuildStatus'

vi.mock('../lib/albion', () => ({
  getServerStatus: vi.fn(),
}))

import { getServerStatus } from '../lib/albion'

describe('GuildStatus', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('exibe estado de Carregando enquanto busca o status', () => {
    getServerStatus.mockReturnValue(new Promise(() => {}))
    render(<GuildStatus />)
    expect(screen.getByText(/Consultando reino/i)).toBeInTheDocument()
  })

  it('exibe estado de Erro amigável quando a API falha', async () => {
    getServerStatus.mockRejectedValue(new Error('boom'))
    render(<GuildStatus />)
    expect(await screen.findByText(/Servidor indisponível no momento/i)).toBeInTheDocument()
  })

  it('renderiza a contagem de jogadores online quando resolve', async () => {
    getServerStatus.mockResolvedValue({ online: 4250 })
    render(<GuildStatus />)
    expect(await screen.findByText('4.250')).toBeInTheDocument()
    expect(screen.getByText(/Jogadores online agora/i)).toBeInTheDocument()
  })
})
