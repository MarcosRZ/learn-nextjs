import React from 'react';

const Header = props => (
  <header id="header" className="alt">
    <h1>
      <a href="/">Solid State</a>
    </h1>
    <nav>
      <a
        role="presentation"
        data-behaviour="menu-button"
        onClick={props.handleMenuClick}
      >
        Menu
      </a>
    </nav>
  </header>
);

export default Header;
