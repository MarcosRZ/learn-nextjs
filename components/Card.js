import React from 'react';
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

export default Card;
