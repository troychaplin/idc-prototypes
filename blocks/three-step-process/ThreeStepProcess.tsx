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
          <Card>
            <p>Card #1</p>
          </Card>
          <Card>
            <p>Card #3</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasBorder>
            <p>Card #0</p>
          </Card>
          <Card hasBorder>
            <p>Card #1</p>
          </Card>
          <Card hasBorder>
            <p>Card #3</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasShadow>
            <p>Card #0</p>
          </Card>
          <Card hasShadow>
            <p>Card #1</p>
          </Card>
          <Card hasShadow>
            <p>Card #3</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasBorder hasShadow>
            <p>Card #0</p>
          </Card>
          <Card hasBorder hasShadow>
            <p>Card #1</p>
          </Card>
          <Card hasBorder hasShadow>
            <p>Card #3</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasBackground>
            <p>Card #0</p>
          </Card>
          <Card hasBackground>
            <p>Card #1</p>
          </Card>
          <Card hasBackground>
            <p>Card #3</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasBackground hasBorder>
            <p>Card #0</p>
          </Card>
          <Card hasBackground hasBorder>
            <p>Card #1</p>
          </Card>
          <Card hasBackground hasBorder>
            <p>Card #3</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasBackground hasShadow>
            <p>Card #0</p>
          </Card>
          <Card hasBackground hasShadow>
            <p>Card #1</p>
          </Card>
          <Card hasBackground hasShadow>
            <p>Card #3</p>
          </Card>
        </CardGroup>

        <CardGroup cols={3}>
          <Card hasBackground hasBorder hasShadow>
            <p>Card #0</p>
          </Card>
          <Card hasBackground hasBorder hasShadow>
            <p>Card #1</p>
          </Card>
          <Card hasBackground hasBorder hasShadow>
            <p>Card #3</p>
          </Card>
        </CardGroup>
      </FeatureLead>
    </Section>
  );
};
