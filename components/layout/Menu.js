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
            <Xlink href="/professional" prefetch>
              <a>Professional</a>
            </Xlink>
          </li>
          <li>
            <Xlink href="/academic" prefetch>
              <a>Academic</a>
            </Xlink>
          </li>
          <li>
            <Xlink href="/techs" prefetch>
              <a>Techs</a>
            </Xlink>
          </li>
          <li>
            <Xlink href="/projects" prefetch>
              <a>Projects</a>
            </Xlink>
          </li>
          <li>
            <Xlink href="/contact" prefetch>
              <a>Contact</a>
            </Xlink>
          </li>
          {/* <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li> */}
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
