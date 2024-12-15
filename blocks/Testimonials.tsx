"use client";
import { Card } from "@/components/Card";
import { CardData } from "@/components/Card/data";
import { CardGroup } from "@/components/CardGroup";
import { Header } from "@/components/Header";
import React from "react";

export const Testimonials = () => {
  return (
    <>
      <Header title="What our Clients are Saying" size="md" isItalic isCenter>
        <p>
          Discover why clients trust us for their document needs. Here's what
          they have to say about our expertise, efficiency, and commitment to
          seamless service.
        </p>
      </Header>

      <CardGroup cols={3} layout="masonry">
        {CardData.slice(0, 9).map(({ id, quote, author, image }) => (
          <Card key={id}>
            <Card.Quote cite={author}>
              {quote}
              <Card.Cite>
                <img src={image} alt="Person's Name" />
                {author}
              </Card.Cite>
            </Card.Quote>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};
