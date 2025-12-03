import React from 'react';
import BasePage from '../../layouts/BasePage/BasePage';
import palms from '../../img/palms.png';
import s from './Facilities.module.scss';
import { facilities } from '../../../configs/facilities';
import Facility from '../../common/Facility/Facility';

const Facilities: React.FC = () => {
  return (
    <BasePage bgImageUrl={palms}>
      <div className={s.facilitiesPage}>
        <header className={s.facilitiesPage__header}>
          <h2>FACILITIES</h2>
          <p>
            We want your stay at our lush hotel to be truly unforgettable. That
            is why we give special attention to all of your needs so <br /> that
            we can ensure an experience quite unique. Luxury hotels offers the
            perfect setting with stunning views for leisure <br /> and our
            modern luxury resort facilities will help you enjoy the best of all.
          </p>
        </header>

        <div className={s.facilitiesPage_items}>
          {facilities.map(({ id, title, imgUrl }) => (
            <Facility
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

export default Facilities;
