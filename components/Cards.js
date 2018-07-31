import React from 'react';

const Cards = (props) => {

  const { children } = props;
  
  return (
    <section className="features">
      {children}
    </section>
  );
};

export default Cards;