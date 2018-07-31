import React from 'react';
import PropTypes from 'prop-types';
import Xlink from '../../routing/Xlink';

const Menu = props => {
  const { handleCloseClick } = props;

  return (
    <nav id="menu">
      <div className="inner">
        <h2>Menu</h2>
        <ul className="links">
          <li>
            <Xlink href="/" prefetch>
              <a>Home</a>
            </Xlink>
          </li>
          <li>
            <Xlink href="/generic" prefetch>
              <a>Generic</a>
            </Xlink>
          </li>
          <li>
            <Xlink href="/elements" prefetch>
              <a>Elements</a>
            </Xlink>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
        </ul>
        <a role="presentation" className="close" onClick={handleCloseClick}>
          Close
        </a>
      </div>
    </nav>
  );
};

Menu.propTypes = {
  handleCloseClick: PropTypes.func.isRequired,
};

export default Menu;
