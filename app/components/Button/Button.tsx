'use client';
import { FC } from 'react';
import classNames from 'classnames';

import styles from './button.module.sass';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger';
  text: string;
  onClick: () => void;
  size?: 'small' | 'medium';
  type: 'pill' | 'button' | 'link';
  value?: string;
}

const Button: FC<ButtonProps> = ({
  color,
  text,
  onClick,
  size,
  type,
  value
}) => {
  const buttonClass = classNames({
    [styles.button]: type === 'button',
    [styles.pill]: type === 'pill',
    [styles.link]: type === 'link',
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.linkDanger]: color === 'danger',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small'
  });

  return (
    <button className={buttonClass} onClick={onClick} value={value}>
      {text}
    </button>
  );
};

export default Button;
