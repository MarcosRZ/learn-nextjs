import React, { PureComponent } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import Menu from './Menu';

class MainLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="main-layout">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <title>P1x3L SuSH1</title>
          <link rel="stylesheet" type="text/css" href="/static/css/main.css" />
          
        </Head>
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
