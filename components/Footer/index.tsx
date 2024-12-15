import React from "react";
import { Columns } from "../Column";

export interface FooterProps {
  children?: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return (
    <footer className="border-b-[80px] idc-footer bg-idc-blue-700 py-6 md:py-10 border-idc-blue-900">
      <Columns cols="1/3">
        <div className="h-48 bg-white/10"></div>
        <div className="h-48 bg-white/10">{children}</div>
      </Columns>
    </footer>
  );
};
