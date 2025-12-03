import React from 'react';
import s from './Facility.module.scss';

interface FacilityProps {
  title: string;
  imgUrl: string;
}

const Facility: React.FC<FacilityProps> = ({ title, imgUrl }) => {
  return (
    <div className={s.facility}>
      <img src={imgUrl} />
      <h2>
        <span className={s.facility__title}>{title}</span>
      </h2>
    </div>
  );
};

export default Facility;
