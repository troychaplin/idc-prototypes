import React from "react";

export interface CardFigureProps {
  children: React.ReactNode;
}

export const CardFigure = ({ children }: CardFigureProps) => {
  return <figure className="mb-3 md:mb-5">{children}</figure>;
};

CardFigure.displayName = "Card.Figure";
