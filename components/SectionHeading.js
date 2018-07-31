import React from 'react';

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

export default SectionHeading;