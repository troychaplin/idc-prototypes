"use client";
import React from "react";
import { CardGroup } from "@/components/CardGroup";
import { CardData } from "@/components/Card/data";
import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export const NewsCards = () => {
  return (
    <>
      <Header
        title="Stay Informed, Stay Empowered"
        size="md"
        weight="bold"
        isItalic
        isCenter
      >
        <p>
          Dive into our articles to uncover everything you need to know about
          the apostille process—also called authentication, legalization, or
          attestation. Get clear insights and expert advice to make your
          document journey smooth and stress-free!
        </p>
      </Header>

      <CardGroup cols={3}>
        {CardData.slice(0, 3).map(
          ({ id, link, title, excerpt, image, alt, date }) => (
            <Card key={id}>
              <Card.Figure>
                <img
                  className="rounded-md"
                  src={image}
                  alt={alt}
                  width="400"
                  height="300"
                />
              </Card.Figure>
              <Card.Header title={title} date={date} />
              <Card.Content text={excerpt} link={link} isExcerpt />
            </Card>
          )
        )}
      </CardGroup>
    </>
  );
};
