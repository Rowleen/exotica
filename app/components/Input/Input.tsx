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
  pattern?: string
  required?: boolean
}

const Input: FC<InputProps> = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  pattern,
  required
}) => {
  return (
    <input
      className={styles.input}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      pattern={pattern}
      required={required}
    />
  )
}

export default Input
