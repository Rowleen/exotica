import { FC } from 'react'
import { ChangeHandler, RefCallBack } from 'react-hook-form'

import styles from './textarea.module.sass'

interface TextareaProps {
  placeholder?: string
  rows?: number
  cols?: number
}

const Textarea: FC<TextareaProps> = ({ cols, placeholder, rows }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      rows={rows}
      cols={cols}
    ></textarea>
  )
}

export default Textarea
