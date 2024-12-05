import { FeatureLeadIntro } from "./intro";

export interface FeatureLeadProps {
  children?: React.ReactNode;
  addSpace?: boolean;
}

export const FeatureLeadContainer = ({ children }: FeatureLeadProps) => {
  return <div className={`not-prose grid gap-5 md:gap-10`}>{children}</div>;
};

export const FeatureLead = Object.assign(FeatureLeadContainer, {
  Intro: FeatureLeadIntro,
});
