import { FC } from 'react'

import styles from './textarea.module.sass'

interface TextareaProps {
  placeholder?: string
  name?: string
  rows?: number
  cols?: number
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const Textarea: FC<TextareaProps> = ({
  cols,
  placeholder,
  rows,
  name,
  onChange
}) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      name={name}
      onChange={onChange}
    ></textarea>
  )
}

export default Textarea
