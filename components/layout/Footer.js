import React from 'react';
import Section from '../Section';
import SectionHeading from '../SectionHeading';
import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';
import CopyRight from '../CopyRight';

const Footer = () => (
  <Section id="footer">
    <SectionHeading title="Get in touch">
      Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
      Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis egestas,
      purus ipsum consequat orci, sit amet lobortis lorem lacus in tellus. Sed
      ac elementum arcu. Quisque placerat auctor laoreet.
    </SectionHeading>
    <ContactForm />
    <ContactInfo />
    <CopyRight />
  </Section>
);

export default Footer;
