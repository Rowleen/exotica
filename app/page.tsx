import { Header } from './components';

import styles from './sass/home.module.sass';

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
    </div>
  );
}
