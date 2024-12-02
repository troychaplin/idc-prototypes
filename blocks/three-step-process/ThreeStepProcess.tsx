"use client";
import React from "react";
import { Section } from "@/components/Section";
import { Featured } from "@/components/Featured";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export const ThreeStepProcess = () => {
  return (
    <Section as="div">
      <Featured>
        <Featured.Intro header="The document apostille process made simple">
          <p>Intro</p>
        </Featured.Intro>
        <Featured.Content>
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
        </Featured.Content>
      </Featured>
    </Section>
  );
};
