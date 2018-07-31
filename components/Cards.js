import React from 'react';
import PropTypes from 'prop-types';

const Cards = (props) => {

  const { children } = props;
  
  return (
    <section className="features">
      {children}
    </section>
  );
};

Cards.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Cards;