import React from 'react';
import s from './Room.module.scss';

interface RoomProps {
  title: string;
  imgUrl: string;
}

const Room: React.FC<RoomProps> = ({ title, imgUrl }) => {
  return (
    <div className={s.room}>
      <img src={imgUrl} alt={title} />
      <div className={s.room__title}>{title}</div>
    </div>
  );
};

export default Room;
