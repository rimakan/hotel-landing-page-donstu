import React from 'react';
import s from './Offering.module.scss';
import FlexGroup from '../../uikit/FlexGroup/FlexGroup';
import Button from '../../uikit/Button/Button';

interface OfferingProps {
  title: string;
  offerText: React.ReactNode;
  imgUrl: string;
}

const Offering: React.FC<OfferingProps> = ({ title, offerText, imgUrl }) => {
  const handleClickButton = () => {
    alert('unavailable :(');
  };

  return (
    <FlexGroup className={s.offering} gap="115px" justifyContent="center">
      <div className={s.offering__content}>
        <h2>{title}</h2>
        <div>{offerText}</div>
        <img className={s.img_mobile} src={imgUrl} alt="" />
        <Button onClick={handleClickButton}>EXPLORE</Button>
      </div>
      <img className={s.img_fullscreen} src={imgUrl} alt="" />
    </FlexGroup>
  );
};

export default Offering;
