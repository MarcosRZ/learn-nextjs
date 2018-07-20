import React from 'react';
import Link from 'next/link';
// import PropTypes from 'prop-types';

const menuItemStyle = {
  border: '1px solid blue',
  padding: '10px',
  margin: '5px',
  cursor: 'pointer',
};

const menuStyle = {
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
};

const options = [
  { label: 'Home', url: '/' },
  { label: 'Timeline', url: '/' },
  { label: 'Categories', url: '/' },
  { label: 'About', url: '/' },
];

const Menu = () => (
  <div className="menu" style={menuStyle}>
    {options.map(o => (
      <Link key={o.label} href={o.url}>
        <div className="menu-item" style={menuItemStyle}>{o.label}</div>
      </Link>
    ))}
  </div>
);

Menu.propTypes = {};

export default Menu;
