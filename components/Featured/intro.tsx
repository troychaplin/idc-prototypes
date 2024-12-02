import React from "react";

export interface FeaturedIntroProps {
  children?: React.ReactNode;
  header?: string;
}

export const FeaturedIntro = ({ children, header }: FeaturedIntroProps) => {
  return (
    <div className="space-y-5 ui-prose-first-last md:space-y-8 bg-idc-orange-300">
      <h2 className="text-idc-blue-700">{header}</h2>
      {children}
    </div>
  );
};

FeaturedIntro.displayName = "Hero.Intro";
