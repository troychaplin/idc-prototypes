"use client";
import React, { useState, useEffect } from "react";
import { SiteLogo } from "./SiteLogo";
import { Navigation } from "./Navigation";
import { Aside } from "./Aside";

export const HeaderContainer = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-5 bg-white idc-header ui-max-w-child-5xl md:px-8 md:py-6 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between bg-slate-200">
        <a href="/" className="idc-logo">
          IDC
        </a>
        <nav>Navigation</nav>
        <aside>Aside</aside>
      </div>
    </header>
  );
};

export const Header = Object.assign(HeaderContainer, {
  SiteLogo,
  Navigation,
  Aside,
});
