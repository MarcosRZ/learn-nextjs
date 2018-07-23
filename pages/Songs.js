import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Songs = () => (
  <div>
    <h1>Songs</h1>
    <p>
      This is the <b>Songs</b> page
    </p>
  </div>
);

export default withMainLayout(Songs);
