import React from "react";

export interface HeroImageProps {
  children: React.ReactNode;
}

export const HeroImage = ({ children }: HeroImageProps) => {
  return <div>{children}</div>;
};

HeroImage.displayName = "Hero.Content";
