import React from "react";

export interface CardExcerptProps {
  text?: string;
  link?: string;
}

export const CardExcerpt = ({ text, link }: CardExcerptProps) => {
  return (
    <p className="text-base leading-7">
      {text && text.length > 170 ? `${text.substring(0, 150)}...` : text}
      {link && <span className="font-semibold"> More</span>}
    </p>
  );
};

CardExcerpt.displayName = "Card.Excerpt";
