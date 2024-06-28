import { FC } from 'react';
import type { Trip } from '../../core/domain/entities/Trip';
import TripCard from '../TripCard/TripCard';

import styles from './trips.module.sass';

interface TripsProps {
  trips: Trip[] | undefined;
  handleEditTrip: () => void;
  handleDeleteTrip: () => void;
}

const Trips: FC<TripsProps> = ({ trips, handleDeleteTrip, handleEditTrip }) => {
  return (
    <section className={styles.trips}>
      {trips ? (
        trips.map((trip, index) => (
          <TripCard
            key={index + trip.id}
            title={trip.title}
            photoUrl={trip.photo_url}
            description={trip.description}
          />
        ))
      ) : (
        <h2>We're so sorry. We havent trips yet 😓</h2>
      )}
    </section>
  );
};

export default Trips;
