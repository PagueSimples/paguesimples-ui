"use client";

import React from "react";
import {
  HeroSection,
  TypographySection,
  ButtonSection,
  FormSection,
  BadgeSection,
  CardSection,
  TokensSection,
  Sidebar,
  Footer
} from "./components/sections";

export default function DesignSystemDemo() {
  const sections = [
    { id: "hero", Component: HeroSection },
    { id: "typography", Component: TypographySection },
    { id: "buttons", Component: ButtonSection },
    { id: "forms", Component: FormSection },
    { id: "badges", Component: BadgeSection },
    { id: "cards", Component: CardSection },
    { id: "tokens", Component: TokensSection },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {sections.map(({ id, Component }) => (
          <section key={id} id={id}>
            <Component />
          </section>
        ))}
        <Footer />
      </main>
    </div>
  );
}