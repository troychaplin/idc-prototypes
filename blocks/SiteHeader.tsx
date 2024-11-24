"use client";
import React from "react";
import { Header } from "@/components/Header";
import Link from "next/link";

export const SiteHeader = () => {
  return (
    <Header>
      <Link href="/">
        <Header.SiteLogo />
      </Link>
      <Header.Navigation />
      <Header.Aside />
    </Header>
  );
};
