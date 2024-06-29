import { FC } from 'react'
import { ChangeHandler, RefCallBack } from 'react-hook-form'

import styles from './input.module.sass'

interface InputProps {
  type: 'input' | 'search' | 'checkbox' | 'url' | 'text' | 'number' | 'submit'
  placeholder?: string
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
  ref?: RefCallBack
  name?: string
  min?: string | number | undefined
  max?: string | number | undefined
}

const Input: FC<InputProps> = ({ type, placeholder, name }) => {
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}

export default Input
