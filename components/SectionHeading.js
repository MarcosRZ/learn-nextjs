import React from 'react';
import PropTypes from 'prop-types';

const SectionHeading = (props) => {

  const { title, children } = props;

  return (
    <div>
      <h2 className="major">{title}</h2>
      <p>
        {children}
      </p>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,  
};

export default SectionHeading;