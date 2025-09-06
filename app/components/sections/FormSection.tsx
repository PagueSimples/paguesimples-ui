import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { H2 } from "../ui/typography";

export function FormSection() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
          <H2 className="mb-8">Elementos de Formulário</H2>
          <Card>
            <CardHeader>
              <CardTitle>Componentes de Entrada</CardTitle>
              <CardDescription>
                Elementos de formulário para captura de dados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Senha</label>
                  <Input type="password" placeholder="••••••••" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Telefone</label>
                  <Input type="tel" placeholder="(11) 99999-9999" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium">Valor</label>
                  <Input type="number" placeholder="R$ 0,00" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full md:w-auto">Enviar Formulário</Button>
            </CardFooter>
          </Card>
      </div>
    </section>
  );
}