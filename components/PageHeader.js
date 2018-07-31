import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = props => {
  const { title, children } = props;
  return (
    <header>
      <div className="inner">
        <h2>{title}</h2>
        {children}
      </div>
    </header>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,  
};

export default PageHeader;
