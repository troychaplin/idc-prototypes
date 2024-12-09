export const uiMaxWidth = {
  xs: "max-w-xs",
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  max: "max-w-screen-2xl",
  full: "max-w-full",
};

export const uiGridColumns = {
  1: "",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-2 lg:grid-cols-4",
  6: "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6",
  "1/3": "lg:grid-cols-3 lg:[&>*:last-child]:col-span-2",
  "2/3": "lg:grid-cols-3 lg:[&>*:first-child]:col-span-2",
  "60/40": "md:grid-cols-2 lg:grid-cols-60-40",
};

export const uiFlexRow = {
  sm: "sm:flex-row",
  md: "md:flex-row",
  lg: "lg:flex-row",
};

export const uiFlexCol = {
  sm: "sm:flex-col",
  md: "md:flex-col",
  lg: "lg:flex-col",
};

export const uiRoundedCorners = {
  none: "rounded-none",
  sm: "rounded-sm",
  base: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  full: "rounded-full",
};

export const uiDropShadow = {
  none: "shadow-none",
  base: "shadow",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
  "2xl": "shadow-2xl",
};

export const headerSizeClasses = {
  sm: `text-lg md:text-xl lg:text-2xl lg:leading-[2rem] font-bold`,
  md: `text-xl md:text-2xl lg:text-3xl lg:leading-[2.5rem] font-bold`,
  lg: `text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] font-bold`,
  xl: `text-3xl md:text-4xl lg:text-5xl lg:leading-[3.5rem] font-medium`,
};
