import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Section from '../components/Section';
import Actions from '../components/Actions';
import Card from '../components/Card';
import Cards from '../components/Cards';
import SectionHeading from '../components/SectionHeading';

const Techs = () => (
  <div>
    <div id="page-wrapper">
      <section id="wrapper">
        <Section className="wrapper style1">
          <SectionHeading title="Vitae phasellus">
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
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
              content="Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices. Lorem ipsum dolor sit amet,
                  consectetur adipiscing vehicula id nulla dignissim dapibus
                  ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing
                  vehicula id nulla dignissim dapibus ultrices. Lorem ipsum
                  dolor sit amet, consectetur adipiscing vehicula id nulla
                  dignissim dapibus ultrices. Lorem ipsum dolor sit amet,
                  consectetur adipiscing vehicula id nulla dignissim dapibus
                  ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing
                  vehicula id nulla dignissim dapibus ultrices."
              linkText="Link text two"
              linkUrl="/generic"
              imageUrl="static/images/pic05.jpg"
            />
            <Card
              title="Ante fermentum"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices. Lorem ipsum dolor sit amet,
                  consectetur adipiscing vehicula id nulla dignissim dapibus
                  ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing
                  vehicula id nulla dignissim dapibus ultrices."
              linkText="Link text three"
              linkUrl="/generic"
              imageUrl="static/images/pic06.jpg"
            />
            <Card
              title="Fusce consequat"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices."
              linkText="Link text four"
              linkUrl="/generic"
              imageUrl="static/images/pic07.jpg"
            />
          </Cards>
          <Actions />
        </Section>
      </section>
    </div>
  </div>
);

export default withMainLayout(Techs);
