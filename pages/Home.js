import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Section from '../components/Section';
import SectionSummary from '../components/SectionSummary';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Actions from '../components/Actions';
import Banner from '../components/Banner';
import Professional from '../components/Professional';
import TimeLine from '../components/TimeLine';

class Home extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div id="page-wrapper">
          <Banner>
            <h2>Marcos Rodríguez Martínez</h2>
            <p>
              Full Stack Software Engineer
              {/* <Xlink href="/generic">
                <span className="link">HERE</span>
              </Xlink> */}
            </p>
          </Banner>

          <section id="wrapper">
            <Section className="wrapper spotlight style1">
              <SectionSummary
                title="Bio"
                content="Contenido"
                imageUrl="static/images/pic01.jpg"
                linkText="Ver sección"
              >
                <p>
                  1 Lorem ipsum dolor sit amet, etiam lorem adipiscing elit.
                  Cras turpis ante, nullam sit amet turpis non, sollicitudin
                  posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla
                  dignissim dapibus. Nullam ultrices, neque et faucibus viverra,
                  ex nulla cursus. 1 Lorem ipsum dolor sit amet, etiam lorem
                  adipiscing elit. Cras turpis ante, nullam sit amet turpis non,
                  sollicitudin posuere urna.
                </p>
              </SectionSummary>
            </Section>

            <Section className="wrapper spotlight style2 alt">
              <h2 className="major">Professional</h2>
              <Professional
                title="Fullstack Senior Software Engineer"
                company="Grupo Clarcat"
                location="Gijón"
                time="2018 - Present"
              >
                <p>
                  Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                  turpis ante, nullam sit amet turpis non, sollicitudin posuere
                  urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                  dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                  cursus. 1 Lorem ipsum dolor sit amet, etiam lorem adipiscing
                  elit. Cras turpis ante, nullam sit amet turpis non,
                  sollicitudin posuere urna.
                </p>
              </Professional>

              <Professional
                title="Fullstack JS Software Engineer"
                company="BinPar Digital Ignition"
                location="Madrid"
                time="2017 - 2018"
              >
                <p>
                  Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                  turpis ante, nullam sit amet turpis non, sollicitudin posuere
                  urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                  dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                  cursus. 1 Lorem ipsum dolor sit amet, etiam lorem adipiscing
                  elit. Cras turpis ante, nullam sit amet turpis non,
                  sollicitudin posuere urna.
                </p>
              </Professional>
              <Professional
                title="Fullstack ASP.NET Software Engineer"
                company="iBakari Desarrollos Informáticos"
                location="Oviedo"
                time="2015 - 2017"
              >
                <p>
                  Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                  turpis ante, nullam sit amet turpis non, sollicitudin posuere
                  urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                  dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                  cursus. 1 Lorem ipsum dolor sit amet, etiam lorem adipiscing
                  elit. Cras turpis ante, nullam sit amet turpis non,
                  sollicitudin posuere urna.
                </p>
              </Professional>
              <Professional
                title="Fullstack Software Engineer / Robotics Engineer"
                company="Adele Robots"
                location="Oviedo"
                time="2014 - 2015"
              >
                <p>
                  Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                  turpis ante, nullam sit amet turpis non, sollicitudin posuere
                  urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                  dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                  cursus. 1 Lorem ipsum dolor sit amet, etiam lorem adipiscing
                  elit. Cras turpis ante, nullam sit amet turpis non,
                  sollicitudin posuere urna.
                </p>
              </Professional>
              <Professional
                title="Java FX and Javascript Developer"
                company="Seresco Soluciones"
                location="Oviedo"
                time="2014 (Curricular internship, 3 months)"
              >
                <p>
                  Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                  turpis ante, nullam sit amet turpis non, sollicitudin posuere
                  urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                  dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                  cursus. 1 Lorem ipsum dolor sit amet, etiam lorem adipiscing
                  elit. Cras turpis ante, nullam sit amet turpis non,
                  sollicitudin posuere urna.
                </p>
              </Professional>
              <Professional
                title="ASPX Developer"
                company="ASAC Comunicaciones"
                location="Llanera, Oviedo"
                time="2010 (Curricular internship, 4 months)"
              >
                <p>
                  Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                  turpis ante, nullam sit amet turpis non, sollicitudin posuere
                  urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                  dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                  cursus. 1 Lorem ipsum dolor sit amet, etiam lorem adipiscing
                  elit. Cras turpis ante, nullam sit amet turpis non,
                  sollicitudin posuere urna.
                </p>
              </Professional>
            </Section>

            <Section className="wrapper spotlight style3">
              <TimeLine />
            </Section>

            <Section className="wrapper spotlight style3">
              <SectionSummary
                title="Academic"
                content="Contenido"
                imageUrl="static/images/pic01.jpg"
                linkText="Ver sección"
                className="style3"
              >
                <p>
                  3 Lorem ipsum dolor sit amet, etiam lorem adipiscing elit.
                  Cras turpis ante, nullam sit amet turpis non, sollicitudin
                  posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla
                  dignissim dapibus. Nullam ultrices, neque et faucibus viverra,
                  ex nulla cursus.
                </p>
              </SectionSummary>
            </Section>

            <Section className="wrapper style2 alt">
              <SectionHeading title="Frameworks and Techs">
                Cras mattis ante fermentum, malesuada neque vitae, eleifend
                erat. Phasellus non pulvinar erat. Fusce tincidunt, nisl eget
                mattis egestas, purus ipsum consequat orci, sit amet lobortis
                lorem lacus in tellus. Sed ac elementum arcu. Quisque placerat
                auctor laoreet.
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
  }
}

Home.propTypes = {};

export default withMainLayout(Home);
