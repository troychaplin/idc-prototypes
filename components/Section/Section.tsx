import React from "react";
import { uiMaxWidth } from "@/utils/propClasses";

type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface SectionProps {
  children?: React.ReactNode;
  as?: "section" | "div";
  maxWidth?: MaxWidthKeys;
  notConstrained?: boolean;
}

export const Section = ({
  children,
  as = "section",
  maxWidth = "5xl",
  notConstrained,
}: SectionProps) => {
  const SectionComponent = as;
  const maxWidthChildren = maxWidth ? `ui-max-width-${maxWidth}` : "";
  const ignoreParentWidth = notConstrained ? "ui-no-max-width" : "";

  return (
    <SectionComponent
      className={`ui-layout-component ui-section ${maxWidthChildren} ${ignoreParentWidth}`}
    >
      {children}
    </SectionComponent>
  );
};
