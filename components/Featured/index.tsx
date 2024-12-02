import { FeaturedContent } from "./content";
import { FeaturedIntro } from "./intro";

export interface FeaturedProps {
  children?: React.ReactNode;
  addSpace?: boolean;
}

export const FeaturedContainer = ({ children }: FeaturedProps) => {
  return <div className={`not-prose grid gap-6`}>{children}</div>;
};

export const Featured = Object.assign(FeaturedContainer, {
  Content: FeaturedContent,
  Intro: FeaturedIntro,
});
