# PagueSimples Design System

Design System oficial da PagueSimples - Componentes, tokens e padrões.

## 🚀 Visão Geral

O PagueSimples Design System é uma coleção completa de componentes reutilizáveis, tokens de design e diretrizes que garantem consistência visual em todos os produtos da PagueSimples.

### 🛠️ Stack Tecnológica

- **Next.js 14+** com App Router e Turbopack
- **TypeScript 5+** para type safety
- **Tailwind CSS v4** com @theme e CSS variables
- **Radix UI** para componentes acessíveis
- **shadcn/ui** como base dos componentes
- **Ubuntu Font** como tipografia oficial
- **Class Variance Authority (CVA)** para variants
- **Bun** como gerenciador de pacotes

## 🎨 Princípios de Design

### Simplicidade
Interfaces limpas e intuitivas que facilitam a experiência do usuário em operações financeiras.

### Consistência
Padrões visuais e comportamentais uniformes em toda a plataforma.

## 🏗️ Arquitetura do Projeto

```
paguesimples-designpattern/
├── app/
│   ├── components/
│   │   ├── ui/           # Componentes base do design system
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── typography.tsx
│   │   │   └── index.ts
│   │   ├── sections/     # Seções da documentação
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TypographySection.tsx
│   │   │   ├── ButtonSection.tsx
│   │   │   ├── FormSection.tsx
│   │   │   ├── BadgeSection.tsx
│   │   │   ├── CardSection.tsx
│   │   │   ├── TokensSection.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   └── theme-provider.tsx
│   ├── tokens/           # Design tokens
│   │   └── index.ts      # Tokens de cores, espaçamento, tipografia
│   ├── lib/
│   │   └── utils.ts      # Utilitários (cn, etc.)
│   └── globals.css       # Estilos globais com @theme do Tailwind v4
└── postcss.config.mjs    # Configuração PostCSS para Tailwind v4
```

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/paguesimples/paguesimples-ui.git
cd paguesimples-ui
```

### 2. Instale as dependências

```bash
bun install
```

### 3. Execute o projeto

```bash
bun dev  # Desenvolvimento com Turbopack
```

### 4. Acesse o sistema

Abra [http://localhost:3000](http://localhost:3000) para ver o design system em ação.

## 🎯 Uso em Projetos

### Instalação como Package (AINDA NÃO IMPLEMENTADO)

```bash
# Quando publicado no bun
bun install @paguesimples/design-system
```

### Import dos Componentes

```tsx
import { 
  Button, 
  Card, 
  Badge, 
  Input,
  H1, H2, H3, H4, 
  Text, 
  Lead 
} from "@paguesimples/design-system"

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <H2>Minha Aplicação</H2>
        <Text>Usando o design system da PagueSimples</Text>
      </CardHeader>
      <CardContent>
        <Button variant="success">Começar</Button>
      </CardContent>
    </Card>
  )
}
```

### Configuração do Tailwind v4

O projeto usa Tailwind CSS v4 com a diretiva `@theme`. Para usar em projetos externos:

```css
/* globals.css */
@import "tailwindcss";

@theme {
  --font-family-sans: Ubuntu, system-ui, sans-serif;
  --color-primary: var(--primary-500);
  --color-primary-foreground: #FFFFFF;
  /* Outras configurações... */
}
```

As cores são automaticamente disponíveis como classes:
- `bg-primary`, `text-primary`, `border-primary`
- `bg-card-border` (muda com o tema)
- Todas as variações de cores definidas

## 🎨 Temas e Customização

### Dark Mode

O sistema suporta modo escuro automático usando CSS variables e theme provider:

```tsx
// O tema é gerenciado pelo ThemeProvider
import { ThemeProvider } from "@/components/theme-provider"

// Componentes automaticamente se adaptam ao tema
<Card> // Borda muda de gray-300 (light) para gray-600 (dark)
```

### Customização de Tokens

O sistema usa Tailwind CSS v4 com a diretiva `@theme` para configuração de cores:

```css
/* globals.css */
@theme {
  --color-primary: var(--color-primary);
  --color-card-border: var(--color-card-border);
  /* Outras variáveis de cor... */
}

/* CSS Variables para temas */
:root {
  --color-primary: var(--primary-500);
  --color-card-border: var(--gray-300); /* Borda clara */
}

.dark {
  --color-primary: var(--primary-500);
  --color-card-border: var(--gray-600); /* Borda escura */
}
```

## 📱 Responsividade

Todos os componentes são responsivos por padrão, usando breakpoints do Tailwind:

```typescript
screens: {
  sm: '640px',   // Mobile landscape
  md: '768px',   // Tablet
  lg: '1024px',  // Desktop small
  xl: '1280px',  // Desktop
  '2xl': '1536px' // Desktop large
}
```

## 🧪 Testes

### Executar Testes

```bash
bun run test
bun run test:watch
bun run test:coverage
```

### Testes de Acessibilidade

```bash
bun run test:a11y
```

## 🤝 Contribuição

### Workflow de Contribuição

1. **Fork** do repositório
2. **Crie** uma branch feature: `git checkout -b feature/novo-componente`
3. **Commit** suas mudanças: `git commit -m 'feat: adiciona novo componente'`
4. **Push** para a branch: `git push origin feature/novo-componente`
5. **Abra** um Pull Request

### Padrões de Commit

Seguimos o [Conventional Commits](https://www.conventionalcommits.org/):

```bash
feat: adiciona novo componente Select
fix: corrige problema de acessibilidade no Button
docs: atualiza documentação do Card
style: ajusta espaçamento do Badge
refactor: melhora estrutura do Input
test: adiciona testes para Typography
```

### Guidelines de Desenvolvimento

1. **TypeScript** obrigatório para type safety
2. **Testes unitários** para novos componentes
3. **Documentação** atualizada
4. **Acessibilidade** verificada
5. **Performance** otimizada

## 🔧 Scripts Disponíveis

```json
{
  "dev": "next dev --turbo",
  "build": "next build --turbo",
  "start": "next start",
  "lint": "next lint"
}
```

### Comandos importantes:

```bash
bun dev          # Desenvolvimento com Turbopack
bun run build    # Build de produção (executar antes de commits)
bun run lint     # Verificar código com ESLint
```
## 🔮 Roadmap

### Funcionalidades Implementadas

- [x] **Navegação**
  - [x] Sidebar hierárquica com subseções
  - [x] Scroll suave para seções
  - [x] Indicador de seção ativa

- [x] **Componentes Base**
  - [x] Button com variantes (default, secondary, outline, ghost, success, gradient)
  - [x] Typography (H1, H2, H3, H4, Text, Lead, Small, Muted)
  - [x] Card com bordas temáticas
  - [x] Badge com variantes semânticas
  - [x] Input com focus states

- [x] **Sistema de Design**
  - [x] Tokens de cores completos
  - [x] Suporte a dark mode
  - [x] Tailwind CSS v4 com @theme
  - [x] CSS Variables dinâmicas

### Próximas Funcionalidades

- [ ] **Componentes Avançados**
  - [ ] DataTable
  - [ ] DatePicker
  - [ ] Select/Combobox
  - [ ] Dialog/Modal
  - [ ] Drawer
  - [ ] Tabs
  - [ ] Accordion

- [ ] **Melhorias**
  - [ ] Animações com Framer Motion
  - [ ] Temas personalizáveis
  - [ ] Playground interativo
  - [ ] CLI para scaffolding

- [ ] **Integrações**
  - [ ] Figma Design Tokens
  - [ ] VS Code Extension
  - [ ] Chrome DevTools Extension

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/paguesimples/design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/paguesimples/design-system/discussions)
- **Email**: design-system@paguesimples.com
- **Slack**: #design-system (canal interno)

---

**Construído com ❤️ pela equipe PagueSimples**