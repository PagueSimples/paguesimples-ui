import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { H2, Muted } from "../ui/typography";

export function CardSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl px-6">
        <div className="max-w-4xl">
          <H2 className="mb-8">Cartões</H2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card id="card-transaction">
              <CardHeader>
                <CardTitle>Transação</CardTitle>
                <CardDescription>
                  Pagamento recebido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">R$ 1.234,56</div>
                <Muted>Pix • Hoje, 14:32</Muted>
              </CardContent>
              <CardFooter>
                <Badge variant="default">Aprovado</Badge>
              </CardFooter>
            </Card>

            <Card id="card-revenue">
              <CardHeader>
                <CardTitle>Receita Mensal</CardTitle>
                <CardDescription>
                  Total de receitas do mês
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">R$ 45.678,90</div>
                <div className="flex items-center text-sm text-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-1">
                    <path d="M7 17l9.2-9.2M17 17V7H7"/>
                  </svg>
                  +12,5% vs mês anterior
                </div>
              </CardContent>
            </Card>

            <Card id="card-actions">
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
                <CardDescription>
                  Ações mais utilizadas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  Criar cobrança
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mr-2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                  Baixar relatório
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}