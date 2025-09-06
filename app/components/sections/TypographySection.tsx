import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { H1, H2, H3, H4, Text, Lead, Large, Small, Muted } from "../ui/typography";

export function TypographySection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl px-6">
        <div className="max-w-4xl">
          <H2 className="mb-8">Tipografia</H2>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card id="typography-headings">
              <CardHeader>
                <CardTitle>Títulos</CardTitle>
                <CardDescription>
                  Hierarquia tipográfica com fonte Ubuntu
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Small className="text-muted-foreground block mb-1">H1</Small>
                  <H1>Pagamentos Simplificados</H1>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-1">H2</Small>
                  <H2>Soluções Financeiras</H2>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-1">H3</Small>
                  <H3>Tecnologia Avançada</H3>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-1">H4</Small>
                  <H4>Experiência Premium</H4>
                </div>
              </CardContent>
            </Card>

            <Card id="typography-text">
              <CardHeader>
                <CardTitle>Componentes de Texto</CardTitle>
                <CardDescription>
                  Componentes de texto para diferentes contextos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Small className="text-muted-foreground block mb-1">Lead</Small>
                  <Lead>Texto de destaque para introduções importantes.</Lead>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-1">Large</Small>
                  <Large>Texto em destaque para chamadas.</Large>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-1">Text</Small>
                  <Text>Texto padrão para conteúdo geral da aplicação.</Text>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-1">Small</Small>
                  <Small>Texto pequeno para metadados e informações auxiliares.</Small>
                </div>
                <div>
                  <Small className="text-muted-foreground block mb-1">Muted</Small>
                  <Muted>Texto com menor contraste para informações secundárias.</Muted>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}