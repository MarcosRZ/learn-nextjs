import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MainLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return <div className="main-layout"> {children} </div>;
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
