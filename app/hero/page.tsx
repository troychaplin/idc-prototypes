import { Main } from "@/components/Main";
import { Section } from "@/components/Section";
import { SiteNav } from "@/blocks/SiteNav";
import { HeroHomepage } from "@/blocks/HeroHomepage";
import { Hero } from "@/components/Hero";
import { ButtonGroup } from "@/components/ButtonGroup";
import { Button } from "@/components/Button";

export default function Home() {
  return (
    <>
      <SiteNav />

      <Main>
        <Section maxWidth="4xl">
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

          <Hero>
            <Hero.Content title="The document apostille process made simple">
              <p>
                We expertly manage all aspects of the document apostille &ndash;
                authentication & legalization &ndash; attestation &ndash;
                process for our clients. If you need to present Canadian
                documents in a foreign jurisdiction we can help!
              </p>
              <ButtonGroup>
                <Button label="Primary Button" />
                <Button label="Secondary Button" textColor="dark" isOutline />
              </ButtonGroup>
            </Hero.Content>
          </Hero>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est. Fusce eu lectus lacus.
            Quisque et magna nec eros commodo tristique sit amet a leo. Donec
            lacinia libero orci, id ultricies felis dapibus eu.
          </p>

          <Hero>
            <Hero.Content title="The document apostille process made simple">
              <p>
                We expertly manage all aspects of the document apostille &ndash;
                authentication & legalization &ndash; attestation &ndash;
                process for our clients. If you need to present Canadian
                documents in a foreign jurisdiction we can help!
              </p>
              <ButtonGroup>
                <Button label="Primary Button" />
                <Button label="Secondary Button" textColor="dark" isOutline />
              </ButtonGroup>
            </Hero.Content>
            <Hero.Media>
              <p>Media</p>
            </Hero.Media>
          </Hero>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est. Fusce eu lectus lacus.
            Quisque et magna nec eros commodo tristique sit amet a leo. Donec
            lacinia libero orci, id ultricies felis dapibus eu.
          </p>

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
        </Section>
      </Main>
    </>
  );
}
