import React from 'react';
import PropTypes from 'prop-types';

const Section = props => {
  const { id, children, className } = props;
  return (
    <section id={id} className={className}>
      <div className="inner">{children}</div>
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Section.defaultProps = {
  id: '',
  className: '',
};

export default Section;
