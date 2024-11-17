import { Main } from "@/components/Main/Main";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Section } from "@/components/Section/Section";

export default function Home() {
  return (
    <>
      <header>Header Row</header>

      <Main>
        <Section>
          <Placeholder name="hero-banner" />
          <Placeholder name="three-step-process" />
          <Placeholder name="get-started-today" />
          <Placeholder name="client-testimonials" />
        </Section>

        <Section>
          <Placeholder name="frequently-asked-questions" />
        </Section>

        <Section>
          <Placeholder name="news-articles" />
        </Section>
      </Main>
    </>
  );
}
