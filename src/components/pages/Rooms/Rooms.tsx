import React from 'react';
import BasePage from '../../layouts/BasePage/BasePage';
import room from '../../img/bedroom.png';
import s from './Rooms.module.scss';
import { rooms } from '../../../configs/rooms';
import Room from '../../common/Room/Room';

const Rooms: React.FC = () => {
  return (
    <BasePage bgImageUrl={room}>
      <div className={s.roomsPage}>
        <header className={s.roomsPage__header}>
          <h2>ROOMS AND RATES</h2>
          <p>
            Each of our bright, light-flooded rooms come with everything you
            could possibly need for a comfortable stay. And yes, <br />{' '}
            comfort isn’t our only objective, we also value good design, sleek
            contemporary furnishing complemented <br /> by the rich tones of
            nature’s palette as visible from our rooms’ sea-view windows and
            terraces.
          </p>
        </header>

        <div className={s.roomsPage_items}>
          {rooms.map(({ id, title, imgUrl }) => (
            <Room
              //
              key={id}
              title={title}
              imgUrl={imgUrl}
            />
          ))}
        </div>
      </div>
    </BasePage>
  );
};

export default Rooms;
