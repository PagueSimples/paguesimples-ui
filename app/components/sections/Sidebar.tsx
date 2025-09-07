"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Small, H3, Muted } from "../ui/typography";
import { Button } from "../ui/button";

const sections = [
  { id: "hero", label: "Início" },
  {
    id: "typography",
    label: "Tipografia",
    subsections: [
      { id: "typography-headings", label: "Títulos" },
      { id: "typography-text", label: "Componentes de Texto" },
    ],
  },
  {
    id: "buttons",
    label: "Botões",
    subsections: [
      { id: "button-variants", label: "Variações" },
      { id: "button-sizes", label: "Tamanhos" },
    ],
  },
  { id: "forms", label: "Formulários" },
  { id: "badges", label: "Emblemas" },
  {
    id: "cards",
    label: "Cartões",
    subsections: [
      { id: "card-transaction", label: "Transação" },
      { id: "card-revenue", label: "Receita Mensal" },
      { id: "card-actions", label: "Ações Rápidas" },
    ],
  },
  {
    id: "tokens",
    label: "Tokens",
    subsections: [
      { id: "tokens-primary", label: "Verde PagueSimples" },
      { id: "tokens-neutral", label: "Cores Neutras" },
      { id: "tokens-feedback", label: "Cores de Feedback" },
      { id: "tokens-spacing", label: "Espaçamento" },
    ],
  },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Check main sections first
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);

            // Auto-expand section if it has subsections
            if (section.subsections && !expandedSections.includes(section.id)) {
              setExpandedSections((prev) => [...prev, section.id]);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [expandedSections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <aside className="bg-card border-r border-border hidden lg:flex lg:flex-col lg:sticky lg:top-0 lg:h-screen">
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex flex-col gap-4 p-6 border-b border-border">
          <div className="flex flex-col items-center gap-1">
            <H3 className="text-foreground">PagueSimples</H3>
            <Muted className="text-xs">Design System</Muted>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={toggleTheme}
            className="w-full flex gap-4"
          >
            <span>{!mounted ? "🌓" : theme === "dark" ? "☀️" : "🌙"} </span>
            <span>
              {!mounted ? "Tema" : theme === "dark" ? "Claro" : "Escuro"}
            </span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {sections.map((section) => (
              <div key={section.id}>
                {/* Main section */}
                <div className="flex items-center">
                  <Button
                    variant="ghost"
                    onClick={() => scrollToSection(section.id)}
                    className={`
                      flex-1 justify-start px-3 py-2 h-auto text-left rounded-md
                      ${
                        activeSection === section.id
                          ? "bg-primary/10 text-primary border-l-2 border-primary hover:bg-primary/15"
                          : "text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    <Small
                      className={`
                        font-medium transition-colors
                        ${activeSection === section.id ? "text-primary" : ""}
                      `}
                    >
                      {section.label}
                    </Small>
                  </Button>

                  {/* Expand/Collapse button */}
                  {section.subsections && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleSection(section.id)}
                      className="p-1 h-auto w-auto rounded hover:bg-accent/50"
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        className={`text-muted-foreground transition-transform duration-200 ${
                          expandedSections.includes(section.id)
                            ? "rotate-90"
                            : ""
                        }`}
                      >
                        <path
                          d="M9 18l6-6-6-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  )}
                </div>

                {/* Subsections */}
                {section.subsections &&
                  expandedSections.includes(section.id) && (
                    <div className="ml-4 mt-1 flex flex-col gap-1 border-l-2 border-border/50 pl-3">
                      {section.subsections.map((subsection) => (
                        <Button
                          key={subsection.id}
                          variant="ghost"
                          onClick={() => scrollToSection(subsection.id)}
                          className="w-full justify-start px-2 py-1 h-auto text-xs text-muted-foreground hover:text-foreground hover:bg-accent/30"
                        >
                          {subsection.label}
                        </Button>
                      ))}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
