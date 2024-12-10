import React from "react";

export interface CardContentProps {
  text?: string;
  link?: string;
  isExcerpt?: boolean;
}

export const CardContent = ({ text, link, isExcerpt }: CardContentProps) => {
  return (
    <p className="mt-2 text-base font-normal leading-7 md:mt-3">
      {isExcerpt && text && text.length > 170 ? (
        <>
          {text.substring(0, 170)}...
          {link && (
            <a
              href={link}
              className="ml-1 font-semibold text-idc-orange-700 hover:underline"
            >
              More
            </a>
          )}
        </>
      ) : (
        text
      )}
    </p>
  );
};

CardContent.displayName = "Card.Content";
