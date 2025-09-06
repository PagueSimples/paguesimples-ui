import { Badge } from "../ui/badge";
import { H1, Lead, Muted } from "../ui/typography";

export function HeroSection() {
  return (
    <section className="border-b bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-4xl px-6 py-16 lg:py-24">
        <div className="mb-8">
          <H1 className="text-foreground mb-2">PagueSimples Design System</H1>
          <Muted>Componentes, tokens e padrões para aplicações fintech modernas</Muted>
        </div>
        
        <div className="max-w-3xl">
          <Lead className="mb-6">
            Sistema de Design oficial da PagueSimples. Componentes, tokens e padrões
            para construir aplicações fintech modernas, consistentes e acessíveis.
          </Lead>
          <div className="flex flex-wrap gap-3">
            <Badge variant="default">Next.js 14+</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="outline">Tailwind CSS</Badge>
            <Badge variant="default">Radix UI</Badge>
          </div>
        </div>
      </div>
    </section>
  );
}