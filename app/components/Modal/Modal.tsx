import { Dispatch, FC, SetStateAction } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import styles from './modal.module.sass';

interface ModalProps {
  children: React.ReactNode;
  handleToggle: Dispatch<SetStateAction<boolean>>;
  toggle: boolean;
}

const Modal: FC<ModalProps> = ({ children, handleToggle, toggle }) => {
  const modalClass = classNames({
    [styles.overlay]: true,
    [styles.open]: toggle,
    [styles.close]: !toggle
  });

  return (
    <div className={modalClass}>
      <div className={styles.modal}>
        <Image
          role="button"
          src="/images/close-icon.svg"
          alt="Close button"
          width={0}
          height={0}
          className={styles.closeIcon}
          onClick={() => handleToggle(false)}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
