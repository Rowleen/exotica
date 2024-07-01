import { FC } from 'react'

import styles from './input.module.sass'

interface InputProps {
  type: 'input' | 'search' | 'url' | 'text'
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  name?: string
  min?: string | number | undefined
  max?: string | number | undefined
  value: string
}

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  onChange,
  value
}) => {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

export default Input
