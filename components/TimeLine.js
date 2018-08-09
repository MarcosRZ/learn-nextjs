import React from 'react';
import PropTypes from 'prop-types';

// https://freefrontend.com/css-timelines/

const Timeline = ({ children, className }) => (
  <div id="content" className="timeline-container">
    <div className={`timeline ${className}`}>{
      React.Children.map(children, child => React.cloneElement(child, { className }))
      }
    </div>
  </div>
);

Timeline.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Timeline.defaultProps = {
  className: '',
}
export default Timeline;
