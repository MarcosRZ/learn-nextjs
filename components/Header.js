import React from 'react';

const Header = props => {
  return (
    <header id="header" className="alt">
      <h1>
        <a href="/">Solid State</a>
      </h1>
      <nav>
        <div onClick={props.handleMenuClick}>
          Menu
        </div>
      </nav>
    </header>
  );
};

export default Header;
