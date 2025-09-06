import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { H2, Small } from "../ui/typography";

export function BadgeSection() {
  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-4xl px-6">
        <div className="max-w-4xl">
          <H2 className="mb-8">Emblemas</H2>
          <Card>
            <CardHeader>
              <CardTitle>Indicadores de Status</CardTitle>
              <CardDescription>
                Badges para indicar status, categorias e informações importantes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div>
                  <Small className="text-muted-foreground block mb-3">Status de Pagamento</Small>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Aprovado</Badge>
                    <Badge variant="secondary">Pendente</Badge>
                    <Badge variant="destructive">Rejeitado</Badge>
                    <Badge variant="outline">Processando</Badge>
                  </div>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-3">Tipos de Plano</Small>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="default">Premium</Badge>
                    <Badge variant="secondary">Standard</Badge>
                    <Badge variant="outline">Basic</Badge>
                  </div>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-3">Stack de Tecnologia</Small>
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
      </div>
    </section>
  );
}