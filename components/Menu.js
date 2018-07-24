import React from 'react';
import Xlink from './core/Xlink';
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
  { label: 'Artists', url: '/Artists' },
  { label: 'Songs', url: '/Songs' },
  { label: 'Albums', url: '/Albums' },
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
