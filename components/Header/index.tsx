import React from "react";
import { headerSizeClasses } from "../../utils/propClasses";

type headerSizeKeys = keyof typeof headerSizeClasses;

export interface HeaderProps {
  children?: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  title: string;
  size?: headerSizeKeys;
  isCenter?: boolean;
  isItalic?: boolean;
}

export const Header = ({
  children,
  as = "h2",
  title,
  size = "lg",
  isCenter,
  isItalic,
}: HeaderProps) => {
  const HeaderComponent = as;
  const centerContent = isCenter ? "text-center mx-auto" : "";
  const italicContent = isItalic ? "italic" : "";

  // Set spacing for header with underline
  let headerPadding;

  switch (size) {
    case "sm":
      headerPadding = "pb-3.5";
      break;
    case "md":
      headerPadding = "pb-4";
      break;
    case "lg":
      headerPadding = "pb-5";
      break;
    case "xl":
      headerPadding = "pb-6";
      break;
    default:
      headerPadding = "pb-5";
      break;
  }

  return (
    <header
      className={`max-w-4xl ui-prose-first-last idc-component ${centerContent}`}
    >
      <HeaderComponent
        className={`not-prose text-idc-blue-800 ${headerSizeClasses[size]} ${italicContent} ${headerPadding} last:pb-0`}
      >
        {title}
      </HeaderComponent>
      {children}
    </header>
  );
};
