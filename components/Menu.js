import React from 'react';
import Link from 'next/link';
import Xlink from '../routing/Xlink';
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
  { label: 'Artists', url: '/artists' },
  { label: 'Songs', url: '/songs' },
  { label: 'Albums', url: '/albums' },
];

const Menu = () => (
  <div className="menu" style={menuStyle}>
    {options.map(o => (
      <Xlink key={o.label} href={o.url}>
        <div className="menu-item" style={menuItemStyle}>
          {o.label}
        </div>
      </Xlink>
    ))}
  </div>
);

Menu.propTypes = {};

export default Menu;
