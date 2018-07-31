import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Section from '../components/Section';
import SectionSummary from '../components/SectionSummary';
import SectionHeading from '../components/SectionHeading';
import Card from '../components/Card';
import Cards from '../components/Cards';
import Actions from '../components/Actions';
import Banner from '../components/Banner';

class Home extends React.PureComponent {
  componentDidMount() {}

  render() {
    return (
      <div>
        <div id="page-wrapper">

          <Banner />

          <section id="wrapper">
            <Section className="spotlight style1">
              <SectionSummary
                title="Titulo Seccion 1"
                content="Contenido"
                imageUrl="static/images/pic01.jpg"
                linkText="Ver sección"
              >
                1 Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus. 1 Lorem ipsum dolor sit amet, etiam lorem adipiscing
                elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin
                posuere urna.
              </SectionSummary>
            </Section>

            <Section className="spotlight style2 alt">
              <SectionSummary
                title="Titulo Seccion 2"
                content="Contenido"
                imageUrl="static/images/pic01.jpg"
                linkText="Ver sección"
                className="alt style2"
              >
                2 Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </SectionSummary>
            </Section>

            <Section className="spotlight style3">
              <SectionSummary
                title="Titulo Seccion 3"
                content="Contenido"
                imageUrl="static/images/pic01.jpg"
                linkText="Ver sección"
                className="style3"
              >
                3 Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </SectionSummary>
            </Section>

            <Section className="spotlight style2 alt">
              <SectionSummary
                title="Titulo Seccion 3"
                content="Contenido"
                imageUrl="static/images/pic01.jpg"
                linkText="Ver sección"
                className="style3"
              >
                3 Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
                turpis ante, nullam sit amet turpis non, sollicitudin posuere
                urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
                dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
                cursus.
              </SectionSummary>
            </Section>

            <Section className="style1">
              <SectionHeading title="Vitae phasellus">
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
