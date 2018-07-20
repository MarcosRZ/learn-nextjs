import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const About = () => (
  <div>
    <h1>About</h1>
    <p>This is the <b>about</b> page</p>
  </div>
);

export default withMainLayout(About);
