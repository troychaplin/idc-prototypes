"use client";
import React from "react";
import { CardGroup } from "@/components/CardGroup";
import { CardData } from "@/components/Card/data";
import { Card } from "@/components/Card";

export const NewsCards = () => {
  return (
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
  );
};
