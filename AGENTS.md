# Repository Guidelines

## Project Structure & Module Organization
- `app/` — Next.js App Router source.
  - `components/ui/` — primitive UI components; files are lowercase (e.g., `button.tsx`), exports in PascalCase.
  - `components/sections/` — composite sections; filenames in PascalCase (e.g., `HeroSection.tsx`).
  - `lib/` — shared utilities (e.g., `utils.ts`).
  - `tokens/` — design tokens (e.g., `index.ts`).
  - `layout.tsx`, `page.tsx`, `globals.css` — app shell and styles.
- `public/` — static assets served at `/`.
- Config: `eslint.config.mjs`, `next.config.ts`, `postcss.config.mjs`, `tsconfig.json`.

## Build, Test, and Development Commands
- `npm run dev` — start Next.js (Turbopack) in watch mode.
- `npm run build` — production build.
- `npm start` — serve the built app.
- `npm run lint` — run ESLint across the project.
Tip: Use Node 20+ and npm 10+. Prefer `npm` to keep `package-lock.json` consistent.

## Coding Style & Naming Conventions
- Language: TypeScript (`.ts`/`.tsx`), 2‑space indentation.
- Components: PascalCase (e.g., `CardSection`), hooks/utils: camelCase (e.g., `useTheme`, `formatCurrency`).
- Exports: prefer named exports; avoid default for components for consistency.
- Styling: Tailwind CSS v4; prioritize utility classes; theme via `next-themes`.
- File placement: primitives in `components/ui`, composites in `components/sections`, shared logic in `app/lib`.

## Testing Guidelines
- No test runner is configured yet. Recommended:
  - Unit: Vitest + React Testing Library.
  - E2E: Playwright.
- Co-locate tests as `*.test.tsx`/`*.test.ts` next to sources or in `__tests__/`.
- Aim for ~80% coverage on new/changed modules; test both light/dark themes when relevant.

## Commit & Pull Request Guidelines
- Use Conventional Commits (`feat`, `fix`, `docs`, `chore`, `refactor`, …).
  - Example: `feat: add card borders using theme tokens`.
- PRs must include:
  - Clear description and rationale; link related issues.
  - UI changes: screenshots (light and dark) when applicable.
  - Checklist: builds, lints, and no unused exports.

## Security & Configuration Tips
- Never commit secrets; store local values in `.env.local` (git‑ignored).
- Keep server-only code out of client components; add `"use client"` where required.
- Place public assets in `public/`; reference via absolute `/path`.

