"use client";
import React from "react";
import { Section } from "@/components/Section";
import { Hero } from "@/components/Hero";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export const HeroDocApostille = () => {
  return (
    <Section as="div" bgType="blue" hasGradient>
      <Hero addSpace>
        <Hero.Content header="The document apostille process made simple">
          <p>
            We expertly manage all aspects of the document apostille &ndash;
            authentication & legalization &ndash; attestation &ndash; process
            for our clients. If you need to present Canadian documents in a
            foreign jurisdiction we can help!
          </p>
          <ButtonGroup>
            <Button color="orange" label="Orange Button" />
            <Button label="Blue Button" />
          </ButtonGroup>
        </Hero.Content>
        <Hero.Image>
          <p>Image</p>
        </Hero.Image>
      </Hero>
    </Section>
  );
};
