import React from 'react';


const Banner = (props) => {
  const { children } = props;

  return (
    <section id="banner">
      <div className="inner">
        {/* <div className="logo">
      <span className="icon fa-diamond" />
    </div> */}
        {children}
      </div>
    </section>
  );
};

export default Banner;
