'use client'
import { useState, useCallback } from 'react'
import { Trip } from './core/domain/entities/Trip'
import type { modalName } from './shared/types/modalName'
import useFilterTrips from './Hooks/useFilterTrips'
import {
  Button,
  Header,
  Modal,
  Searcher,
  Trips,
  TripDetails,
  TripDetailsForm
} from './components'

import styles from './sass/home.module.sass'

export default function Home() {
  const [toggleModal, setToggleModal] = useState({
    createTrip: false,
    editTrip: false,
    showTrip: false
  })

  const [selectedTrip, setSelectedTrip] = useState<Trip>()

  const {
    trips,
    isLoading,
    handleFilterByStatus,
    handleFilterByTerm,
    handleDeleteTrip
  } = useFilterTrips()

  const handleToggleModal = (modal: modalName, toggle: boolean) => {
    setToggleModal({ ...toggleModal, [modal]: toggle })
  }

  const handleSelectTrip = useCallback(
    (tripId: number, modalName: modalName) => {
      const selectTrip = trips.find((trip: Trip) => trip.id === tripId)

      setSelectedTrip(selectTrip)
      handleToggleModal(modalName, true)
    },
    [trips]
  )

  return (
    <div className={styles.home}>
      <Header handleToggleModal={handleToggleModal} />

      <section className={styles.titleWrapper}>
        <h1 className={styles.title}>The places you dream of</h1>

        <h2 className={styles.subtitle}>Let&apos;s live new adventures</h2>
      </section>

      <section className={styles.searcherWrapper}>
        <Searcher handleOnSearch={handleFilterByTerm} />
      </section>

      <section className={styles.filterPillsWrapper}>
        <Button
          text='All'
          value='all'
          shape='pill'
          type='button'
          onClick={handleFilterByStatus}
        />
        <Button
          text='Upcoming'
          value='toDo'
          shape='pill'
          type='button'
          onClick={handleFilterByStatus}
        />
        <Button
          text='Complete'
          value='done'
          shape='pill'
          type='button'
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
            handleDeleteTrip={handleDeleteTrip}
          />
        )}
      </main>

      {selectedTrip && toggleModal.showTrip && (
        <Modal
          modalName='showTrip'
          toggle={toggleModal.showTrip}
          handleToggle={handleToggleModal}
        >
          <TripDetails trip={selectedTrip} />
        </Modal>
      )}

      {toggleModal.createTrip && (
        <Modal
          modalName='createTrip'
          toggle={toggleModal.createTrip}
          handleToggle={handleToggleModal}
        >
          <TripDetailsForm action='create' />
        </Modal>
      )}

      {selectedTrip && toggleModal.editTrip && (
        <Modal
          modalName='editTrip'
          toggle={toggleModal.editTrip}
          handleToggle={handleToggleModal}
        >
          <TripDetailsForm action='edit' trip={selectedTrip} />
        </Modal>
      )}
    </div>
  )
}
