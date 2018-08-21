import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Section from '../components/Section';
import TimelineEvent from '../components/TimelineEvent';
import Timeline from '../components/Timeline';
import Banner from '../components/Banner';

const Professional = () => (
  <div>
    <div id="page-wrapper">
      <section id="wrapper">
        <Banner>
          <h2>Professional</h2>
        </Banner>
        <Section className="wrapper spotlight style">
          {/* <h2 className="major">Professional</h2> */}
          <Timeline className="professional">
            <TimelineEvent
              dotText="1"
              date="2018 - Present"
              title="Fullstack Senior Software Engineer"
              company="Grupo Clarcat"
              location="Gijón / Xixón"
              techs="AngularJS | Angular6 | PHP | ASP .Net | MariaDB"
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
              dotText="2"
              title="Fullstack JS Software Engineer"
              company="BinPar Digital Ignition"
              location="Madrid"
              date="2017 - 2018"
              techs="React | Redux | GraphQL | Apollo | NodeJS | MongoDB"
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
              dotText="3"
              title="Fullstack ASP.NET Software Engineer"
              company="iBakari Desarrollos Informáticos"
              location="Oviedo / Uviéu"
              date="2015 - 2017"
              techs="ASP .Net MVC5 | EntityFramework | SQLServer | SQLServerCE | AngularJS"
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
              dotText="4"
              title="Fullstack Software Engineer / Robotics Engineer"
              company="Adele Robots"
              location="Oviedo / Uviéu"
              date="2014 - 2015"
              techs="Spring | AngularJS | PHP | Slim Framework | TitanDB | MySQL"
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
              dotText="5"
              title="Java FX and Javascript Developer"
              company="Seresco Soluciones"
              location="Oviedo / Uviéu"
              date="2014"
              sub="( 3 mos. )"
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
              dotText="6"
              title="ASPX Developer"
              company="ASAC Comunicaciones"
              location="Oviedo / Uviéu"
              date="2010"
              sub="( 4 mos. )"
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

export default withMainLayout(Professional);
