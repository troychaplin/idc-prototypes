import React from "react";

export interface FeaturedContentProps {
  children: React.ReactNode;
}

export const FeaturedContent = ({ children }: FeaturedContentProps) => {
  return <div className="bg-idc-orange-300">{children}</div>;
};

FeaturedContent.displayName = "Hero.Content";
