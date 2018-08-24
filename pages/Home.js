import React from 'react';
import withMainLayout from '../HOC/withMainLayout';
import Section from '../components/Section';
import SectionSummary from '../components/SectionSummary';
import Banner from '../components/Banner';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
                linkUrl="/"
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
          </section>
        </div>
      </div>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default withMainLayout(Home);
