import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Cards from '../components/Cards';
import Card from '../components/Card';
import Section from '../components/Section';
import SectionHeading from '../components/SectionHeading';
import PageHeader from '../components/PageHeader';

const Generic = () => (
  <div>
    <div id="page-wrapper">
      <section id="wrapper">
        <PageHeader title="Generic">
          <p>Phasellus non pulvinar erat. Fusce tincidunt nisl eget ipsum.</p>
        </PageHeader>
        <Section className="wrapper">
          <SectionHeading title="Lorem Ipsum Dolor">
            <p>
              Morbi mattis mi consectetur tortor elementum, varius pellentesque
              velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
              scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
              lacinia velit aliquet. Duis non efficitur nisi, id malesuada
              justo. Maecenas sagittis felis ac sagittis semper. Curabitur purus
              leo donec vel dolor at arcu tincidunt bibendum. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Fusce ut aliquet
              justo. Donec id neque ipsum. Integer eget ultricies odio. Nam vel
              ex a orci fringilla tincidunt. Aliquam eleifend ligula non velit
              accumsan cursus. Etiam ut gravida sapien.
            </p>

            <p>
              Vestibulum ultrices risus velit, sit amet blandit massa auctor sit
              amet. Sed eu lectus sem. Phasellus in odio at ipsum porttitor
              mollis id vel diam. Praesent sit amet posuere risus, eu faucibus
              lectus. Vivamus ex ligula, tempus pulvinar ipsum in, auctor porta
              quam. Proin nec commodo, vel scelerisque nisi scelerisque.
              Suspendisse id quam vel tortor tincidunt suscipit. Nullam auctor
              orci eu dolor consectetur, interdum ullamcorper ante tincidunt.
              Mauris felis nec felis elementum varius.
            </p>
          </SectionHeading>

          <SectionHeading title="Vitae phasellus">
            <p>
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </SectionHeading>

          <Cards>
            <Card
              title="Sed feugiat lorem"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."
              linkText="Link text one"
              linkUrl="/generic"
              imageUrl="static/images/pic04.jpg"
            />
            <Card
              title="Nisl placerat"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices."
              linkText="Link text two"
              linkUrl="/generic"
              imageUrl="static/images/pic05.jpg"
            />
          </Cards>
        </Section>
      </section>
    </div>
  </div>
);

export default withMainLayout(Generic);
