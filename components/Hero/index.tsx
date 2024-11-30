import { HeroContent } from "./content";
import { HeroImage } from "./image";

export interface HeroProps {
  children?: React.ReactNode;
  addSpace?: boolean;
}

export const HeroContainer = ({ children, addSpace = false }: HeroProps) => {
  const space = addSpace ? "md:mt-8 md:mb-12" : "";
  return <div className={`grid gap-6 md:grid-cols-2 ${space}`}>{children}</div>;
};

export const Hero = Object.assign(HeroContainer, {
  Content: HeroContent,
  Image: HeroImage,
});
