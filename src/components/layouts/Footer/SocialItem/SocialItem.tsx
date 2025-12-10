import React from 'react';
import FlexGroup from '../../../uikit/FlexGroup/FlexGroup';
import s from './SocialItem.module.scss';

interface SocialProps {
  logo: string;
  title: string;
}

const SocialItem: React.FC<SocialProps> = ({ logo, title }) => {
  return (
    <FlexGroup gap="25px" className={s.social}>
      <img src={logo} alt={title} />
      <div>{title}</div>
    </FlexGroup>
  );
};

export default SocialItem;
