import React from 'react';
import Xlink from '../routing/Xlink';
const SectionSummary = props => {
  const { title, imageUrl, linkText, children } = props;

  return (
    <div>
      {children}
    </div>
  );
};
export default SectionSummary;
