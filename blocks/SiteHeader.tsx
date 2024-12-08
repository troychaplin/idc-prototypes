"use client";
import React from "react";
import { Header } from "@/components/Header";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "#" },
  { label: "Process", href: "#" },
  { label: "Documents", href: "#" },
  { label: "Embassies", href: "#" },
  { label: "Resources", href: "#" },
];

export const SiteHeader = () => {
  return (
    <Header>
      <Link href="/" aria-label="Go to homepage">
        <Header.SiteLogo />
      </Link>
      <Header.Navigation>
        {navItems.map((item, index) => (
          <li key={index} className="idc-navitem">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </Header.Navigation>
      <Header.Aside />
    </Header>
  );
};
