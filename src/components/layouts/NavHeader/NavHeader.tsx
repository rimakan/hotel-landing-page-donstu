import React from 'react';
import s from './NavHeader.module.scss';
import { NavLink } from 'react-router-dom';
import FlexGroup from '../../uikit/FlexGroup/FlexGroup';
import Button from '../../uikit/Button/Button';
import Logo from '../../common/Logo/Logo';
import { useDispatch } from '../../../hooks/useDispatch';
import { setLoggedState } from '../../../store/auth/authSlice';
import { useStore } from '../../../hooks/useStore';

const NavHeader: React.FC = () => {
  const dispatch = useDispatch();
  const loggedState = useStore(({ auth }) => auth.loggedState);

  const handleClickLogout = () => {
    dispatch(setLoggedState('not-logged'));
  };

  return (
    <FlexGroup
      className={s.navHeader}
      justifyContent="space-between"
      gap="20px"
    >
      <NavLink to="/">
        <Logo />
      </NavLink>

      <nav className={s.navHeader__navigation}>
        <FlexGroup gap="90px">
          <NavLink to="/">Home</NavLink>

          {loggedState === 'logged' && (
            <>
              <NavLink to="/facilities">Facilities</NavLink>
              <NavLink to="/rooms">Rooms</NavLink>
            </>
          )}

          <NavLink to="/contact">Contact-us</NavLink>

          {loggedState === 'logged' ? (
            <Button onClick={handleClickLogout}>Log out</Button>
          ) : (
            <NavLink to="/login">Log in</NavLink>
          )}
        </FlexGroup>
      </nav>
    </FlexGroup>
  );
};

export default NavHeader;
