import React from "react";

export interface CardFooterProps {
  children: React.ReactNode;
}

export const CardFooter = ({ children }: CardFooterProps) => {
  return <footer className="">{children}</footer>;
};

CardFooter.displayName = "Card.Footer";
