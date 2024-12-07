"use client";
import React from "react";
import { Section } from "@/components/Section";
import { FeatureLead } from "@/components/FeatureLead";
import { CardGroup } from "@/components/CardGroup";
import { Card } from "@/components/Card";
import { CardData } from "@/components/Card/data";

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
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card key={id}>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>

        <CardGroup cols={3}>
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card key={id} hasBorder>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>

        <CardGroup cols={3}>
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card key={id} hasShadow>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>

        <CardGroup cols={3}>
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card key={id} hasBorder hasShadow>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>

        <CardGroup cols={3}>
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card hasBackground key={id}>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>

        <CardGroup cols={3}>
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card hasBackground key={id} hasBorder>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>

        <CardGroup cols={3}>
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card hasBackground key={id} hasShadow>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>

        <CardGroup cols={3}>
          {CardData.slice(0, 3).map(
            ({ id, link, title, excerpt, image, alt, date }) => (
              <Card hasBackground key={id} hasBorder hasShadow>
                <img src={image} alt={alt} width="400" height="300" />
                <h2>{title}</h2>
                <time>{date}</time>
                <p>{excerpt}</p>
                <p>
                  <a href={link}>Link</a>
                </p>
              </Card>
            )
          )}
        </CardGroup>
      </FeatureLead>
    </Section>
  );
};
