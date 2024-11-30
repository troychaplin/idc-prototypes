import React from "react";
import { ButtonGroup } from "../ButtonGroup";
import { Button } from "../Button";

export interface HeroContentProps {
  children: React.ReactNode;
}

export const HeroContent = ({ children }: HeroContentProps) => {
  return (
    <div>
      <h2>Header</h2>
      <p>
        We expertly manage all aspects of the document apostille &ndash;
        authentication & legalization &ndash; attestation &ndash; process for
        our clients. If you need to present Canadian documents in a foreign
        jurisdiction we can help!
      </p>
      <ButtonGroup>
        <Button label="Button One" />
        <Button
          color="orange"
          colorStrength={100}
          label="Button Two"
          textColor="dark"
        />
        <Button
          color="blue"
          colorStrength={300}
          isOutline
          label="Button Three"
          textColor="dark"
        />
      </ButtonGroup>
      {children}
    </div>
  );
};

HeroContent.displayName = "Hero.Content";
