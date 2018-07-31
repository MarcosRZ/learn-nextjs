import React from 'react';

const Section = props => {
  const { children, className } = props;
  return (
    <section className={`wrapper spotlight ${className}`}>
      <div className="inner">{children}</div>
    </section>
  );
};

export default Section;