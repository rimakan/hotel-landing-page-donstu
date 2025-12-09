import React from 'react';
import s from './Contact.module.scss';
import BasePage from '../../layouts/BasePage/BasePage';
import { contactData } from '../../../configs/constants';

const Contact: React.FC = () => {
  return (
    <BasePage
      className={s.contactPage}
      customIntro={<h2 className={s.contactPage__contact}>CONTACT-US</h2>}
      variant="secondary"
    >
      <div className={s.contactPage__body}>
        <header className={s.contactPage__bodyHeader}>
          <h2>WE ARE HERE FOR YOU</h2>
          <p>
            At Luxury Hotels, we take our customers seriously. Do you have any
            enquiries, compaints or requests, please forward it to our support
            desk and we will get back to you as soon as possible.
          </p>
        </header>
        <div className={s.contactPage__contactBlock}>
          <div className={s.address}>{contactData.address}</div>
          <div className={s.contactInfo}>
            <div>Phone: {contactData.phone}</div>
            <div>Email: {contactData.email}</div>
          </div>
        </div>
      </div>
    </BasePage>
  );
};

export default Contact;
