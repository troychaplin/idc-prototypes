import React from "react";
import { Header } from "../Header";

export interface HeroContentProps {
  children: React.ReactNode;
  title: string;
  headerType?: "h1" | "h2" | "h3";
}

export const HeroContent = ({
  children,
  title,
  headerType = "h2",
}: HeroContentProps) => {
  let headerSize: "sm" | "md" | "lg" | "xl";
  switch (headerType) {
    case "h1":
      headerSize = "xl";
      break;
    case "h2":
      headerSize = "lg";
      break;
    case "h3":
      headerSize = "md";
      break;
    default:
      headerSize = "sm";
      break;
  }

  return (
    <Header as={headerType} title={title} size={headerSize}>
      {children}
    </Header>
  );
};

HeroContent.displayName = "Hero.Content";
