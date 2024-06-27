'use client';
import { FC } from 'react';
import classNames from 'classnames';

import styles from './button.module.sass';

interface ButtonProps {
  color: 'primary' | 'secondary';
  text: string;
  onClick: () => void;
  size: 'small' | 'medium';
}

const Button: FC<ButtonProps> = ({ color, text, onClick, size }) => {
  const buttonClass = classNames({
    [styles.button]: true,
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small'
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
