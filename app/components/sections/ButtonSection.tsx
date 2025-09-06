import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { H2, Small } from "../ui/typography";

export function ButtonSection() {
  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-4xl px-6">
        <div className="max-w-4xl">
          <H2 className="mb-8">Botões</H2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card id="button-variants">
              <CardHeader>
                <CardTitle>Variações de Botão</CardTitle>
                <CardDescription>
                  Diferentes estilos para diferentes contextos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Padrão</Button>
                    <Button variant="success">Sucesso</Button>
                    <Button variant="gradient">Gradiente</Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="secondary">Secundário</Button>
                    <Button variant="outline">Contorno</Button>
                    <Button variant="ghost">Fantasma</Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="link">Link</Button>
                    <Button variant="destructive">Destrutivo</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card id="button-sizes">
              <CardHeader>
                <CardTitle>Tamanhos de Botão</CardTitle>
                <CardDescription>
                  Tamanhos para diferentes necessidades de interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Button size="sm">Pequeno</Button>
                    <Button size="default">Padrão</Button>
                    <Button size="lg">Grande</Button>
                    <Button size="xl">Extra Grande</Button>
                  </div>
                  <div className="flex items-center gap-3">
                    <Button size="icon" variant="outline">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14m-7-7h14"/>
                      </svg>
                    </Button>
                    <Small className="text-muted-foreground">Botão Ícone</Small>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}