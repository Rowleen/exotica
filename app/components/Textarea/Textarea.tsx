import { FC } from 'react'

import styles from './textarea.module.sass'

interface TextareaProps {
  ariaLabel?: string
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
  ariaLabel,
  cols,
  placeholder,
  rows,
  name,
  onChange,
  value,
  maxLength,
  required
}) => {
  return (
    <textarea
      aria-label={ariaLabel}
      className={styles.textarea}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
      value={value}
      maxLength={maxLength}
      required={required}
    ></textarea>
  )
}

export default Textarea
