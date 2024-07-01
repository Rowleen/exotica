import { FC } from 'react'

import styles from './textarea.module.sass'

interface TextareaProps {
  placeholder?: string
  name?: string
  rows?: number
  cols?: number
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  maxLength?: number
  required?: boolean
}

const Textarea: FC<TextareaProps> = ({
  cols,
  placeholder,
  rows,
  name,
  onChange,
  value,
  maxLength
}) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      required
    ></textarea>
  )
}

export default Textarea
