import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Menu from './Menu';

class MainLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <div className="main-layout">
        <Menu />
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
