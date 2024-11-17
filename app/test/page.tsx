import Image from "next/image";
import { Main } from "@/components/Main/Main";
import { Placeholder } from "@/components/Placeholder/Placeholder";
import { Section } from "@/components/Section/Section";

export default function Content() {
  return (
    <>
      <main>
        <section className="section-wrapper">
          <h2>Our Services</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est, semper fringilla lacus auctor
            in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
            tristique sit amet a leo. Donec lacinia libero orci, id ultricies
            felis dapibus eu.{" "}
          </p>

          <div className="my-8 element-full-width">
            <figure className="wp-block-image size-full">
              <Image
                className=""
                src="https://picsum.photos/id/20/1200/300"
                alt="Images require alt text"
                width={1200}
                height={300}
                decoding="async"
              />
            </figure>
          </div>

          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat urna sed euismod lobortis. Aenean iaculis, elit non ornare
            maximus, ligula mauris ultricies felis, sed vestibulum arcu ipsum
            vitae elit. Nullam sit amet interdum massa. In hac habitasse platea
            dictumst. Phasellus pretium augue est, semper fringilla lacus auctor
            in. Fusce eu lectus lacus. Quisque et magna nec eros commodo
            tristique sit amet a leo. Donec lacinia libero orci, id ultricies
            felis dapibus eu.{" "}
          </p>
          <figure className="wp-block-image alignleft size-medium">
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
            {" "}
            Quisque erat diam, porta quis libero eget, ultrices ornare nisi.
            Vestibulum accumsan mauris sed elit maximus dignissim. Suspendisse
            ac facilisis felis. Mauris rhoncus mauris mauris, a porttitor diam
            pellentesque ut. Sed commodo posuere interdum. Cras aliquet mauris
            sit amet lacus eleifend, ac maximus sem porta. Curabitur consectetur
            tortor sapien, in maximus orci elementum ut. Duis et massa mattis
            enim sagittis pellentesque. Sed turpis ex, sollicitudin sed est et,
            pulvinar malesuada nunc. Morbi pulvinar nibh nec lectus ullamcorper,
            vel semper augue cursus. Duis dapibus nisl eget purus dignissim, vel
            sollicitudin diam fermentum. Etiam sollicitudin vel nibh ut
            ultricies. Donec blandit, odio eu cursus sagittis, nibh sapien
            pulvinar erat, eget iaculis massa nisl ut elit. Nam eget volutpat
            orci. Sed dapibus cursus turpis eget rhoncus. Vestibulum ante ipsum
            primis in faucibus orci luctus et ultrices posuere cubilia curae;{" "}
          </p>

          <div className="element-full-width">
            <Section as="div" maxWidth="5xl">
              <Placeholder name="max-width-5xl" />
            </Section>
          </div>

          <div className="element-full-width">
            <Section as="div" maxWidth="7xl">
              <Placeholder name="max-width-7xl" />
            </Section>
          </div>

          <div className="element-full-width">
            <Section as="div" maxWidth="full">
              <Placeholder name="max-width-full" />
            </Section>
          </div>

          <p>
            {" "}
            Nullam ut maximus lorem. Maecenas pulvinar odio eu sem molestie
            interdum. Cras consequat pulvinar magna. Donec pulvinar quis ligula
            in euismod. Sed et ultricies augue, commodo pellentesque ligula.
            Curabitur in sem est. Suspendisse potenti. Curabitur iaculis ex quis
            nibh fringilla lacinia. Quisque tellus diam, imperdiet ut auctor sit
            amet, maximus ac ligula. Pellentesque posuere orci at risus
            pellentesque, et ultrices urna iaculis.{" "}
          </p>
          <figure className="wp-block-image size-full">
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
            {" "}
            Quisque sagittis interdum felis, ut sollicitudin sem dapibus
            gravida. Proin in aliquam libero. Cras ullamcorper efficitur arcu,
            porttitor bibendum turpis lacinia id. Sed laoreet augue eget libero
            fringilla, et bibendum sem accumsan. Cras nibh magna, dictum eget
            dui vel, dapibus vulputate neque. Phasellus vel ultrices est, id
            molestie ligula. Fusce convallis nibh sit amet neque convallis
            interdum. Proin vitae mattis enim. In et nisi metus. Nam quis
            elementum nibh. Sed eget dapibus metus, in iaculis nisi. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nulla facilisi. Fusce eget euismod metus. Vivamus
            rutrum dui id metus auctor, at commodo odio vulputate. Curabitur
            luctus tortor consequat molestie consectetur.{" "}
          </p>
          <p>
            {" "}
            Donec in orci tortor. Vestibulum in nulla et eros vulputate maximus.
            Nulla nec nibh a felis elementum vehicula. Integer condimentum
            eleifend augue in molestie. Vivamus dapibus tristique ante et
            porttitor. Pellentesque congue a nunc eget cursus. Nulla a euismod
            lacus. Donec malesuada, risus molestie sodales accumsan, diam tellus
            dapibus lectus, a cursus dui tellus sagittis turpis. Maecenas nec
            metus luctus, tincidunt mauris in, tristique urna. Fusce commodo
            malesuada interdum. Phasellus mollis lorem at dictum varius. In
            pharetra erat viverra scelerisque faucibus. Quisque tempor blandit
            ligula at rhoncus. Nullam quam mauris, commodo et pretium vel,
            pellentesque eu nulla. Proin non urna vestibulum, consequat risus
            at, sodales enim.{" "}
          </p>
        </section>
      </main>
    </>
  );
}
