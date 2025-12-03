import React from 'react';
import s from './Login.module.scss';
import BasePage from '../../layouts/BasePage/BasePage';
import FlexGroup from '../../uikit/FlexGroup/FlexGroup';
import Button from '../../uikit/Button/Button';
import { useLoginForm } from './useLoginForm';

const Login: React.FC = () => {
  const { onLogin, onChange, isValid } = useLoginForm();

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ email: event.target.value });
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ password: event.target.value });
  };

  const handleClickLogin = () => {
    onLogin();
  };

  return (
    <BasePage variant="tertiary" contentClassname={s.loginPage}>
      <div className={s.loginPage__form}>
        <FlexGroup
          gap="30px"
          justifyContent="space-between"
          className={s.input}
        >
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={handleChangeEmail} />
        </FlexGroup>

        <FlexGroup
          gap="30px"
          justifyContent="space-between"
          className={s.input}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChangePassword}
          />
        </FlexGroup>

        <div className={s.buttonBlock}>
          <Button
            variant="small"
            onClick={handleClickLogin}
            disabled={!isValid}
          >
            Login
          </Button>
        </div>
      </div>
    </BasePage>
  );
};

export default Login;
