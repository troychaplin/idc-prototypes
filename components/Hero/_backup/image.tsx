import React from "react";

export interface HeroImageProps {
  children: React.ReactNode;
}

export const HeroImage = ({ children }: HeroImageProps) => {
  return <div className="not-prose">{children}</div>;
};

HeroImage.displayName = "Hero.Content";
