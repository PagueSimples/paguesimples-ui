# PagueSimples Design System

Sistema de Design oficial da PagueSimples - Componentes, tokens e padrões para construir aplicações fintech modernas, consistentes e acessíveis.

## 🚀 Visão Geral

O PagueSimples Design System é uma coleção completa de componentes reutilizáveis, tokens de design e diretrizes que garantem consistência visual e funcional em todos os produtos da PagueSimples. Construído com as tecnologias mais modernas do ecossistema React.

### 🛠️ Stack Tecnológica

- **Next.js 14+** com App Router
- **TypeScript 5+** para type safety
- **Tailwind CSS 3+** para styling
- **Radix UI** para componentes acessíveis
- **shadcn/ui** como base dos componentes
- **Ubuntu Font** como tipografia oficial
- **Class Variance Authority (CVA)** para variants

## 🎨 Princípios de Design

### Simplicidade
Interfaces limpas e intuitivas que facilitam a experiência do usuário em operações financeiras.

### Consistência
Padrões visuais e comportamentais uniformes em toda a plataforma.

### Acessibilidade
Componentes que seguem as diretrizes WCAG 2.1 AA para inclusão digital.

### Performance
Otimização para Core Web Vitals e carregamento rápido.

## 🏗️ Arquitetura do Projeto

```
paguesimples-designpattern/
├── app/
│   ├── components/
│   │   └── ui/           # Componentes base do design system
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       ├── input.tsx
│   │       ├── typography.tsx
│   │       └── index.ts
│   ├── tokens/           # Design tokens
│   │   └── index.ts      # Tokens de cores, espaçamento, tipografia
│   ├── lib/
│   │   └── utils.ts      # Utilitários (cn, etc.)
│   └── globals.css       # Estilos globais e CSS variables
└── tailwind.config.ts    # Configuração do Tailwind
```

## 🎨 Design Tokens

### Cores Principais

```typescript
// Verde PagueSimples - Cor principal da marca
primary: '#00DB75'      // CTAs, sucesso, elementos ativos
primaryHover: '#00B860' // Hover states
primaryDark: '#00753E'  // Textos, headers
primaryLight: '#E6FAF1' // Backgrounds sutis
```

### Paleta de Cores

| Token | Valor | Uso |
|-------|-------|-----|
| `primary` | `#00DB75` | Botões primários, links, status de sucesso |
| `secondary` | CSS Variable | Elementos secundários, backgrounds |
| `accent` | CSS Variable | Destaques sutis, hover states |
| `muted` | CSS Variable | Textos secundários, placeholders |

### Espaçamento

Sistema baseado em múltiplos de 4px para consistência visual:

```typescript
spacing: {
  xs: '4px',    // Espaçamentos mínimos
  sm: '8px',    // Elementos pequenos
  md: '16px',   // Padrão
  lg: '24px',   // Seções
  xl: '32px',   // Componentes grandes
  '2xl': '48px' // Separação de seções
}
```

### Tipografia

Utilizamos a fonte **Ubuntu** em todos os pesos:
- `300` - Light (textos longos)
- `400` - Regular (texto padrão)
- `500` - Medium (labels, navegação)
- `700` - Bold (títulos, CTAs)

## 📦 Componentes

### Button

Botão versátil com múltiplas variantes e tamanhos.

```tsx
import { Button } from "@/components/ui/button"

// Variantes
<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="success">Success</Button>
<Button variant="gradient">Gradient</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
<Button size="icon">🚀</Button>
```

### Typography

Sistema tipográfico completo com componentes semânticos.

```tsx
import { H1, H2, H3, H4, Text, Lead, Small, Muted } from "@/components/ui/typography"

// Hierarquia de títulos
<H1>Título Principal</H1>
<H2>Subtítulo</H2>
<H3>Seção</H3>
<H4>Subseção</H4>

// Texto para conteúdo
<Lead>Texto de abertura destacado</Lead>
<Text>Parágrafo padrão</Text>
<Small>Texto pequeno</Small>
<Muted>Texto com menor contraste</Muted>
```

### Card

Container flexível para agrupamento de conteúdo.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição opcional</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Conteúdo principal */}
  </CardContent>
  <CardFooter>
    {/* Ações ou informações extras */}
  </CardFooter>
</Card>
```

### Badge

Indicadores visuais para status, categorias e metadados.

```tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="default">Aprovado</Badge>
<Badge variant="secondary">Pendente</Badge>
<Badge variant="outline">Em análise</Badge>
<Badge variant="destructive">Rejeitado</Badge>
```

### Input

Campo de entrada de dados com suporte a diferentes tipos.

```tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="seu@email.com" />
<Input type="password" placeholder="••••••••" />
<Input type="tel" placeholder="(11) 99999-9999" />
<Input type="number" placeholder="R$ 0,00" />
```

## 🚀 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/paguesimples/design-system.git
cd design-system
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

### 3. Execute o projeto

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

### 4. Acesse o sistema

Abra [http://localhost:3000](http://localhost:3000) para ver o design system em ação.

## 🎯 Uso em Projetos

### Instalação como Package

```bash
# Quando publicado no npm
npm install @paguesimples/design-system
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

### Configuração do Tailwind

Para usar os tokens em projetos externos, configure o Tailwind:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00DB75',
          hover: '#00B860',
          dark: '#00753E',
          light: '#E6FAF1',
        }
      },
      fontFamily: {
        sans: ['Ubuntu', 'system-ui', 'sans-serif'],
      }
    }
  }
}
```

## 🎨 Temas e Customização

### Dark Mode

O sistema suporta modo escuro automático usando CSS variables:

```tsx
// Ativação manual do dark mode
document.documentElement.classList.add('dark')
```

### Customização de Tokens

Override das CSS variables para personalização:

```css
:root {
  --primary: 0 219 117; /* #00DB75 em HSL */
  --secondary: 210 40% 98%;
  --accent: 210 40% 96%;
}

.dark {
  --primary: 0 219 117;
  --secondary: 217.2 32.6% 17.5%;
  --accent: 217.2 32.6% 17.5%;
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

## ♿ Acessibilidade

### Padrões Implementados

- **Navegação por teclado** em todos os componentes interativos
- **ARIA labels** e roles apropriados
- **Contraste de cores** seguindo WCAG 2.1 AA
- **Focus indicators** visíveis e consistentes
- **Screen reader** support

### Exemplo de Uso Acessível

```tsx
<Button 
  aria-label="Confirmar pagamento de R$ 150,00"
  className="focus:ring-2 focus:ring-primary"
>
  Confirmar Pagamento
</Button>
```

## 🧪 Testes

### Executar Testes

```bash
npm run test
npm run test:watch
npm run test:coverage
```

### Testes de Acessibilidade

```bash
npm run test:a11y
```

## 📖 Storybook

Documentação interativa dos componentes:

```bash
npm run storybook
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
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest",
  "test:watch": "jest --watch",
  "storybook": "storybook dev -p 6006",
  "chromatic": "chromatic --exit-zero-on-changes"
}
```

## 📊 Performance

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Bundle Size

- **Componentes otimizados** para tree-shaking
- **CSS purging** automático
- **Lazy loading** quando apropriado

## 🔮 Roadmap

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

## 👥 Time

- **Design System Lead**: Time PagueSimples
- **Maintainers**: Equipe de Produto e Engenharia
- **Contributors**: Comunidade PagueSimples

## 📞 Suporte

- **Issues**: [GitHub Issues](https://github.com/paguesimples/design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/paguesimples/design-system/discussions)
- **Email**: design-system@paguesimples.com
- **Slack**: #design-system (canal interno)

---

**Construído com ❤️ pela equipe PagueSimples**

*Simplificando pagamentos através de design consistente e tecnologia de ponta.*