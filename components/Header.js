import React from 'react';
import Xlink from '../routing/Xlink';
class Header extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={this.props.className} id="header">
        <h1>
          <Xlink href="/" onClick={() => console.log('Click')}><a>Solid State</a></Xlink>
        </h1>
        <nav>
          <a
            className="menu-link"
            role="presentation"
            data-behaviour="menu-button"
            onClick={this.props.handleMenuClick}
          >
            Menu
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
