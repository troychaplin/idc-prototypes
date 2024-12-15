"use client";
import React from "react";
import { Header } from "@/components/Header";
import { Definition } from "@/components/Definition";
import { DefinitionData } from "@/components/Definition/data";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export const AccordionList = () => {
  return (
    <>
      <Header
        title="Got questions? Let us help you!"
        size="md"
        weight="bold"
        isItalic
        isCenter
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
          urna sed euismod lobortis. Aenean iaculis, elit non ornare maximus,
          ligula mauris ultricies felis, sed vestibulum arcu ipsum vitae elit.
          Nullam sit amet interdum massa reprehenderit ducimus.
        </p>
      </Header>

      <Definition>
        {DefinitionData.slice(0, 5).map(({ id, title, content }) => (
          <Definition.Accordion key={id} title={title}>
            <p>{content}</p>
          </Definition.Accordion>
        ))}
      </Definition>
    </>
  );
};
