import React, { useCallback, useMemo } from 'react';
import s from './NavHeader.module.scss';
import { NavLink } from 'react-router-dom';
import FlexGroup from '../../uikit/FlexGroup/FlexGroup';
import Button from '../../uikit/Button/Button';
import Logo from '../../common/Logo/Logo';
import { useDispatch } from '../../../hooks/useDispatch';
import { setLoggedState } from '../../../store/auth/authSlice';
import { useStore } from '../../../hooks/useStore';
import { Dropdown, type MenuProps } from 'antd';
import burger from '../../img/icons/burger.svg';

const NavHeader: React.FC = () => {
  const dispatch = useDispatch();
  const loggedState = useStore(({ auth }) => auth.loggedState);

  const handleClickLogout = useCallback(() => {
    dispatch(setLoggedState('not-logged'));
  }, [dispatch]);

  const items: MenuProps['items'] = useMemo(() => {
    const items: MenuProps['items'] = [
      {
        label: <NavLink to="/">Home</NavLink>,
        key: '0',
      },
      {
        label: <NavLink to="/facilities">Facilities</NavLink>,
        key: '1',
      },
      {
        label: <NavLink to="/rooms">Rooms</NavLink>,
        key: '2',
      },
      {
        label: <NavLink to="/contact">Contact</NavLink>,
        key: '3',
      },
      {
        label: (
          <Button onClick={handleClickLogout} variant="small">
            Log out
          </Button>
        ),
        key: '4',
      },
    ];

    if (loggedState === 'not-logged') {
      return [
        {
          label: <NavLink to="/">Home</NavLink>,
          key: '0',
        },
        {
          label: <NavLink to="/contact">Contact</NavLink>,
          key: '1',
        },
        {
          label: <NavLink to="/login">Log in</NavLink>,
          key: '2',
        },
      ];
    }

    return items;
  }, [handleClickLogout, loggedState]);

  return (
    <FlexGroup
      className={s.navHeader}
      justifyContent="space-between"
      gap="20px"
    >
      <NavLink to="/">
        <Logo />
      </NavLink>

      <div className={s.burgerMenu}>
        <Dropdown menu={{ items }}>
          <img src={burger} />
        </Dropdown>
      </div>

      <nav className={s.navHeader__navigation}>
        <FlexGroup gap="50px">
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
