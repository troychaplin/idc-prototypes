import React from "react";
import { Header } from "../Header";

export interface HeroContentProps {
  children: React.ReactNode;
  header: string;
}

export const HeroContent = ({ children, header }: HeroContentProps) => {
  return (
    <div className="space-y-5 ui-prose-first-last md:space-y-8">
      <Header title={header} size="lg" />
      {children}
    </div>
  );
};

HeroContent.displayName = "Hero.Content";
