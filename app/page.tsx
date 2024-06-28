'use client';
import useGetTrips from './core/domain/useCases/useGetTrips';
import { Button, Header, Searcher, Trips } from './components';

import styles from './sass/home.module.sass';

export default function Home() {
  const handleFilter = () => {
    return null;
  };

  const { trips, isLoading } = useGetTrips();

  return (
    <div className={styles.home}>
      <Header />

      <section className={styles.titleWrapper}>
        <h1 className={styles.title}>The places you dream of</h1>

        <h2 className={styles.subtitle}>Let's live new adventures</h2>
      </section>

      <section className={styles.searcherWrapper}>
        <Searcher />
      </section>

      <section className={styles.filterPillsWrapper}>
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
      </section>

      <main className={styles.tripsWrapper}>
        {isLoading ? (
          'Spinner'
        ) : (
          <Trips
            trips={trips}
            handleDeleteTrip={() => null}
            handleEditTrip={() => null}
          />
        )}
      </main>
    </div>
  );
}
