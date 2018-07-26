import React from 'react';
import Xlink from '../routing/xlink';
import Link from 'next/link';

const Menu = () => (
  <nav id="menu">
    <div className="inner">
      <h2>Menu</h2>
      <ul className="links">
        <li>
          <Xlink href="/">
            <a>Home</a>
          </Xlink>
        </li>
        <li>
          <Xlink href="/generic">
            <a>Generic</a>
          </Xlink>
        </li>
        <li>
          <Xlink href="/elements">
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
      <a href="#" className="close">
        Close
      </a>
    </div>
  </nav>
);

Menu.propTypes = {};

export default Menu;
