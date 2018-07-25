import React from 'react';
import XLink from '../routing/xlink';
import withMainLayout from '../HOC/withMainLayout';
import db from '../fixtures/db';

const Artists = () => (
  <div>
    <h1>Artists</h1>
    <p>This is the <b>Artists</b> page</p>
    <ul>
      {db.map(a => <li key={a.id}><XLink href={`/artist/${a.slug}`}><a>{a.name}</a></XLink> | {a.genre} | {a.year}</li>)}
    </ul>
  </div>
);

export default withMainLayout(Artists);
