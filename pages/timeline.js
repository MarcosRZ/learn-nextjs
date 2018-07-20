import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Timeline = () => (
  <div>
    <h1>Timeline</h1>
    <p>This is the <b>timeline</b> page</p>
  </div>
);

export default withMainLayout(Timeline);
