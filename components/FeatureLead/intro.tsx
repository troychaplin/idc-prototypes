import React from "react";

export interface FeatureLeadIntroProps {
  headerTop: string;
  headerBottom: string;
  text?: string;
}

export const FeatureLeadIntro = ({
  headerTop,
  headerBottom,
  text,
}: FeatureLeadIntroProps) => {
  return (
    <>
      <div className="grid lg:grid-cols-3 lg:[&>*:last-child]:col-span-2 gap-6 items-center">
        <div className="md:border-r md:border-solid md:border-idc-black-100">
          {headerTop && (
            <h2 className="block text-base italic md:text-lg text-idc-black-500">
              {headerTop}
            </h2>
          )}
          {headerBottom && (
            <h3 className="block text-2xl italic font-semibold md:text-3xl text-idc-orange-600">
              {headerBottom}
            </h3>
          )}
        </div>
        <div>{text && <p className="text-base md:text-lg">{text}</p>}</div>
      </div>
    </>
  );
};

FeatureLeadIntro.displayName = "Hero.Intro";