import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Albums = () => (
  <div>
    <h1>Albums</h1>
    <p>This is the <b>Albums</b> page</p>
  </div>
);

export default withMainLayout(Albums);
