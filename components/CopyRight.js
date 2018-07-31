import React from 'react';
import { ADDRESS } from '../config/app';

const CopyRight = () => {

  const { NAME } = ADDRESS;

  return (
    <ul className="copyright">
      <li>&copy; {NAME} | All rights reserved.</li>
      {/* <li>
        Design: <a href="http://html5up.net">HTML5 UP</a>
      </li> */}
    </ul>
  );
};
export default CopyRight;
