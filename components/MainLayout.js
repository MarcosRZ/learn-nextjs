import React, { PureComponent } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Xlink from '../routing/Xlink';
import Header from './Header';
import Menu from './Menu';

class MainLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
  }

  toggleMenuVisibility() {
    console.log('SET MENU VISIBILITY');
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    const { children } = this.props;

    const { showMenu } = this.state;

    const menuClass = showMenu ? 'is-menu-visible' : '';

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
