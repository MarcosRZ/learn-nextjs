import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Artist = () => (
  <div>
    <h1>Artist</h1>
    <p>This is the <b>Artist</b> page</p>

  </div>
);

export default withMainLayout(Artist);
