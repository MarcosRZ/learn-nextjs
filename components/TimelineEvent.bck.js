import React from 'react';
import PropTypes from 'prop-types';

const TimelineEvent = ({ date, sub, title, company, location, children }) => (
  <li className="event" data-date={date} data-sub={sub}>
    <h3>{title}</h3>
    <h4>{company}</h4>
    {children}
    <div className="flex">
      <p className="location">
        <span className="icon fa-map-marker spaced" />
        {location}
      </p>
    </div>
  </li>
);

TimelineEvent.propTypes = {
  date: PropTypes.string.isRequired,
  sub: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TimelineEvent;
