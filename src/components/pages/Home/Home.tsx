import React from 'react';
import BasePage from '../../layouts/BasePage/BasePage';
import hotel from '../../img/hotel.png';
import s from './Home.module.scss';
import { offerings } from '../../../configs/offerings';
import Offering from '../../common/Offering/Offering';

const Home: React.FC = () => {
  return (
    <BasePage bgImageUrl={hotel}>
      <div className={s.homePage}>
        <header className={s.homePage__header}>
          <h2>All our room types are including complementary breakfast</h2>
        </header>

        <div className={s.homePage__offerings}>
          {offerings.map(({ id, title, content, imgUrl }) => (
            <Offering
              key={id}
              title={title}
              offerText={content}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </BasePage>
  );
};

export default Home;
