import { Main } from "@/components/Main";
import { Section } from "@/components/Section";
import { SiteNav } from "@/blocks/SiteNav";
import { HeroHomepage } from "@/blocks/HeroHomepage";
import { LeadIn } from "@/components/LeadIn";
import { IconCards } from "@/blocks/IconCards";
import { NewsCards } from "@/blocks/NewsCards";
import { GetStarted } from "@/blocks/GetStarted";
import { Testimonials } from "@/blocks/Testimonials";
import { Footer } from "@/components/Footer";
import { AccordionList } from "@/blocks/AccordionList";

export default function Home() {
  return (
    <>
      <SiteNav />

      <Main>
        <Section maxWidth="5xl">
          <HeroHomepage />

          <Section as="div" bgType="white">
            <LeadIn
              headerTop="Our Process"
              headerBottom="As simple as A-B-C"
              text="We take the anxiety and uncertainty out of the document apostille process in these three simple steps!"
            />
            <IconCards />
          </Section>

          <Section as="div" maxWidth="6xl" bgType="edge">
            <GetStarted />
          </Section>

          <Section as="div" bgType="blue">
            <Testimonials />
          </Section>

          <Section as="div" maxWidth="3xl" bgType="white">
            <AccordionList />
          </Section>

          <Section as="div" bgType="white">
            <NewsCards />
          </Section>
        </Section>
      </Main>

      <Footer />
    </>
  );
}
