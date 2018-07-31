import React from 'react';
import PropTypes from 'prop-types';
import Xlink from '../../routing/Xlink';
import { APP_NAME, APP_NAME2 } from '../../config/app';

const SWAP_TITLE_DELAY = 3000;

class Header extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);

    this.state = {
      isMouseOver: false,
    };

  }

  onMouseOver() {
    this.setState({ isMouseOver: true });
  }

  onMouseLeave() {
    this.setState({ isMouseOver: false });
  }

  render() {
    const { className, handleMenuClick } = this.props;
    const { isMouseOver } = this.state;
    return (
      <header className={className} id="header">
        <h1 onFocus={() => {}} onMouseOver={this.onMouseOver} onMouseLeave={this.onMouseLeave}>
          <Xlink href="/">
            <a>{isMouseOver ? APP_NAME2 : APP_NAME}</a>
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
  }
}

Header.propTypes = {
  className: PropTypes.string,
  handleMenuClick: PropTypes.func,
};

Header.defaultProps = {
  className: '',
  handleMenuClick: () => {},
};

export default Header;
