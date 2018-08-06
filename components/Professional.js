import React from 'react';
import PropTypes from 'prop-types';

const Professional = ({ title, company, location, time, children }) => (
  <div className="flex-column">
    <div className="professional-entry">
      <div className="flex sb">
        <p className="title">{title}</p>
        <p className="company">
          <span className="icon fa-industry spaced" />
          {company}
        </p>
      </div>
      <hr />
      <div className="flex">
        <p className="location">
          <span className="icon fa-map-marker spaced" />
          {location}
        </p>
        <p className="time">
          <span className="icon fa-calendar spaced" />
          {time}
        </p>
      </div>
      {children}
    </div>
  </div>
);

Professional.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Professional;
