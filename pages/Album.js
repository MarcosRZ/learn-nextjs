import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Album = () => (
  <div>
    <h1>Album</h1>
    <p>This is the <b>Album</b> page</p>
  </div>
);

export default withMainLayout(Album);
