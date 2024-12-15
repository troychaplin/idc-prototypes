import React from "react";
import { uiMaxWidth } from "../../utils/propClasses";

// Define the types for this component
type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface SectionProps {
  children?: React.ReactNode;
  as?: "section" | "div" | "header";
  maxWidth?: MaxWidthKeys;
  bgType?: "none" | "white" | "blue" | "gradient" | "edge";
}

export const Section = ({
  children,
  as = "section",
  maxWidth = "5xl",
  bgType = "none",
}: SectionProps) => {
  const SectionComponent = as;

  // Set full width bg based on type
  const fullWidthBg = bgType !== "none" ? true : false;

  const maxWidthClass = fullWidthBg
    ? `ui-max-w-child-${maxWidth}`
    : `ui-max-w-${maxWidth}`;

  const mainWrapperClass = fullWidthBg
    ? `ui-section ui-layout w-screen ml-offset-center`
    : `ui-section ui-layout box-border relative w-full ${maxWidthClass}`;

  let bgColor;
  switch (bgType) {
    case "blue":
      bgColor = "bg-idc-blue-100 py-8 md:py-12";

      break;
    case "gradient":
      bgColor = "bg-gradient-to-t from-idc-blue-100 to-white py-8 md:py-12";
      break;
    case "edge":
      bgColor = "bg-white-blue-edge py-8 md:py-12";
      break;
    default:
      bgColor = "bg-white";
  }

  return (
    <SectionComponent className={`${mainWrapperClass} ${bgColor}`}>
      {fullWidthBg ? (
        <div className={`${maxWidthClass} px-0 md:px-8`}>{children}</div>
      ) : (
        <>{children}</>
      )}
    </SectionComponent>
  );
};
