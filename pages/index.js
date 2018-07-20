import React from 'react';
import Link from 'next/link';
import withMainLayout from '../HOC/withMainLayout';

const menuItemStyle = {
  border: '1px solid blue',
  padding: '10px',
  margin: '5px',
};

const Index = () => (
  <div>
    <div
      style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}
    >
      <Link href="/">
        <div style={menuItemStyle}>Home</div>
      </Link>
      <Link href="/">
        <div style={menuItemStyle}>Timeline</div>
      </Link>
      <Link href="/">
        <div style={menuItemStyle}>Categories</div>
      </Link>
      <Link href="/about">
        <div style={menuItemStyle}>About</div>
      </Link>
    </div>
    <p>Hello Next.js</p>
  </div>
);

export default withMainLayout(Index);
