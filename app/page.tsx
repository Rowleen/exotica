'use client';
import { Header, Searcher } from './components';

import styles from './sass/home.module.sass';

export default function Home() {
  return (
    <main className={styles.home}>
      <Header />

      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>The places you dream of</h1>

        <h2 className={styles.subtitle}>Let's live new adventures</h2>
      </div>

      <Searcher />
    </main>
  );
}
