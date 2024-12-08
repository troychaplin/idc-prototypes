import React from "react";

export interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <footer>{children}</footer>;
};

CardFooter.displayName = "Card.Footer";
