import { FC } from 'react';
import Image from 'next/image';

import styles from './header.module.sass';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoWrapper}>
        <Image src="/images/logo.svg" alt="Logo image" width={40} height={40} />
      </div>
    </header>
  );
};

export default Header;
