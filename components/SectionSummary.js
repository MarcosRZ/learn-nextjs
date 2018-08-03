import React from 'react';
import PropTypes from 'prop-types';
import Xlink from '../routing/Xlink';

const SectionSummary = props => {
  const { title, imageUrl, linkUrl, linkText, children } = props;

  return (
    <div>
      <Xlink>
        <a className="image">
          <img src={imageUrl} alt="" />
        </a>
      </Xlink>
      <div className="content">
        <h2 className="major">{title}</h2>
        {children}
        <Xlink href={linkUrl}>
          <a className="special">{linkText}</a>
        </Xlink>
      </div>
    </div>
  );
};

SectionSummary.propTypes = {
  title: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionSummary;
