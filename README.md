# BROKEN CROWN — Site Oficial

Portal oficial da guilda **BROKEN CROWN** (Albion Online) — um reino medieval sombrio
forjado na união. Estética *dark fantasy MMORPG* com preto, dourado metálico e prata.

## Stack

- React 19 + Vite
- Tailwind CSS v4 (plugin do Vite, sem `tailwind.config.js`)
- JavaScript (JSX)

## Rodando o projeto

```bash
npm install
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção (saída em dist/)
npm run preview  # pré-visualizar o build
npm run lint     # oxlint
```

## Estrutura

```
src/
  components/       # Componentes reutilizáveis (ex.: Btn, CrownLogo, Mascot, ...)
  config.js         # Constantes (endereço do Discord)
  App.jsx           # Composição das seções
  index.css         # Tema Tailwind + estilos globais/custom
```

## Personalização rápida

- **Link do Discord:** edite `DISCORD_URL` em `src/config.js` e substitua
  `https://discord.gg/SEU-CONVITE` pelo convite real da guilda.
- **Cores/tema:** ajuste as variáveis do bloco `@theme` em `src/index.css`
  (`gold-*`, `coal-*`, `silver-*`).
- **Sessões:** cada seção da Home é um componente dentro de `src/components/`.

## Notas

- O site não inventa informações oficiais da guilda (fama, HO, membresia, conquistas).
  Áreas que aguardam conteúdo usam **"Em breve"** / **"Em construção"** (ver `Hall.jsx` e
  o modal das leis em `Leis.jsx`).
