"use client";
import { BlueColumns } from "@/components/BlueColumns";
import { Header } from "@/components/Header";
import React from "react";

export const GetStarted = () => {
  return (
    <BlueColumns cols={2}>
      <BlueColumns.Content>
        <Header
          title="Global Recognition, Local Expertise: Your Documents, Validated
          Everywhere"
          size="md"
          isItalic
        />
        <p>
          From apostilles to attestations, our specialized services ensure
          global recognition for your documents. We're your trusted partner in
          Canadian document apostille, handling everything from authentication
          to legalization, translation, and notarization. Whatever term you've
          heard &ndash; legalization, ratification, and more &ndash; we bring
          clarity and expertise to each step, so your documents make the impact
          they deserve anywhere in the world.
        </p>
        <p>
          View the <a href="#">document types</a> we handle.
        </p>
      </BlueColumns.Content>
      <BlueColumns.Content bgType="dark">
        <p>Form goes here</p>
      </BlueColumns.Content>
    </BlueColumns>
  );
};
