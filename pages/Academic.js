import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Section from '../components/Section';
import Timeline from '../components/Timeline';
import TimelineEvent from '../components/TimelineEvent';
import Banner from '../components/Banner';

const Academic = () => (
  <div>
    <div id="page-wrapper">
      <section id="wrapper">
        <Banner>
          <h2>Academic</h2>
        </Banner>
        <Section className="wrapper style3">
          {/* <h2 className="major">Academic</h2> */}
          <Timeline className="academic">
            <TimelineEvent
              dotText="7"
              date="2010 - 2015"
              title="Degree in Software Engineering"
              company="University Of Oviedo"
              location="Oviedo / Uviéu"
            >
              <p>
                Sed posuere consectetur est at lobortis. Nullam quis risus eget
                urna mollis ornare vel eu leo. Donec sed odio dui. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Nullam quis
                risus eget urna mollis ornare vel eu leo. Cras mattis
                consectetur purus sit amet fermentum.
              </p>
            </TimelineEvent>
            <TimelineEvent
              dotText="8"
              date="2008 - 2010"
              title="High Certificate in Sofwtware Development"
              company="I.E.S. Doctor Fleming"
              location="Oviedo / Uviéu"
            >
              <p>
                Sed posuere consectetur est at lobortis. Nullam quis risus eget
                urna mollis ornare vel eu leo. Donec sed odio dui. Morbi leo
                risus, porta ac consectetur ac, vestibulum at eros. Nullam quis
                risus eget urna mollis ornare vel eu leo. Cras mattis
                consectetur purus sit amet fermentum.
              </p>
            </TimelineEvent>
          </Timeline>
        </Section>
      </section>
    </div>
  </div>
);

export default withMainLayout(Academic);
