import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Section from '../components/Section';
import Tech from '../components/Tech';
// import SectionHeading from '../components/SectionHeading';
import Banner from '../components/Banner';

const Techs = () => (
  <div>
    <div id="page-wrapper">
      <section id="wrapper">
        <Banner>
          <h2>Techs</h2>
          <p>Techs and Frameworks that I managed / use to manage</p>
        </Banner>
        <Section className="wrapper ">
          {/* <SectionHeading title="Frameworks and Techs">
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </SectionHeading> */}
          <Tech
            title="React"
            imageUrl="/static/images/react.svg"
            linkText="GO!"
            linkUrl="/#"
          >
            <p>
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </Tech>
          <Tech
            title="Redux"
            imageUrl="/static/images/redux.png"
            linkText="GO!"
            linkUrl="/#"
          >
            <p>
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </Tech>
          <Tech
            title="Angular"
            imageUrl="/static/images/angular6.svg"
            linkText="GO!"
            linkUrl="/#"
          >
            <p>
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </Tech>
          <Tech
            title="Apollo"
            imageUrl="/static/images/apollo.png"
            linkText="GO!"
            linkUrl="/#"
          >
            <p>
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </Tech>

          <Tech
            title="GraphQL"
            imageUrl="/static/images/graphql.png"
            linkText="GO!"
            linkUrl="/#"
          >
            <p>
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </Tech>
          <Tech
            title="NodeJS"
            imageUrl="/static/images/node3.png"
            linkText="GO!"
            linkUrl="/#"
          >
            <p>
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </Tech>
          <Tech
            title="MongoDB"
            imageUrl="/static/images/mongodb.png"
            linkText="GO!"
            linkUrl="/#"
          >
            <p>
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
          </Tech>
        </Section>
      </section>
    </div>
  </div>
);

export default withMainLayout(Techs);
