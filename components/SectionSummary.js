import React from 'react';
import Xlink from '../routing/Xlink';

const SectionSummary = props => {
  const { title, imageUrl, linkText, children } = props;

  return (
    <div>
      <Xlink>
        <a className="image">
          <img src={imageUrl} alt="" />
        </a>
      </Xlink>
      <div className="content">
        <h2 className="major">{title}</h2>
        <p>{children}</p>
        <Xlink>
          <a className="special">{linkText}</a>
        </Xlink>
      </div>
    </div>
  );
};
export default SectionSummary;
