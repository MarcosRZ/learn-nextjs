import React from 'react';
import PropTypes from 'prop-types';

const TimelineEvent = ({ date, sub, techs, title, company, location, children }) => (
  <div className="timeline-event-container">
    <div className="timeline-event-date">
      <div className="timeline-event-year" title="From - to">{date}</div>
      <div className="timeline-event-sub" title="Total time">{sub}</div>
    </div>
    <div className="timeline-event-description">
      <div className="dot" title="Career checkpoint! (Red means 'current' :P)" />
      <h3 title="Job title">{title}</h3>
      <h4 title="Company">{company}</h4>
      <div className="flex flex-column">
        <p className="event-description-item location">
          <span title="Location" className="icon fa-map-marker spaced" />
          {location}
        </p>
        <p className="event-description-item date">
          <span title="From - to / total time" className="icon fa-calendar spaced" />
          {date}
        </p>
        <p className="event-description-item techs">
          <span title="Technologies summary" className="icon fa-cogs spaced" />
          {techs}
        </p>
      </div>
      {children}
    </div>
  </div>
);

TimelineEvent.propTypes = {
  date: PropTypes.string.isRequired,
  sub: PropTypes.string,
  title: PropTypes.string.isRequired,
  techs: PropTypes.string,
  company: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

TimelineEvent.defaultProps = {
  techs: "",
  sub: "",
};

export default TimelineEvent;
