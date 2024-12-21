"use client";
import React from "react";
import { Hero } from "@/components/Hero";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export const HeroHomepage = () => {
  return (
    <Hero maxWidth="6xl" bgType="gradient" cols={2}>
      <Hero.Content
        title="The document apostille process made simple"
        headerType="h1"
      >
        <p>
          We expertly manage all aspects of the document apostille &ndash;
          authentication & legalization &ndash; attestation &ndash; process for
          our clients. If you need to present Canadian documents in a foreign
          jurisdiction we can help!
        </p>
        <ButtonGroup>
          <Button
            label="Get Started Now"
            color="dark-blue"
            // isOutline
            onClick={() => {
              window.location.href = "https://www.idocscanada.ca";
            }}
          />
        </ButtonGroup>
      </Hero.Content>
      <Hero.Media>
        <p>Media</p>
      </Hero.Media>
    </Hero>
  );
};
