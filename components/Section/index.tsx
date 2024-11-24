import React from "react";
import { uiMaxWidth } from "../../utils/propClasses";

// Define the types for this component
type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface SectionProps {
  children?: React.ReactNode;
  as?: "section" | "div" | "header";
  maxWidth?: MaxWidthKeys;
  notConstrained?: boolean;
  bgType?: "blue" | "white";
  hasGradient?: boolean;
}

export const Section = ({
  children,
  as = "section",
  maxWidth = "5xl",
  notConstrained,
  bgType = "white",
  hasGradient,
}: SectionProps) => {
  const SectionComponent = as;

  const maxWidthClass = notConstrained
    ? `ui-max-w-child-${maxWidth}`
    : `ui-max-w-${maxWidth}`;

  const mainWrapperClass = notConstrained
    ? `ui-section ui-layout w-screen ml-offset-center px-6 md:px-8`
    : `ui-section ui-layout box-border relative w-full ${maxWidthClass}`;

  let bgColor;

  bgColor = bgType === "blue" ? "bg-idc-blue-100 py-10" : "bg-white";
  if (hasGradient) {
    bgColor =
      bgType === "blue"
        ? "bg-gradient-to-t from-idc-blue-100 to-white py-10"
        : "bg-gradient-to-t from-white to-idc-blue-100";
  }

  return (
    <SectionComponent className={`${mainWrapperClass} ${bgColor}`}>
      {notConstrained ? (
        <div className={maxWidthClass}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </SectionComponent>
  );
};
