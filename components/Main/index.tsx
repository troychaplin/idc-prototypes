import React from "react";

export interface MainProps {
  children: React.ReactNode;
  noProse?: boolean;
}

export const Main = ({ children, noProse }: MainProps) => {
  const proseClass = noProse ? "" : "prose md:prose-lg lg:prose-xl max-w-none";
  // const proseClass = "";

  return (
    <main
      className={`ui-main flex justify-center font-sans px-6 py-5 md:p-8 ${proseClass}`}
    >
      {children}
    </main>
  );
};
