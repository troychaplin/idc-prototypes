import { uiMaxWidth } from "../../utils/propClasses";
import { HeroContent } from "./content";
import { HeroImage } from "./image";

type MaxWidthKeys = keyof typeof uiMaxWidth;

export interface HeroProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  gap?: number;
}

export const HeroContainer = ({ children, maxWidth = "5xl" }: HeroProps) => {
  return (
    <div
      className={`not-prose ui-item-spacing ${uiMaxWidth[maxWidth]} mx-auto grid md:grid-cols-2 gap-6`}
    >
      {children}
    </div>
  );
};

export const Hero = Object.assign(HeroContainer, {
  Content: HeroContent,
  Image: HeroImage,
});
