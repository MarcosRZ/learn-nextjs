import React from 'react';
import PropTypes from 'prop-types';
import Xlink from '../routing/Xlink';

const Card = props => {
  const { title, content, linkText, linkUrl, imageUrl } = props;

  return (
    <article>
      <Xlink>
        <a className="image">
          <img src={imageUrl} alt="" />
        </a>
      </Xlink>
      <h3 className="major">{title}</h3>
      <p>{content}</p>
      <Xlink href={linkUrl}>
        <a className="special">{linkText}</a>
      </Xlink>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  linkText:PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Card;
