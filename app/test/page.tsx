import Image from "next/image";
import { Main } from "@/components/Main/Main";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Section } from "@/components/Section/Section";

export default function Content() {
  return (
    <>
      <main>
        <Section>
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>

          <Section as="section" maxWidth="5xl" notConstrained>
            <Placeholder name="max 5xl with no constraints" />
          </Section>

          <Section as="section" maxWidth="7xl" notConstrained>
            <Placeholder name="max 7xl with no constraints" />
          </Section>

          <Section as="section" maxWidth="full" notConstrained>
            <Placeholder name="max full with no constraints" />
          </Section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>

          <section className="my-8 section-not-constrained">
            <figure className="ui-image size-full">
              <Image
                className=""
                src="https://picsum.photos/seed/picsum/1200/400"
                alt="Images require alt text"
                width={1200}
                height={300}
                decoding="async"
              />
            </figure>
          </section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>
          <figure className="ui-image alignleft size-medium">
            <Image
              className=""
              src="https://picsum.photos/seed/picsum/300/180"
              alt="Images require alt text"
              width={300}
              height={180}
              decoding="async"
            />
          </figure>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>

          <Section as="div" maxWidth="5xl">
            <Placeholder name="max 5xl with constraints" />
          </Section>

          <Section as="div" maxWidth="5xl" notConstrained>
            <Placeholder name="max 5xl with no constraints" />
          </Section>

          <Section as="div" maxWidth="7xl">
            <Placeholder name="max 7xl with constraints" />
          </Section>

          <Section as="div" maxWidth="7xl" notConstrained>
            <Placeholder name="max 7xl with no constraints" />
          </Section>

          <Section as="div" maxWidth="full">
            <Placeholder name="max full with constraints" />
          </Section>

          <Section as="div" maxWidth="full" notConstrained>
            <Placeholder name="max full with no constraints" />
          </Section>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit.
          </p>

          <figure className="ui-image size-full">
            <Image
              className=""
              src="https://picsum.photos/id/20/904/678"
              alt="Images require alt text"
              width={904}
              height={678}
              decoding="async"
            />
          </figure>
          <p>
            Quisque erat diam, porta quis libero eget, ultrices ornare nisi.
            Vestibulum accumsan mauris sed elit maximus dignissim. Suspendisse
            ac facilisis felis. Mauris rhoncus mauris mauris, a porttitor diam
            pellentesque ut.
          </p>
        </Section>
      </main>
    </>
  );
}
