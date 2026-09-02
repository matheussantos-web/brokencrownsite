import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BuildCard from '../components/builds/BuildCard'
import { createBuild } from '../lib/builds'

describe('BuildCard', () => {
  it('renderiza o nome, a função e os 8 slots de equipamento', () => {
    const build = createBuild({
      id: 'teste-1',
      name: 'Machado do Reino',
      role: 'DPS',
      slots: {
        Arma: { item: 'Greataxe', tier: 8, enchant: 3 },
      },
    })

    render(<BuildCard build={build} />)

    expect(screen.getByText('Machado do Reino')).toBeInTheDocument()
    expect(screen.getByText('DPS')).toBeInTheDocument()
    // Slots esperados visíveis
    const slots = screen.getByTestId('build-slots')
    expect(slots).toBeInTheDocument()
    expect(screen.getByText('Arma')).toBeInTheDocument()
    expect(screen.getByText('Off-hand')).toBeInTheDocument()
    expect(screen.getByText('Elmo')).toBeInTheDocument()
    expect(screen.getByText('Peito')).toBeInTheDocument()
    expect(screen.getByText('Bota')).toBeInTheDocument()
    expect(screen.getByText('Capa')).toBeInTheDocument()
    expect(screen.getByText('Comida')).toBeInTheDocument()
    expect(screen.getByText('Poção')).toBeInTheDocument()
    // Item preenchido aparece com tier
    expect(screen.getByText('Greataxe')).toBeInTheDocument()
    expect(screen.getByText('T8.3')).toBeInTheDocument()
  })

  it('não quebra com slots vazios (build incompleta)', () => {
    const empty = createBuild({ id: 'vazia', name: 'Rascunho', role: 'Suporte' })
    render(<BuildCard build={empty} />)
    expect(screen.getByText('Rascunho')).toBeInTheDocument()
    // slots vazios mostram placeholder sem lançar erro
    expect(screen.getAllByText(/— vazio —/).length).toBeGreaterThanOrEqual(1)
  })
})
