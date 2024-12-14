"use client";
import { Card } from "@/components/Card";
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
        <div
          className="px-8 py-6 mb-8 bg-white rounded-md md:mb-10 break-inside-avoid"
          style={{ height: "180px" }}
        >
          1
        </div>
        <div
          className="px-8 py-6 mb-8 bg-white rounded-md md:mb-10 break-inside-avoid"
          style={{ height: "270px" }}
        >
          2
        </div>
        <div
          className="px-8 py-6 mb-8 bg-white rounded-md md:mb-10 break-inside-avoid"
          style={{ height: "250px" }}
        >
          3
        </div>
        <div
          className="px-8 py-6 mb-8 bg-white rounded-md md:mb-10 break-inside-avoid"
          style={{ height: "300px" }}
        >
          4
        </div>
        <div
          className="px-8 py-6 mb-8 bg-white rounded-md md:mb-10 break-inside-avoid"
          style={{ height: "280px" }}
        >
          5
        </div>
        <div
          className="px-8 py-6 mb-8 bg-white rounded-md md:mb-10 break-inside-avoid"
          style={{ height: "220px" }}
        >
          6
        </div>
      </CardGroup>
    </>
  );
};
