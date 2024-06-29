'use client';
import { useState } from 'react';
import useFilterTrips from './Hooks/useFilterTrips';
import {
  Button,
  Header,
  Modal,
  Searcher,
  Trips,
  TripDetails
} from './components';

import styles from './sass/home.module.sass';

export default function Home() {
  const [toggleModal, setToggleModal] = useState<boolean>(true);
  const { trips, isLoading, handleFilterByStatus, handleFilterByTerm } =
    useFilterTrips();

  return (
    <div className={styles.home}>
      <Header />

      <section className={styles.titleWrapper}>
        <h1 className={styles.title}>The places you dream of</h1>

        <h2 className={styles.subtitle}>Let's live new adventures</h2>
      </section>

      <section className={styles.searcherWrapper}>
        <Searcher handleOnSearch={handleFilterByTerm} />
      </section>

      <section className={styles.filterPillsWrapper}>
        <Button
          text="All"
          value="all"
          shape="pill"
          type="button"
          onClick={handleFilterByStatus}
        />
        <Button
          text="Upcoming"
          value="todo"
          shape="pill"
          type="button"
          onClick={handleFilterByStatus}
        />
        <Button
          text="Complete"
          value="done"
          shape="pill"
          type="button"
          onClick={handleFilterByStatus}
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

      {trips.length && (
        <Modal toggle={toggleModal} handleToggle={setToggleModal}>
          <TripDetails trip={trips[0]} />
        </Modal>
      )}
    </div>
  );
}
