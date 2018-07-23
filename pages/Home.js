import React from 'react';
import withMainLayout from '../HOC/withMainLayout';

const Index = () => (
  <div>
    <h1>Home</h1>
    <p>This is the <b>home</b> page</p>
  </div>
);

export default withMainLayout(Index);
