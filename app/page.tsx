import { Main } from "@/components/Main";
import { Section } from "@/components/Section";
import { Placeholder } from "@/components/Placeholder";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />

      <Main>
        <Section maxWidth="4xl">
          <Section
            as="div"
            maxWidth="full"
            bgType="blue"
            hasGradient
            notConstrained
          >
            <Placeholder name="hero-banner" />
          </Section>

          <Section as="div" maxWidth="5xl" bgType="blue" notConstrained>
            <Placeholder name="three-step-process" />
          </Section>

          <Section as="div" maxWidth="5xl" bgType="white" notConstrained>
            <Placeholder name="three-step-process" />
          </Section>

          <Section as="div" maxWidth="5xl" bgType="blue" notConstrained>
            <Placeholder name="three-step-process" />
          </Section>

          <Section
            as="div"
            maxWidth="full"
            bgType="white"
            hasGradient
            notConstrained
          >
            <Placeholder name="hero-banner" />
          </Section>

          <Section as="div">
            <Placeholder name="get-started-today" />
          </Section>

          <Section as="div">
            <Placeholder name="client-testimonials" />
          </Section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est, semper fringilla lacus auctor
            in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
            tristique sit amet a leo. Donec lacinia libero orci, id ultricies
            felis dapibus eu.
          </p>

          <Section as="div" maxWidth="7xl" notConstrained>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat urna sed euismod lobortis. Aenean iaculis, elit non
              ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse
              platea dictumst. Phasellus pretium augue est, semper fringilla
              lacus auctor in. Fusce eu lectus lacus. Quisque et magna nec eros
              commodo tristique sit amet a leo. Donec lacinia libero orci, id
              ultricies felis dapibus eu.
            </p>
          </Section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est, semper fringilla lacus auctor
            in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
            tristique sit amet a leo. Donec lacinia libero orci, id ultricies
            felis dapibus eu.
          </p>

          <Section as="div">
            <Placeholder name="frequently-asked-questions" />
          </Section>

          <Section as="div">
            <Placeholder name="news-articles" />
          </Section>
        </Section>
      </Main>
    </>
  );
}
