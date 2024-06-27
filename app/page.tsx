'use client';
import { Button, Header, Searcher } from './components';

import styles from './sass/home.module.sass';

export default function Home() {
  const handleFilter = () => {
    return null;
  };

  return (
    <main className={styles.home}>
      <Header />

      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>The places you dream of</h1>

        <h2 className={styles.subtitle}>Let's live new adventures</h2>
      </div>

      <Searcher />

      <div className={styles.filterPillWrapper}>
        <Button text="All" value="all" type="pill" onClick={handleFilter} />
        <Button
          text="Upcoming"
          value="todo"
          type="pill"
          onClick={handleFilter}
        />
        <Button
          text="Complete"
          value="done"
          type="pill"
          onClick={handleFilter}
        />
      </div>
    </main>
  );
}
