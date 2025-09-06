# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **PagueSimples Design System** - a Next.js-based design system showcasing UI components, design tokens, and visual patterns for the PagueSimples fintech brand. The system uses PagueSimples' signature green colors (#00DB75 primary, #00753E dark) and Ubuntu typography.

## Commands

```bash
# Development
bun dev                 # Start development server with Turbopack
bun run build          # Build for production with Turbopack (always run before commits)
bun run start          # Start production server
bun run lint           # Run ESLint

# Package management
bun add <package>      # Add dependencies (use bun, not npm/yarn)
```

**Important**: Always run `bun run build` before making commits to ensure the build passes. The project uses Turbopack for faster builds.

## Architecture

### Design System Foundation

The project follows a **three-layer design token architecture**:

1. **CSS Custom Properties** (`app/globals.css`): HSL values for shadcn/ui compatibility
   - `--primary: 156 100% 43%` (PagueSimples green #00DB75)
   - Supports automatic light/dark theme switching

2. **Tailwind Configuration** (`tailwind.config.ts`): Maps CSS variables to Tailwind classes
   - Enables `bg-primary`, `text-primary`, etc.
   - Uses Ubuntu font family instead of Inter

3. **JavaScript Tokens** (`app/tokens/index.ts`): Values for dynamic usage
   - Brand colors in hex format for JavaScript libraries
   - Custom gradients, shadows, and animations
   - Use when Tailwind classes aren't sufficient (charts, dynamic styling)

### Component Structure

Built on **shadcn/ui foundation** with PagueSimples customizations:

- `app/components/ui/`: Core UI components
- All components use `cn()` utility from `app/lib/utils.ts`
- Components use relative imports (`../../lib/utils`) due to path resolution setup
- Export pattern: Individual exports + barrel export in `index.ts`

### Key Components

- **Button**: Multiple variants including `gradient` (unique to PagueSimples)
- **Typography**: `H1`, `H2`, `H3`, `H4` components (not dynamic `Heading` due to TypeScript complexity)
- **Badge**: Status indicators with semantic color variants
- **Card**: Hover effects with green accent borders
- **Input**: Focus rings using brand green

### Styling Philosophy

- **Clean & Minimal**: Inspired by Next.js aesthetic
- **Brand Colors**: Strategic use of PagueSimples green, mostly neutral grays
- **Ubuntu Typography**: Professional font choice over Inter
- **Hover States**: Subtle interactions with brand color accents

## Development Notes

### TypeScript Considerations

- Use `type` instead of empty `interface` to avoid ESLint errors
- Typography components avoid dynamic element rendering due to complexity
- Color props in components use `Omit<HTMLAttributes, 'color'>` to prevent conflicts

### Import Patterns

- UI components: `import { Button, Card } from "@/components/ui"`
- Tokens: `import { pagueSimples } from "@/tokens"`
- Utils: `import { cn } from "@/lib/utils"` (or relative path in components)

### Commit Strategy

Make modular, organized commits for each section:
- Foundation setup (tokens, configuration)
- Individual component additions
- Documentation updates

The project uses Turbopack warnings about lockfiles (bun.lock vs package-lock.json) - these are harmless but should be noted in builds.