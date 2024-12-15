import React from "react";

export interface CardQuoteProps {
  children?: React.ReactNode;
  cite?: string;
}

export const CardQuote = ({ children, cite }: CardQuoteProps) => {
  return (
    <div className="px-5 py-3.5 bg-white rounded-md md:px-8 md:py-6 shadow-md">
      {children}
      <footer>{cite}</footer>
    </div>
  );
};

CardQuote.displayName = "Card.Quote";
