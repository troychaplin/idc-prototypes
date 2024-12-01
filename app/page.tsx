import { Main } from "@/components/Main";
import { Section } from "@/components/Section";
import { Placeholder } from "@/components/Placeholder";
import { SiteHeader } from "@/blocks/templates/SiteHeader";
import { HeroDocApostille } from "@/blocks/hero-banners/HeroDocApostille";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <Main>
        <Section>
          <HeroDocApostille />

          <Section as="div">
            <Placeholder name="three-step-process" />
          </Section>

          <Section as="div">
            <Placeholder name="get-started-today" />
          </Section>

          <Section as="div" bgType="blue">
            <Placeholder name="client-testimonials" />
          </Section>

          <Section as="div">
            <Placeholder name="frequently-asked-questions" />
          </Section>

          <Section as="div">
            <Placeholder name="articles" />
          </Section>

          <h2>Not Wrapped</h2>
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
            <h2>Inside Simple Section Wrapper</h2>
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

          <Section as="div">
            <h2>Inside Constrained Section Wrapper</h2>
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

          <figure className="ui-figure alignleft size-medium">
            <Image
              className=""
              src="https://picsum.photos/id/20/300/225"
              alt="Images require alt text"
              width={300}
              height={225}
              decoding="async"
            />
          </figure>

          <p>
            Quisque erat diam, porta quis libero eget, ultrices ornare nisi.
            Vestibulum accumsan mauris sed elit maximus dignissim. Suspendisse
            ac facilisis felis. Mauris rhoncus mauris mauris, a porttitor diam
            pellentesque ut. Sed commodo posuere interdum. Cras aliquet mauris
            sit amet lacus eleifend, ac maximus sem porta. Curabitur consectetur
            tortor sapien, in maximus orci elementum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Duis et massa mattis enim sagittis pellentesque. Sed
            turpis ex, sollicitudin sed est et, pulvinar malesuada nunc. Morbi
            pulvinar nibh nec lectus ullamcorper, vel semper augue cursus. Duis
            dapibus nisl eget purus dignissim, vel sollicitudin diam fermentum.
          </p>

          <Section as="div">
            <Placeholder name="testing" />
          </Section>
        </Section>
      </Main>
    </>
  );
}
