"use client";
import React from "react";
import { Section } from "@/components/Section";
import { FeatureLead } from "@/components/FeatureLead";
import { CardGroup } from "@/components/CardGroup";
import { Card } from "@/components/Card";

export const ThreeStepProcess = () => {
  return (
    <Section as="div">
      <FeatureLead>
        <FeatureLead.Intro
          headerTop="Our Process"
          headerBottom="As simple as A-B-C"
          text="We take the anxiety and uncertainty out of the document apostille process in these three simple steps!"
        />

        <CardGroup cols={3}>
          <Card>
            <p>Card #0</p>
          </Card>
          <Card isRounded>
            <p>Card #0</p>
          </Card>
          <Card hasBorder>
            <p>Card #0</p>
          </Card>
          <Card hasShadow>
            <p>Card #0</p>
          </Card>
          <Card hasShadow hasBorder>
            <p>Card #0</p>
          </Card>
          <Card isRounded hasShadow hasBorder>
            <p>Card #0</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasBackground>
            <p>Card #0</p>
          </Card>
          <Card isRounded hasBackground>
            <p>Card #0</p>
          </Card>
          <Card hasBorder hasBackground>
            <p>Card #0</p>
          </Card>
          <Card hasShadow hasBackground>
            <p>Card #0</p>
          </Card>
          <Card hasShadow hasBorder hasBackground>
            <p>Card #0</p>
          </Card>
          <Card isRounded hasShadow hasBorder hasBackground>
            <p>Card #0</p>
          </Card>
        </CardGroup>
      </FeatureLead>
    </Section>
  );
};
