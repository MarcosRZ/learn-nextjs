import React from 'react';
import Xlink from '../routing/Xlink';
import Link from 'next/link';

const Menu = () => (
  <nav id="menu">
    <div className="inner">
      <h2>Menu</h2>
      <ul className="links">
        <li>
          <Xlink href="/">
            <div>Home</div>
          </Xlink>
        </li> 
        <li>
          <Xlink href="/generic">
            <div>Generic</div>
          </Xlink>
        </li>
        <li>
          <Xlink href="/elements">
            <div>Elements</div>
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
