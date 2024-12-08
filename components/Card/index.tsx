import { uiMaxWidth } from "../../utils/propClasses";
import { CardHeader } from "./header";
import { CardExcerpt } from "./excerpt";
import { CardFigure } from "./figure";

type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface CardProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  addSpace?: boolean;
}

export const CardContainer = ({ children, maxWidth, addSpace }: CardProps) => {
  const cardWidth = maxWidth ? uiMaxWidth[maxWidth] : "";
  const padding = addSpace ? "idc-card--has-image" : "";

  return (
    <div
      className={`not-prose idc-card bg-white rounded-md ${cardWidth} ${padding}`}
    >
      {children}
    </div>
  );
};

export const Card = Object.assign(CardContainer, {
  Figure: CardFigure,
  Header: CardHeader,
  Excerpt: CardExcerpt,
});
