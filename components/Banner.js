import React from 'react';
import Xlink from '../routing/Xlink';

const Banner = () => {
  return (
    <section id="banner">
      <div className="inner">
        {/* <div className="logo">
      <span className="icon fa-diamond" />
    </div> */}
        <h2>Awesome title</h2>
        <p>
          Subtitle with some awesome-as-fuck content{' '}
          <Xlink href="/generic">
            <span className="link">HERE</span>
          </Xlink>
        </p>
      </div>
    </section>
  );
};

export default Banner;
