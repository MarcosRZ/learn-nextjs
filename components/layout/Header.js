import React from 'react';
import PropTypes from 'prop-types';
import Xlink from '../../routing/Xlink';

const Header = props => {
  const { className, handleMenuClick } = props;

  return (
    <header className={className} id="header">
      <h1>
        <Xlink href="/" onClick={() => console.log('Click')}>
          <a>Solid State</a>
        </Xlink>
      </h1>
      <nav>
        <a
          className="menu-link"
          role="presentation"
          data-behaviour="menu-button"
          onClick={handleMenuClick}
        >
          Menu
        </a>
      </nav>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  handleMenuClick: PropTypes.func,
};

Header.defaultProps = {
  className: '',
  handleMenuClick: () => {},
}

export default Header;
