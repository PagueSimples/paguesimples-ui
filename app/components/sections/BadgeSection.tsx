import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { H2, Small } from "../ui/typography";

export function BadgeSection() {
  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-4xl mx-auto px-6">
          <H2 className="mb-8">Emblemas</H2>
          <Card>
            <CardHeader>
              <CardTitle>Indicadores de Status</CardTitle>
              <CardDescription>
                Badges para indicar status, categorias e informações importantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <Small className="text-muted-foreground">Status de Pagamento</Small>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Aprovado</Badge>
                    <Badge variant="secondary">Pendente</Badge>
                    <Badge variant="destructive">Rejeitado</Badge>
                    <Badge variant="outline">Processando</Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Small className="text-muted-foreground">Tipos de Plano</Small>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Premium</Badge>
                    <Badge variant="secondary">Standard</Badge>
                    <Badge variant="outline">Basic</Badge>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Small className="text-muted-foreground">Stack de Tecnologia</Small>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Tailwind</Badge>
                    <Badge variant="outline">Radix UI</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>
    </section>
  );
}