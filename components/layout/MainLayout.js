import React, { PureComponent } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';

const SHOW_BANNER_DELAY_MS = 100;
const SHOW_MENU_OFFSET_PX = 100;

class MainLayout extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showHeader: false,
      showMenu: false,
      isPreload: true,
    };
    this.toggleMenuVisibility = this.toggleMenuVisibility.bind(this);
    this.startAnimations = this.startAnimations.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    setTimeout(this.startAnimations, SHOW_BANNER_DELAY_MS);
    window.addEventListener('scroll', this.onScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll(event) {
    const {
      target: { scrollTop: px },
    } = event;

    const { showHeader } = this.state;

    if (showHeader && px > SHOW_MENU_OFFSET_PX) return;

    if (!showHeader && px < SHOW_MENU_OFFSET_PX) return;

    this.setState({ showHeader: px > SHOW_MENU_OFFSET_PX });
  }


  startAnimations() {
    this.setState({ isPreload: false });
  }

  toggleMenuVisibility() {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  }

  render() {
    const { children } = this.props;

    const { showHeader, showMenu, isPreload } = this.state;

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
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/images/sushi.png"
          />
        </Head>

        <Header
          handleMenuClick={this.toggleMenuVisibility}
          className={showHeader ? '' : 'alt'}
        />

        <Menu handleCloseClick={this.toggleMenuVisibility} />

        {children}

        <Footer />

        <script src="/static/js/jquery.min.js" />
        <script src="/static/js/jquery.scrollex.min.js" />
        <script src="/static/js/browser.min.js" />
        <script src="/static/js/breakpoints.min.js" />
        <script src="/static/js/util.js" />
        <script src="/static/js/main.js" />
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
