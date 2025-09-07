# PagueSimples Design System

Design System oficial da PagueSimples - Componentes, tokens e padrões como lib consumível.

## 🚀 Visão Geral

O PagueSimples Design System é uma coleção completa de componentes reutilizáveis, tokens de design e diretrizes que garantem consistência visual em todos os produtos da PagueSimples. Estruturado como monorepo com pacotes independentes para máxima flexibilidade.

### 🛠️ Stack Tecnológica

- **Turborepo** para monorepo management
- **TypeScript 5+** para type safety
- **Tailwind CSS** para styling
- **Radix UI** para componentes acessíveis
- **shadcn/ui** como base dos componentes
- **Ubuntu Font** como tipografia oficial
- **Class Variance Authority (CVA)** para variants
- **Bun** como gerenciador de pacotes
- **Storybook 9** para documentação interativa
- **tsup** para build dos pacotes

## 🏗️ Arquitetura do Monorepo

```
@paguesimples/design-system/
├── packages/
│   ├── tokens/                    # Design tokens
│   │   ├── src/
│   │   │   └── index.ts          # Cores, espaçamentos, tipografia
│   │   ├── package.json
│   │   └── tsup.config.ts
│   │
│   └── ui/                        # Componentes React
│       ├── src/
│       │   ├── components/
│       │   │   ├── button/
│       │   │   ├── card/
│       │   │   ├── badge/
│       │   │   ├── input/
│       │   │   ├── typography/
│       │   │   └── index.ts
│       │   ├── utils/
│       │   │   └── cn.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsup.config.ts
│
├── apps/
│   └── storybook/                 # Documentação interativa
│       ├── .storybook/
│       ├── stories/
│       │   └── Button/           # Stories organizadas
│       │       ├── Button.stories.tsx
│       │       ├── Button-Variants.stories.tsx
│       │       ├── Button-Sizes.stories.tsx
│       │       └── Button-States.stories.tsx
│       └── package.json
│
├── package.json                   # Workspace root
├── turbo.json                     # Turborepo pipeline
└── bun.lock                      # Lockfile
```

## 🚀 Instalação e Desenvolvimento

### 1. Clone o repositório

```bash
git clone https://github.com/PagueSimples/paguesimples-ui.git
cd paguesimples-ui
```

### 2. Instale as dependências

```bash
bun install
```

### 3. Scripts disponíveis

```bash
# Desenvolvimento
bun dev                 # Inicia tudo em watch mode
bun run storybook      # Abre Storybook (http://localhost:6006)

# Build
bun run build          # Builda todos os pacotes
bun run lint           # Roda linter

# Pacotes individuais
cd packages/tokens && bun dev    # Watch mode só tokens
cd packages/ui && bun dev        # Watch mode só UI
```

## 📦 Uso como Lib (Futuro)

### Instalação dos Pacotes

```bash
# Quando publicado no npm
bun add @paguesimples/ui @paguesimples/tokens
```

### Import dos Componentes

```tsx
import { Button, Card, Badge, Input } from '@paguesimples/ui'
import { pagueSimples } from '@paguesimples/tokens'

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <h2>Minha Aplicação</h2>
        <p>Usando o design system da PagueSimples</p>
      </CardHeader>
      <CardContent>
        <Button variant="gradient">Começar</Button>
      </CardContent>
    </Card>
  )
}
```

### Usando Design Tokens

```tsx
// Tokens JavaScript para uso dinâmico
import { pagueSimples } from '@paguesimples/tokens'

const customStyle = {
  backgroundColor: pagueSimples.brand.primary, // #00DB75
  padding: pagueSimples.spacing.md,            // 1rem
  borderRadius: pagueSimples.radius.lg,        // 8px
}

// Ou usar diretamente com Tailwind
<div className="bg-primary p-4 rounded-lg">
  Content
</div>
```

## 🎨 Tokens e Customização

### Sistema de Cores

```typescript
// Disponível em @paguesimples/tokens
export const pagueSimples = {
  brand: {
    primary: '#00DB75',      // Verde principal
    primaryHover: '#00B860', // Hover
    primaryDark: '#00753E',  // Verde escuro
    primaryLight: '#E6FAF1', // Verde claro
  },
  gradients: {
    primary: 'linear-gradient(135deg, #00DB75 0%, #00753E 100%)',
  },
  // ... outros tokens
}
```

### Configuração do Tailwind

Para usar em projetos externos:

```js
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00DB75',
          hover: '#00B860',
          dark: '#00753E',
        },
      },
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', 'sans-serif'],
      },
    },
  },
}
```

## 📚 Documentação (Storybook)

Acesse a documentação interativa:

```bash
bun run storybook
# Abra http://localhost:6006
```

### Estrutura da Documentação

- **Components/Button/** - Documentação completa do botão
  - **Button** - Playground interativo
  - **Variants** - Todas as variantes visuais
  - **Sizes** - Todos os tamanhos
  - **States** - Estados normal/disabled

Cada componente tem:
- ✅ Playground com controles interativos
- ✅ Stories individuais para cada variação
- ✅ Documentação automática com argTypes
- ✅ Código copiável para cada exemplo

## 🧪 Build e Publicação

### Build dos Pacotes

```bash
# Builda todos os pacotes
bun run build

# Outputs:
# packages/tokens/dist/ - Tokens compilados
# packages/ui/dist/     - Componentes compilados
```

### Estrutura dos Builds

```
packages/tokens/dist/
├── index.js          # ESM
├── index.cjs         # CommonJS
├── index.d.ts        # TypeScript types
└── ...

packages/ui/dist/
├── index.js          # ESM
├── index.cjs         # CommonJS  
├── index.d.ts        # TypeScript types
└── ...
```

## 🔧 Fluxo de Desenvolvimento

### 1. Desenvolvendo Componentes

```bash
# 1. Inicie o watch mode
bun dev

# 2. Crie o componente em packages/ui/src/components/
# 3. Exporte no packages/ui/src/index.ts  
# 4. Crie stories em apps/storybook/stories/
# 5. Veja no Storybook: http://localhost:6006
```

### 2. Adicionando Novo Componente

```bash
# Estrutura recomendada
mkdir packages/ui/src/components/select
cd packages/ui/src/components/select

# Crie os arquivos
touch index.tsx                    # Componente
touch ../../../apps/storybook/stories/Select.stories.tsx  # Stories

# Exporte no index principal
echo "export * from './components/select'" >> packages/ui/src/index.ts
```

### 3. Verificando Build

```bash
bun run build  # Sempre roda antes de commits
# Se falhar, corrige os erros antes de commitar
```

## 🤝 Contribuição

### Workflow de Contribuição

1. **Fork** do repositório
2. **Crie** uma branch feature: `git checkout -b feature/novo-componente`
3. **Desenvolva** usando `bun dev` + Storybook
4. **Teste** com `bun run build`
5. **Commit** suas mudanças: `git commit -m 'feat: adiciona novo componente'`
6. **Push** para a branch: `git push origin feature/novo-componente`
7. **Abra** um Pull Request

### Padrões de Commit

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: adiciona componente Select
fix: corrige problema de acessibilidade no Button
docs: atualiza stories do Card
style: ajusta espaçamento do Badge
refactor: melhora estrutura do Input
```

## 🔮 Roadmap

### ✅ Funcionalidades Implementadas

- [x] **Monorepo Structure**
  - [x] Turborepo configurado
  - [x] Pacotes independentes (tokens + ui)
  - [x] Build system com tsup
  - [x] Workspace dependencies

- [x] **Documentação**
  - [x] Storybook 9 configurado
  - [x] Stories organizadas em subseções
  - [x] Playground interativo
  - [x] Docs automáticas

- [x] **Componentes Base**
  - [x] Button (8 variantes + 5 tamanhos)
  - [x] Typography (H1, H2, H3, H4)
  - [x] Card, Badge, Input
  - [x] Design tokens completos

### 🚧 Próximas Funcionalidades

- [ ] **Componentes Avançados**
  - [ ] Select/Combobox
  - [ ] Dialog/Modal
  - [ ] DataTable
  - [ ] DatePicker

- [ ] **Melhorias**
  - [ ] Publicação no npm
  - [ ] CLI para scaffolding
  - [ ] Testes automatizados
  - [ ] Playground app

- [ ] **Integrações**
  - [ ] Figma Design Tokens
  - [ ] VS Code Extension

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/PagueSimples/paguesimples-ui/issues)
- **Discussions**: [GitHub Discussions](https://github.com/PagueSimples/paguesimples-ui/discussions)
- **Storybook**: Execute `bun run storybook` para documentação local

---

**Construído com ❤️ pela equipe PagueSimples**