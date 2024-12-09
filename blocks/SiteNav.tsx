"use client";
import React from "react";
import { SiteHeader } from "@/components/SiteHeader";
import Link from "next/link";

const navItems = [
  { label: "Services", href: "#" },
  { label: "Process", href: "#" },
  { label: "Documents", href: "#" },
  { label: "Embassies", href: "#" },
  { label: "Resources", href: "#" },
];

export const SiteNav = () => {
  return (
    <SiteHeader>
      <Link href="/" aria-label="Go to homepage">
        <SiteHeader.SiteLogo />
      </Link>
      <SiteHeader.Navigation>
        {navItems.map((item, index) => (
          <li key={index} className="idc-navitem">
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </SiteHeader.Navigation>
      <SiteHeader.Aside />
    </SiteHeader>
  );
};
