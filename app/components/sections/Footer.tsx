import { Button } from "../ui/button";
import { Text, Muted } from "../ui/typography";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary-foreground">
                <path d="M12 2L2 7v10l10 5 10-5V7l-10-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <Text weight="medium" className="text-foreground">PagueSimples Design System</Text>
              <Muted>v1.0.0</Muted>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm">GitHub</Button>
            <Button variant="ghost" size="sm">Documentação</Button>
            <Button variant="ghost" size="sm">Figma</Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center">
          <Muted>
            © 2024 PagueSimples. Sistema de Design construído com Next.js, TypeScript e Tailwind CSS.
          </Muted>
        </div>
      </div>
    </footer>
  );
}