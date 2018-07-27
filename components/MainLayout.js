import React, { PureComponent } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';
import Menu from './Menu';

const SHOW_BANNER_DELAY_MS = 100;

class MainLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      isPreload: true,
    };
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
    this.startAnimations = this.startAnimations.bind(this);
  }

  componentDidMount() {
    setTimeout(this.startAnimations, SHOW_BANNER_DELAY_MS);
  }

  startAnimations() {
    this.setState({ isPreload: false });
  }

  toggleMenuVisibility() {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    const { children } = this.props;

    const { showMenu, isPreload } = this.state;

    const menuClass = `${showMenu ? 'is-menu-visible' : ''} ${
      isPreload ? 'is-preload' : ''
    }`;

    return (
      <div id="main-layout" className={`main-layout ${menuClass}`}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <meta charSet="utf-8" />
          <title>P1x3L SuSH1</title>
          <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
        </Head>

        <Header handleMenuClick={this.toggleMenuVisibility} />

        <Menu handleCloseClick={this.toggleMenuVisibility} />

        {children}
      </div>
    );
  }
}

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
MainLayout.defaultProps = {
  children: null,
};

export default MainLayout;
