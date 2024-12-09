import React from "react";

export interface CardFigureProps {
  children: React.ReactNode;
}

export const CardFigure = ({ children }: CardFigureProps) => {
  return <figure className="mb-4 md:mb-6">{children}</figure>;
};

CardFigure.displayName = "Card.Figure";
