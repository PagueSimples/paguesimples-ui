import { Badge } from "../ui/badge";
import { H1, Lead, Muted } from "../ui/typography";

export function HeroSection() {
  return (
    <section className="border-b bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-4xl mx-auto px-6 py-16 lg:py-24">
        <div className="flex flex-col gap-2 mb-8">
          <H1 className="text-foreground">PagueSimples Design System</H1>
          <Muted>Componentes, tokens e padrões para aplicações fintech modernas</Muted>
        </div>
        
        <div className="max-w-3xl flex flex-col gap-6">
          <Lead>
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