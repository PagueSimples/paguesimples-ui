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
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 lg:ml-64">
      <Sidebar />
      <section id="hero">
        <HeroSection />
      </section>
      <section id="typography">
        <TypographySection />
      </section>
      <section id="buttons">
        <ButtonSection />
      </section>
      <section id="forms">
        <FormSection />
      </section>
      <section id="badges">
        <BadgeSection />
      </section>
      <section id="cards">
        <CardSection />
      </section>
      <section id="tokens">
        <TokensSection />
      </section>
      <Footer />
    </div>
  );
}