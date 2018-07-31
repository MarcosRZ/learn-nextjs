import React from 'react';
import { NETWORKS, ADDRESS } from '../config/app';

const ContactInfo = () => {
  return (
    <ul className="contact">
      <li className="fa-home">
        {ADDRESS.NAME}
        <br />
        {ADDRESS.LINE1}
        <br />
        {ADDRESS.LINE2}
      </li>
      {NETWORKS.PHONE && NETWORKS.PHONE.length > 0 ? (
        <li className="fa-phone">{NETWORKS.PHONE}</li>
      ) : null}
      {NETWORKS.FACEBOOK && NETWORKS.FACEBOOK.length > 0 ? (
        <li className="fa-facebook">
          <a href="#">{NETWORKS.FACEBOOK}</a>
        </li>
      ) : null}
      {NETWORKS.TWITTER && NETWORKS.TWITTER.length > 0 ? (
        <li className="fa-twitter">
          <a href="#">{NETWORKS.TWITTER}</a>
        </li>
      ) : null}
      {NETWORKS.INSTAGRAM && NETWORKS.INSTAGRAM.length > 0 ? (
        <li className="fa-instagram">
          <a href="#">{NETWORKS.INSTAGRAM}</a>
        </li>
      ) : null}
      {NETWORKS.EMAIL && NETWORKS.EMAIL.length > 0 ? (
        <li className="fa-envelope">
          <a href="#">{NETWORKS.EMAIL}</a>
        </li>
      ) : null}
    </ul>
  );
};

export default ContactInfo;
