import React from "react";

export interface HeroContentProps {
  children: React.ReactNode;
  header: string;
}

export const HeroContent = ({ children, header }: HeroContentProps) => {
  return (
    <div className="space-y-5 ui-prose-first-last md:space-y-8">
      <h2 className="text-idc-blue-700">{header}</h2>
      {children}
    </div>
  );
};

HeroContent.displayName = "Hero.Content";
