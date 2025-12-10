import React from 'react';
import s from './Footer.module.scss';
import FlexGroup from '../../uikit/FlexGroup/FlexGroup';
import luxuryHotels from '../../img/icons/luxuryHotels.svg';
import twitterLogo from '../../img/icons/twitter.svg';
import fbLogo from '../../img/icons/facebook.svg';
import igLogo from '../../img/icons/instagram.svg';
import { contactData } from '../../../configs/constants';
import { Link } from 'react-router-dom';
import SocialItem from './SocialItem/SocialItem';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <FlexGroup justifyContent="space-between" className={s.container}>
        <div className={s.info}>
          <img src={luxuryHotels} alt="logo" />
          <div className={s.contacts}>
            <div>{contactData.address}</div>
            <div>{contactData.phone}</div>
            <div>{contactData.email}</div>
          </div>
        </div>
        <div className={s.links}>
          <Link to="/contact" className={s.link}>
            Contact
          </Link>
          <div className={s.link}>Terms & Conditions</div>
        </div>
        <div className={s.socials}>
          <SocialItem logo={fbLogo} title="Facebook" />
          <SocialItem logo={twitterLogo} title="Twitter" />
          <SocialItem logo={igLogo} title="Instagram" />
        </div>
      </FlexGroup>
    </footer>
  );
};

export default Footer;
