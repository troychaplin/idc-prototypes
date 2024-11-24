"use client";
import React, { useState, useEffect, useCallback } from "react";
import { SiteLogo } from "./SiteLogo";
import { Navigation } from "./Navigation";
import { Aside } from "./Aside";

export interface HeaderProps {
  children?: React.ReactNode;
}

const HeaderContainer = ({ children }: HeaderProps) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-5 bg-white idc-header ui-max-w-child-7xl md:px-8 md:py-6 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between gap-2">{children}</div>
    </header>
  );
};

export const Header = Object.assign(HeaderContainer, {
  SiteLogo,
  Navigation,
  Aside,
});
