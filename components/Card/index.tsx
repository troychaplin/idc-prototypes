import { uiMaxWidth } from "../../utils/propClasses";

type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface CardProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  isRounded?: boolean;
  hasShadow?: boolean;
  hasBorder?: boolean;
  hasBackground?: boolean;
}

export const Card = ({
  children,
  maxWidth,
  hasShadow,
  hasBorder,
  hasBackground,
}: CardProps) => {
  const cardWidth = maxWidth ? uiMaxWidth[maxWidth] : "";
  const cardShadow = hasShadow ? "shadow-md" : "";
  const cardBorder = hasBorder ? "border border-solid" : "";
  const cardBackground = hasBackground ? "bg-idc-black-50" : "bg-white";

  const cardSpacing =
    hasBorder || hasBackground || hasShadow ? "px-5 py-4" : "";

  return (
    <div
      className={`idc-card ${cardWidth} ${cardSpacing} ${cardBackground} ${cardShadow} ${cardBorder} border-idc-black-100 rounded-md`}
    >
      {children}
    </div>
  );
};
