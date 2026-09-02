/**
 * Modelo de dados de Builds (Albion Online).
 *
 * Cada build tem um nome, uma função no grupo e uma lista de slots de
 * equipamento. Os valores (nome do item / tier) entram quando o membro
 * salvar a build — aqui mantemos a shape pronta para a UI.
 */

// Funções (roles) disponíveis
export const BUILD_ROLES = ['Tank', 'Healer', 'DPS', 'Suporte']

// Slots esperados em uma build — ordem de exibição no card
export const BUILD_SLOTS = [
  'Arma',
  'Off-hand',
  'Elmo',
  'Peito',
  'Bota',
  'Capa',
  'Comida',
  'Poção',
]

/**
 * Cria uma build vazia.
 * @param {Partial<Build>} overrides
 * @returns {Build}
 */
export function createBuild(overrides = {}) {
  return {
    id: overrides.id || `build-${Date.now()}`,
    name: overrides.name || 'Nova Build',
    role: overrides.role || 'DPS',
    // cada slot guarda { item, tier, enchant } — vazio por padrão
    slots: BUILD_SLOTS.reduce(
      (acc, slot) => ({
        ...acc,
        [slot]: overrides.slots?.[slot] ?? { item: '', tier: 4, enchant: 0 },
      }),
      {}
    ),
    author: overrides.author || '',
    updatedAt: overrides.updatedAt || new Date().toISOString(),
  }
}

// Exemplos ilustrativos para popular a Área de Membros no draft.
export const SAMPLE_BUILDS = [
  createBuild({
    id: 'b1',
    name: 'Mace Sagrado (Healing)',
    role: 'Healer',
    slots: {
      Arma: { item: 'Divine Staff', tier: 8, enchant: 3 },
      'Off-hand': { item: 'Censer', tier: 8, enchant: 3 },
      Elmo: { item: 'Mage Cowl', tier: 8, enchant: 3 },
      Peito: { item: 'Cleric Robe', tier: 8, enchant: 3 },
      Bota: { item: 'Scholar Sandals', tier: 8, enchant: 3 },
      Capa: { item: 'Cape of Tenacity', tier: 8, enchant: 0 },
      Comida: { item: 'Stewed Eel', tier: 4, enchant: 0 },
      Poção: { item: 'Minor Healing Potion', tier: 4, enchant: 0 },
    },
    author: 'GuerreiroTeste',
  }),
  createBuild({
    id: 'b2',
    name: 'Hammer Tank (ZvZ)',
    role: 'Tank',
    slots: {
      Arma: { item: 'Great Hammer', tier: 8, enchant: 3 },
      'Off-hand': { item: 'Lamp of Aegis', tier: 8, enchant: 3 },
      Elmo: { item: 'Guardian Helmet', tier: 8, enchant: 3 },
      Peito: { item: 'Guardian Armor', tier: 8, enchant: 3 },
      Bota: { item: 'Guardian Boots', tier: 8, enchant: 3 },
      Capa: { item: 'Cape of the Undead', tier: 8, enchant: 0 },
      Comida: { item: 'Meat Pie', tier: 8, enchant: 3 },
      Poção: { item: 'Sticky Potion', tier: 4, enchant: 0 },
    },
    author: 'MagoReal',
  }),
]
