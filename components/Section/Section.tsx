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

  const maxWidthClass = notConstrained
    ? `ui-max-w-child-${maxWidth}`
    : `ui-max-w-${maxWidth}`;

  const mainWrapperClass = notConstrained
    ? "ui-section ui-layout w-screen ml-offset-center"
    : `ui-section ui-layout box-border relative w-full ${maxWidthClass}`;

  return (
    <SectionComponent className={mainWrapperClass}>
      {notConstrained ? (
        <div className={`${maxWidthClass}`}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </SectionComponent>
  );
};
