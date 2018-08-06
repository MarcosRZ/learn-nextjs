import React from 'react';
import PropTypes from 'prop-types';

// https://freefrontend.com/css-timelines/

const Timeline = ({ children }) => (
  <div id="content" className="timeline-container">
    <div className="timeline">{children}</div>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Timeline;
