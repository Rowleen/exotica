'use client';
import { useState, useCallback } from 'react';
import { Trip } from './core/domain/entities/Trip';
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
  const [selectedTrip, setSelectedTrip] = useState<Trip>();

  const { trips, isLoading, handleFilterByStatus, handleFilterByTerm } =
    useFilterTrips();

  const handleSelectTrip = useCallback((tripId: number) => {
    const selectTrip = trips.find((trip: Trip) => trip.id === tripId);

    setSelectedTrip(selectTrip);
    setToggleModal(true);
  }, []);

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
            handleSelectTrip={handleSelectTrip}
            handleDeleteTrip={() => null}
            handleEditTrip={() => null}
          />
        )}
      </main>

      {selectedTrip && (
        <Modal toggle={toggleModal} handleToggle={setToggleModal}>
          <TripDetails trip={selectedTrip} />
        </Modal>
      )}
    </div>
  );
}
