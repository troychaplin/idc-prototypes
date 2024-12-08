"use client";
import { BlueColumns } from "@/components/BlueColumns";
import React from "react";

export const GetStarted = () => {
  return (
    <BlueColumns>
      <BlueColumns.Content>
        <h2>
          Global Recognition, Local Expertise: Your Documents, Validated
          Everywhere
        </h2>
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
