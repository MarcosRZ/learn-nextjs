import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Song = () => (
  <div>
    <h1>Song</h1>
    <p>
      This is the <b>Song</b> page
    </p>
  </div>
);

export default withMainLayout(Song);
