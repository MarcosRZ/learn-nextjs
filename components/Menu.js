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
  { label: 'Timeline', url: '/timeline' },
  { label: 'Categories', url: '/categories' },
  { label: 'About', url: '/about' },
];

const Menu = () => (
  <div className="menu" style={menuStyle}>
    {options.map((o) => {
      console.log(o);
      return (
        <Link key={o.label} href={o.url}>
          <div className="menu-item" style={menuItemStyle}>
            {o.label}
          </div>
        </Link>
      );
    })}
  </div>
);

Menu.propTypes = {};

export default Menu;
