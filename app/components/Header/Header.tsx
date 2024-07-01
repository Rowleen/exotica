'use client'
import { FC } from 'react'
import Image from 'next/image'
import Button from '../Button/Button'

import type { modalName } from '../../shared/types/modalName'

import styles from './header.module.sass'

interface HeaderProps {
  handleToggleModal: (modal: modalName, toggle: boolean) => void
}

const Header: FC<HeaderProps> = ({ handleToggleModal }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image src='/images/logo.svg' alt='Logo image' width={40} height={40} />
      </div>

      <Button
        color='secondary'
        text='Create new trip'
        size='medium'
        shape='button'
        type='button'
        onClick={() => handleToggleModal('createTrip', true)}
      />
    </header>
  )
}

export default Header
