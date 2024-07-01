import { FC } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import type { modalName } from '../../shared/types/modalName'

import styles from './modal.module.sass'

interface ModalProps {
  children: React.ReactNode
  modalName: modalName
  handleToggle: (modal: modalName, toggle: boolean) => void
  toggle: boolean
}

const Modal: FC<ModalProps> = ({
  children,
  handleToggle,
  toggle,
  modalName
}) => {
  const modalClass = classNames({
    [styles.overlay]: true,
    [styles.open]: toggle,
    [styles.close]: !toggle
  })

  return (
    <div className={modalClass}>
      <div className={styles.modal}>
        <Image
          role='button'
          src='/images/close-icon.svg'
          alt='Close button'
          width={0}
          height={0}
          className={styles.closeIcon}
          onClick={() => handleToggle(modalName, false)}
        />
        {children}
      </div>
    </div>
  )
}

export default Modal
