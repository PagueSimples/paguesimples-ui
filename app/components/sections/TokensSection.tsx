import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../ui/card";
import { H2, Small } from "../ui/typography";

export function TokensSection() {
  const primaryColors = [
    { name: 'primary-50', value: '#E6FAF1', cssVar: '--primary-50' },
    { name: 'primary-100', value: '#CCF5E3', cssVar: '--primary-100' },
    { name: 'primary-200', value: '#99EBC7', cssVar: '--primary-200' },
    { name: 'primary-300', value: '#66E0AB', cssVar: '--primary-300' },
    { name: 'primary-400', value: '#33D68F', cssVar: '--primary-400' },
    { name: 'primary-500', value: '#00DB75', cssVar: '--primary-500', description: 'Verde principal' },
    { name: 'primary-600', value: '#00B860', cssVar: '--primary-600', description: 'Hover' },
    { name: 'primary-700', value: '#00753E', cssVar: '--primary-700', description: 'Verde escuro' },
    { name: 'primary-800', value: '#005A30', cssVar: '--primary-800' },
    { name: 'primary-900', value: '#003D20', cssVar: '--primary-900' },
    { name: 'primary-950', value: '#002614', cssVar: '--primary-950' },
  ];

  const grayColors = [
    { name: 'gray-50', value: '#FAFAFA' },
    { name: 'gray-100', value: '#F4F4F5' },
    { name: 'gray-200', value: '#E4E4E7' },
    { name: 'gray-300', value: '#D4D4D8' },
    { name: 'gray-400', value: '#A1A1AA' },
    { name: 'gray-500', value: '#71717A' },
    { name: 'gray-600', value: '#52525B' },
    { name: 'gray-700', value: '#3F3F46' },
    { name: 'gray-800', value: '#27272A' },
    { name: 'gray-900', value: '#18181B' },
    { name: 'gray-950', value: '#09090B' },
  ];

  const feedbackColors = [
    { name: 'success', value: '#00DB75' },
    { name: 'warning', value: '#F59E0B' },
    { name: 'error', value: '#EF4444' },
    { name: 'info', value: '#3B82F6' },
  ];

  const spacingItems = [
    { size: 'xs', value: '4px', width: '4px' },
    { size: 'sm', value: '8px', width: '8px' },
    { size: 'md', value: '16px', width: '16px' },
    { size: 'lg', value: '24px', width: '24px' },
    { size: 'xl', value: '32px', width: '32px' },
    { size: '2xl', value: '48px', width: '48px' }
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="max-w-4xl mx-auto px-6">
          <H2 className="mb-8">Tokens de Design</H2>
          <div className="grid gap-6">
            
            {/* Verde PagueSimples - Detalhado */}
            <Card id="tokens-primary">
              <CardHeader>
                <CardTitle>Verde PagueSimples</CardTitle>
                <CardDescription>
                  Paleta completa de verdes da marca com especificações técnicas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {primaryColors.map((color) => (
                    <div
                      key={color.name}
                      className="bg-card rounded-lg p-4 border border-border hover:border-primary/20 transition-colors"
                    >
                      <div
                        className="w-full h-16 rounded-md border border-border mb-3"
                        style={{ backgroundColor: color.value }}
                      />
                      <div className="flex flex-col gap-1">
                        <div className="font-medium text-sm text-foreground">
                          {color.name}
                          {color.description && (
                            <span className="ml-2 text-xs text-muted-foreground">
                              ({color.description})
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                          {color.value}
                        </div>
                        <div className="text-xs text-muted-foreground font-mono">
                          var({color.cssVar})
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Como usar */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <div className="font-semibold text-sm mb-4">Como usar as cores</div>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="text-sm font-medium">CSS Custom Properties:</div>
                      <code className="text-xs bg-background px-2 py-1 rounded border font-mono">
                        color: var(--primary-500);
                      </code>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm font-medium">Tailwind v4:</div>
                      <code className="text-xs bg-background px-2 py-1 rounded border font-mono">
                        className=&quot;bg-primary text-primary-foreground&quot;
                      </code>
                      <div className="text-xs text-muted-foreground mt-1">
                        Gerado automaticamente via @theme
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-sm font-medium">JavaScript (via tokens):</div>
                      <code className="text-xs bg-background px-2 py-1 rounded border font-mono">
                        import &#123; pagueSimples &#125; from &quot;@/tokens&quot;
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Cores Neutras */}
              <Card id="tokens-neutral">
                <CardHeader>
                  <CardTitle>Cores Neutras</CardTitle>
                  <CardDescription>
                    Escala de cinzas para textos e backgrounds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    {grayColors.map((color) => (
                      <div key={color.name} className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded border border-border"
                          style={{ backgroundColor: color.value }}
                        />
                        <Small className="font-mono w-20">{color.name}</Small>
                        <Small className="text-muted-foreground">{color.value}</Small>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cores de Feedback e Espaçamento */}
              <div className="flex flex-col gap-6">
                <Card id="tokens-feedback">
                  <CardHeader>
                    <CardTitle>Cores de Feedback</CardTitle>
                    <CardDescription>
                      Cores para indicar estados e ações
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      {feedbackColors.map((color) => (
                        <div key={color.name} className="flex items-center gap-3">
                          <div 
                            className="w-8 h-8 rounded border border-border"
                            style={{ backgroundColor: color.value }}
                          />
                          <Small className="font-mono w-16 capitalize">{color.name}</Small>
                          <Small className="text-muted-foreground">{color.value}</Small>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card id="tokens-spacing">
                  <CardHeader>
                    <CardTitle>Escala de Espaçamento</CardTitle>
                    <CardDescription>
                      Sistema de espaçamento padronizado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      {spacingItems.map((item) => (
                        <div key={item.size} className="flex items-center gap-4">
                          <div className="bg-primary rounded" style={{ width: item.width, height: '16px' }} />
                          <Small className="font-mono w-8">{item.size}</Small>
                          <Small className="text-muted-foreground">{item.value}</Small>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}