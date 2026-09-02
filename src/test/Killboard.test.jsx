import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import Killboard from '../components/Killboard'

// Mock do service layer — isolamos o componente de qualquer chamada de rede.
vi.mock('../lib/albion', () => ({
  getKillboard: vi.fn(),
}))

import { getKillboard } from '../lib/albion'

// Forçamos a guilda "configurada" para o componente buscar dados reais.
vi.mock('../config', () => ({
  GUILD_ID: 'GUID-TESTE-123',
}))

describe('Killboard', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('exibe o estado de Carregando (Loading) enquanto a API responde', () => {
    getKillboard.mockReturnValue(new Promise(() => {})) // Promise que nunca resolve
    render(<Killboard />)
    expect(screen.getByText(/Consultando o campo de batalha/i)).toBeInTheDocument()
  })

  it('exibe o estado de Erro quando a API falha, sem quebrar o site', async () => {
    getKillboard.mockRejectedValue(new Error('network down'))
    render(<Killboard />)
    expect(await screen.findByText(/Killboard do reino está inacessível/i)).toBeInTheDocument()
  })

  it('renderiza a lista de conquistas (Data) com o mock resolvido', async () => {
    getKillboard.mockResolvedValue([
      {
        id: '999',
        killer: 'Lobo_do_Reino',
        victim: 'Inimigo_01',
        fame: 12345,
        killerAvgItemPower: 1400,
      },
    ])
    render(<Killboard />)
    const list = await screen.findByTestId('killboard-list')
    expect(list).toBeInTheDocument()
    expect(screen.getByText('Lobo_do_Reino')).toBeInTheDocument()
    expect(screen.getByText(/12.345 fama/i)).toBeInTheDocument()
  })
})
