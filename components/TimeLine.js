import React from 'react';

// https://freefrontend.com/css-timelines/

const TimeLine = () => (
  <div id="content">
    <ul className="timeline">
      <li className="event" data-date="65Million B.C.">
        <h3>Dinosaurs Roamed the Earth</h3>
        <p>RAWWWWWWRRR.</p>
      </li>
      <li className="event" data-date="2005">
        <h3>Creative Component Launched</h3>
        <p>
          Sed posuere consectetur est at lobortis. Nullam quis risus eget urna
          mollis ornare vel eu leo. Donec sed odio dui. Morbi leo risus, porta
          ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna
          mollis ornare vel eu leo. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
      </li>
      <li className="event" data-date="2009">
        <h3>Squareflair was Born</h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Nullam id dolor id nibh ultricies vehicula ut id elit.
          Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
          Vestibulum id ligula porta felis euismod semper.
        </p>{' '}
        <p>Get ready!</p>
      </li>
      <li className="event" data-date="January 24, 2018">
        <h3>Squareflair Today</h3>
        <p>
          Our success can be measured by lives changed and enhanced by more than
          eight years of Squarespace-focused service.
        </p>
      </li>
    </ul>
  </div>
);

export default TimeLine;
