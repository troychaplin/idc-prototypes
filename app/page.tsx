import { Main } from "@/components/Main";
import { Section } from "@/components/Section";
import { SiteNav } from "@/blocks/SiteNav";
import { HeroHomepage } from "@/blocks/HeroHomepage";
import { LeadIn } from "@/components/LeadIn";
import { IconCards } from "@/blocks/IconCards";
import { NewsCards } from "@/blocks/NewsCards";
import { GetStarted } from "@/blocks/GetStarted";
import { Header } from "@/components/Header";
import { Testimonials } from "@/blocks/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <SiteNav />

      <Main>
        <Section maxWidth="4xl">
          <Section as="div" maxWidth="6xl" bgType="gradient">
            <HeroHomepage />
          </Section>

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

          <Section as="div" bgType="white">
            <Header
              title="Stay Informed, Stay Empowered"
              size="md"
              isItalic
              isCenter
            >
              <p>
                Dive into our articles to uncover everything you need to know
                about the apostille process—also called authentication,
                legalization, or attestation. Get clear insights and expert
                advice to make your document journey smooth and stress-free!
              </p>
            </Header>
            <NewsCards />
          </Section>
        </Section>
      </Main>

      <Footer />
    </>
  );
}
