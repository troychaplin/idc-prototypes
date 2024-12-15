import { Main } from "@/components/Main";
import { Section } from "@/components/Section";
import { SiteNav } from "@/blocks/SiteNav";
import Image from "next/image";
import { Placeholder } from "@/components/Placeholder";
import { HeroHomepage } from "@/blocks/HeroHomepage";

export default function Home() {
  return (
    <>
      <SiteNav />

      <Main>
        <Section maxWidth="4xl">
          <HeroHomepage />

          <h1>Header One</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est,{" "}
            <a href="#">semper fringilla lacus</a> auctor in. Fusce eu lectus
            lacus. Quisque et magna nec eros commodo tristique sit amet a leo.
            Donec lacinia libero orci, id ultricies felis dapibus eu.
          </p>
          <h2>Header Two</h2>
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
          <h3>Header Three</h3>
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
          <h4>Header Four</h4>
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
          <h5>Header Five</h5>
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
          <h6>Header Six</h6>
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

          <Section maxWidth="2xl" bgType="blue">
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
          <h1>Header One</h1>
          <h2>Header Two</h2>
          <h3>
            Header <a href="#">Three</a>
          </h3>
          <h4>Header Four</h4>
          <h5>Header Five</h5>
          <h6>Header Six</h6>
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

          <Section maxWidth="2xl" bgType="blue">
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

          <ul>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat urna sed euismod lobortis.
            </li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
            <li>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat urna sed euismod lobortis.
                </li>
                <li>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>
                      Quisque et magna nec eros commodo tristique sit amet a
                      leo.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>
                      Quisque et magna nec eros commodo tristique sit amet a
                      leo.
                    </li>
                  </ul>
                </li>
                <li>
                  Quisque et magna nec eros commodo tristique sit amet a leo.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat urna sed euismod lobortis.
                </li>
                <li>Aenean iaculis, elit non ornare maximus.</li>
                <li>
                  Quisque et magna nec eros commodo tristique sit amet a leo.
                </li>
              </ul>
            </li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
          </ul>

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

          <ol>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat urna sed euismod lobortis.
            </li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
            <li>
              <ol>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat urna sed euismod lobortis.
                </li>
                <li>
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>
                      Quisque et magna nec eros commodo tristique sit amet a
                      leo.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut consequat urna sed euismod lobortis.
                    </li>
                    <li>Aenean iaculis, elit non ornare maximus.</li>
                    <li>
                      Quisque et magna nec eros commodo tristique sit amet a
                      leo.
                    </li>
                  </ol>
                </li>
                <li>
                  Quisque et magna nec eros commodo tristique sit amet a leo.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  consequat urna sed euismod lobortis.
                </li>
                <li>Aenean iaculis, elit non ornare maximus.</li>
                <li>
                  Quisque et magna nec eros commodo tristique sit amet a leo.
                </li>
              </ol>
            </li>
            <li>Aenean iaculis, elit non ornare maximus.</li>
            <li>Quisque et magna nec eros commodo tristique sit amet a leo.</li>
          </ol>

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

          <Section maxWidth="2xl" bgType="blue">
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
            tortor sapien, in maximus orci elementum ut. Duis et massa mattis
            enim sagittis pellentesque. Sed turpis ex, sollicitudin sed est et,
            pulvinar malesuada nunc. Morbi pulvinar nibh nec lectus ullamcorper,
            vel semper augue cursus. Duis dapibus nisl eget purus dignissim, vel
            sollicitudin diam fermentum.
          </p>

          <Section maxWidth="4xl">
            <h3>Header</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat urna sed euismod lobortis. Aenean iaculis, elit non
              ornare maximus, ligula mauris ultricies felis, sed vestibulum arcu
              ipsum vitae elit. Nullam sit amet interdum massa. In hac habitasse
              platea dictumst. Phasellus pretium augue est, semper fringilla
              lacus auctor.
            </p>
          </Section>

          <p>
            Quisque erat diam, porta quis libero eget, ultrices ornare nisi.
            Vestibulum accumsan mauris sed elit maximus dignissim. Suspendisse
            ac facilisis felis. Mauris rhoncus mauris mauris, a porttitor diam
            pellentesque ut. Sed commodo posuere interdum. Cras aliquet mauris
            sit amet lacus eleifend, ac maximus sem porta. Curabitur consectetur
            tortor sapien, in maximus orci elementum ut. Duis et massa mattis
            enim sagittis pellentesque. Sed turpis ex, sollicitudin sed est et,
            pulvinar malesuada nunc. Morbi pulvinar nibh nec lectus ullamcorper,
            vel semper augue cursus.
          </p>

          <Section maxWidth="5xl" bgType="blue">
            <Placeholder name="frequently-asked-questions" />
          </Section>

          <Section maxWidth="7xl" bgType="blue">
            <Placeholder name="news-and-articles" />
          </Section>

          <p>
            Nullam ut maximus lorem. Maecenas pulvinar odio eu sem molestie
            interdum. Cras consequat pulvinar magna. Donec pulvinar quis ligula
            in euismod. Sed et ultricies augue, commodo pellentesque ligula.
            Curabitur in sem est. Suspendisse potenti. Curabitur iaculis ex quis
            nibh fringilla lacinia. Quisque tellus diam, imperdiet ut auctor sit
            amet, maximus ac ligula. Pellentesque posuere orci at risus
            pellentesque, et ultrices urna iaculis.
          </p>

          <figure className="ui-figure size-full">
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
            Quisque sagittis interdum felis, ut sollicitudin sem dapibus
            gravida. Proin in aliquam libero. Cras ullamcorper efficitur arcu,
            porttitor bibendum turpis lacinia id. Sed laoreet augue eget libero
            fringilla, et bibendum sem accumsan. Cras nibh magna, dictum eget
            dui vel, dapibus vulputate neque. Phasellus vel ultrices est, id
            molestie ligula. Fusce convallis nibh sit amet neque convallis
            interdum. Proin vitae mattis enim. In et nisi metus. Nam quis
            elementum nibh.
          </p>

          <p>
            Donec in orci tortor. Vestibulum in nulla et eros vulputate maximus.
            Nulla nec nibh a felis elementum vehicula. Integer condimentum
            eleifend augue in molestie. Vivamus dapibus tristique ante et
            porttitor. Pellentesque congue a nunc eget cursus. Nulla a euismod
            lacus. Donec malesuada, risus molestie sodales accumsan, diam tellus
            dapibus lectus, a cursus dui tellus sagittis turpis. Maecenas nec
            metus luctus, tincidunt mauris in, tristique urna. Fusce commodo
            malesuada interdum.
          </p>

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
        </Section>
      </Main>
    </>
  );
}
