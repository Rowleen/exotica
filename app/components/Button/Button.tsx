'use client'
import { FC } from 'react'
import classNames from 'classnames'

import styles from './button.module.sass'

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger'
  text: string
  onClick?: (event: React.MouseEvent) => void
  size?: 'small' | 'medium'
  shape: 'pill' | 'button' | 'link'
  value?: string
  type: 'button' | 'submit' | 'reset' | undefined
}

const Button: FC<ButtonProps> = ({
  color,
  text,
  onClick,
  size,
  shape,
  value,
  type
}) => {
  const buttonClass = classNames({
    [styles.button]: shape === 'button',
    [styles.pill]: shape === 'pill',
    [styles.link]: shape === 'link',
    [styles.primary]: color === 'primary',
    [styles.secondary]: color === 'secondary',
    [styles.linkDanger]: color === 'danger',
    [styles.medium]: size === 'medium',
    [styles.small]: size === 'small'
  })

  return (
    <button className={buttonClass} type={type} onClick={onClick} value={value}>
      {text}
    </button>
  )
}

export default Button
