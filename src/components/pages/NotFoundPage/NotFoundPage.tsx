import React from 'react';
import BasePage from '../../layouts/BasePage/BasePage';
import s from './NotFoundPage.module.scss';
import FlexGroup from '../../uikit/FlexGroup/FlexGroup';
import { Link } from 'react-router-dom';
import dubaiHotel from '../../img/dubai-hotel.jpg';

const NotFoundPage: React.FC = () => {
  return (
    <BasePage
      variant="secondary"
      className={s.notFoundPage}
      customIntro={<h1 className={s.notFoundPage__errorCode}>404</h1>}
    >
      <FlexGroup
        className={s.notFoundPage__body}
        gap="50px"
        justifyContent="space-between"
      >
        <div>
          The page is not found. <br />
          Please return to the{' '}
          <Link to="/" className="text-link">
            Home page
          </Link>
        </div>
        <img src={dubaiHotel} alt="burj-al-arab" />
      </FlexGroup>
    </BasePage>
  );
};

export default NotFoundPage;
