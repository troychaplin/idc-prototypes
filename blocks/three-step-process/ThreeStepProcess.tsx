"use client";
import React from "react";
import { Section } from "@/components/Section";
import { Featured } from "@/components/Featured";
import { Column } from "@/components/Column";

export const ThreeStepProcess = () => {
  return (
    <Section as="div">
      <Featured>
        <Featured.Intro
          headerTop="Our Process"
          headerBottom="As simple as A-B-C"
          text="We take the anxiety and uncertainty out of the document apostille process in these three simple steps!"
        />
        <Column cols={3} gap={20} maxWidth="5xl">
          <Column.Content>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              gravida orci elit, at consectetur lectus iaculis vel. Cras non
              fringilla velit, a posuere felis. Mauris faucibus dui ultricies
              ultrices luctus. Aliquam erat volutpat. Vestibulum imperdiet, enim
              non elementum pulvinar, lacus quam vestibulum eros, ut eleifend
              sem dui ut quam.
            </p>
          </Column.Content>
          <Column.Content>
            <p>
              Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim.
              Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem
              est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante
              urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo
              a arcu tempor, ac tempor magna faucibus.
            </p>
          </Column.Content>
          <Column.Content>
            <p>
              Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim.
              Nullam sodales eros ut velit ullamcorper fringilla. Fusce a sem
              est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante
              urna. Nullam finibus sed nunc ac volutpat. Maecenas lacinia justo
              a arcu tempor, ac tempor magna faucibus.
            </p>
          </Column.Content>
        </Column>
      </Featured>
    </Section>
  );
};
