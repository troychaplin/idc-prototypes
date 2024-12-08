import React from "react";

export interface CardHeaderProps {
  title: string;
  as?: "h2" | "h3";
  date?: string | Date;
  datePrefix?: string;
}

export const CardHeader = ({
  title,
  as = "h2",
  date,
  datePrefix,
}: CardHeaderProps) => {
  const HeaderComponent = as;
  const formattedDate = date
    ? new Date(date).toLocaleString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      })
    : null;

  return (
    <header className="space-y-2">
      <HeaderComponent className="text-base font-semibold md:text-lg">
        {title}
      </HeaderComponent>

      {date && (
        <time className="block text-sm italic md:text-base text-idc-black-600">
          {datePrefix && `${datePrefix} `}
          {formattedDate}
        </time>
      )}
    </header>
  );
};

CardHeader.displayName = "Card.Header";
