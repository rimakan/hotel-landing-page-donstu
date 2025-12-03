import React from 'react';
import s from './Button.module.scss';
import cn from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'large' | 'small';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'large',
  disabled,
  onClick,
  ...props
}) => {
  const classNames = cn(s.button, {
    [s.button_large]: variant === 'large',
    [s.button_small]: variant === 'small',
  });

  return (
    <button
      onClick={onClick}
      className={classNames}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
