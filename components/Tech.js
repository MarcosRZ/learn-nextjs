import React from 'react';
import PropTypes from 'prop-types';

const Tech = ({ title, imageUrl, linkText, linkUrl, children, className }) => (
  <div className={`tech ${className}`}>
    <h3 className="major">{title}</h3>
    <div className="box alt">
      <div className="row gtr-uniform">
        <div className="col-3">
          <span className="logo image fit bright">
            <img src={imageUrl} alt="" />
          </span>
        </div>
        <div className="col-9">
          {children}
          <div href="/#" className="right">
            <a className="special" href={linkUrl}>
              {linkText}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Tech.propTypes = {
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

Tech.defaultProps = {
  className: '',
  children: [],
};

export default Tech;
