import React from 'react';
import Link from 'next/link';
import withMainLayout from '../HOC/withMainLayout';
import db from '../fixtures/db';

const Artists = () => (
  <div>
    <h1>Artists</h1>
    <p>This is the <b>Artists</b> page</p>
    <ul>
      {db.map(a => <li><Link href={`/artist/${a.id}`}><a>{a.name}</a></Link> | {a.genre} | {a.year}</li>)}
    </ul>
  </div>
);

export default withMainLayout(Artists);