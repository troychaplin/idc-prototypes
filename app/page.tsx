import { Main, Section, Placeholder } from "@troychaplin79/idc-ui-kit";

export default function Home() {
  return (
    <>
      <header>Header Row</header>

      <Main>
        <Section maxWidth="4xl">
          <Section maxWidth="full" notConstrained isBlue>
            <Placeholder name="hero-banner" />
          </Section>

          <Section maxWidth="5xl" notConstrained isBlue>
            <Placeholder name="three-step-process" />
          </Section>

          <Section>
            <Placeholder name="get-started-today" />
          </Section>

          <Section>
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

          <Section maxWidth="7xl" notConstrained>
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

          <Section>
            <Placeholder name="frequently-asked-questions" />
          </Section>

          <Section>
            <Placeholder name="news-articles" />
          </Section>
        </Section>
      </Main>
    </>
  );
}
