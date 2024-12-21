import { Main } from "@/components/Main";
import { Section } from "@/components/Section";
import { SiteNav } from "@/blocks/SiteNav";
import { HeroHomepage } from "@/blocks/HeroHomepage";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <SiteNav />

      <Main>
        <Section maxWidth="5xl">
          <HeroHomepage />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est. Fusce eu lectus lacus.
            Quisque et magna nec eros commodo tristique sit amet a leo. Donec
            lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <ButtonGroup>
            <Button label="Light Blue" color="light-blue" />
            <Button label="Dark Blue" color="dark-blue" />
            <Button label="Light Orange" color="light-orange" />
            <Button label="Dark Orange" color="dark-orange" />
            <Button label="White" color="white" />
          </ButtonGroup>

          <ButtonGroup>
            <Button label="Light Blue" color="light-blue" isOutline />
            <Button label="Dark Blue" color="dark-blue" isOutline />
            <Button label="Light Orange" color="light-orange" isOutline />
            <Button label="Dark Orange" color="dark-orange" isOutline />
            <Button label="White" color="white" isOutline />
          </ButtonGroup>

          <ButtonGroup>
            <Button label="Light Blue" color="light-blue" isOutline noBg />
            <Button label="Dark Blue" color="dark-blue" isOutline noBg />
            <Button label="Light Orange" color="light-orange" isOutline noBg />
            <Button label="Dark Orange" color="dark-orange" isOutline noBg />
            <Button label="White" color="white" isOutline noBg />
          </ButtonGroup>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est. Fusce eu lectus lacus.
            Quisque et magna nec eros commodo tristique sit amet a leo. Donec
            lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <ButtonGroup>
            <Button label="Light Blue" color="light-blue" size="sm" />
            <Button label="Dark Blue" color="dark-blue" size="sm" />
            <Button label="Light Orange" color="light-orange" size="sm" />
            <Button label="Dark Orange" color="dark-orange" size="sm" />
            <Button label="White" color="white" size="sm" />
          </ButtonGroup>

          <ButtonGroup>
            <Button label="Light Blue" color="light-blue" size="sm" isOutline />
            <Button label="Dark Blue" color="dark-blue" size="sm" isOutline />
            <Button
              label="Light Orange"
              color="light-orange"
              size="sm"
              isOutline
            />
            <Button
              label="Dark Orange"
              color="dark-orange"
              size="sm"
              isOutline
            />
            <Button label="White" color="white" size="sm" isOutline />
          </ButtonGroup>

          <ButtonGroup>
            <Button
              label="Light Blue"
              color="light-blue"
              size="sm"
              isOutline
              noBg
            />
            <Button
              label="Dark Blue"
              color="dark-blue"
              size="sm"
              isOutline
              noBg
            />
            <Button
              label="Light Orange"
              color="light-orange"
              size="sm"
              isOutline
              noBg
            />
            <Button
              label="Dark Orange"
              color="dark-orange"
              size="sm"
              isOutline
              noBg
            />
            <Button label="White" color="white" size="sm" isOutline noBg />
          </ButtonGroup>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est. Fusce eu lectus lacus.
            Quisque et magna nec eros commodo tristique sit amet a leo. Donec
            lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est. Fusce eu lectus lacus.
            Quisque et magna nec eros commodo tristique sit amet a leo. Donec
            lacinia libero orci, id ultricies felis dapibus eu.
          </p>
        </Section>
      </Main>
    </>
  );
}
