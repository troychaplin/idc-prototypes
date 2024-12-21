"use client";
import React from "react";
import { CardGroup } from "@/components/CardGroup";
import { CardData } from "@/components/Card/data";
import { Card } from "@/components/Card";

export const IconCards = () => {
  return (
    <CardGroup cols={3}>
      {CardData.slice(0, 3).map(({ id, link, title, excerpt, iconName }) => (
        <Card key={id}>
          <Card.Figure iconName={iconName} />
          <Card.Header title={title} />
          <Card.Content text={excerpt} />
          <Card.Footer>
            <a
              href={link}
              className="idc-button idc-button--light-orange idc-button--sm idc-button--outline"
            >
              Learn more
            </a>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
  );
};
